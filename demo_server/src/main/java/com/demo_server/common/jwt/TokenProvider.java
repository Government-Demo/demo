package com.demo_server.common.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;


//tokenprovider = 토큰 생성과 유효성 검증 담당
@Component
public class TokenProvider implements InitializingBean {

  //initializingBean을 imple 한 이유는
  //afterPropertiesSet()을 오버라이딩 해서
  //빈 생성후 DI 까지 받은 후에 secret 값을 base64 에서 Decode 한뒤 key에 담기 위함.

  private final Logger logger = LoggerFactory.getLogger(TokenProvider.class);
  private static final String AUTHORITIES_KEY = "auth";
  private final String secret;
  private final long tokenValidityInMilliseconds;
  private Key key;

  //프로바이더 -> 공급자
  public TokenProvider(
      //@value로 yml 에 있는 jwt 값들을 가지고옴
      @Value("${jwt.secret}") String secret,
      @Value("${jwt.token-validity-in-seconds}") long tokenVolidityInMilliseconds) {
    this.secret = secret;
    this.tokenValidityInMilliseconds = tokenVolidityInMilliseconds * 1000;
  }

  @Override
  public void afterPropertiesSet() {
    //여기서 주입받은 jwt.secret을 base64로 디코딩 한 값을 keyBytes에 할당
    byte[] keyBytes = Decoders.BASE64.decode(secret);
    //그 후 키변수에 할당
    this.key = Keys.hmacShaKeyFor(keyBytes);
  }

  public String createToken(Authentication authentication) {
    String authorities = authentication.getAuthorities().stream()
        .map(GrantedAuthority::getAuthority)
        //각 요소를 ,로 구분해서 나열
        .collect(Collectors.joining(","));
    //지금 시간
    long now = (new Date()).getTime();
    // validity에 지금 시간 + 유효시간 적용
    Date validity = new Date(now + this.tokenValidityInMilliseconds);

    // 토큰 생성
    return Jwts.builder()
        .setSubject(authentication.getName())
        //
        .claim(AUTHORITIES_KEY, authorities)
        //적용할 알고리즘
        .signWith(key, SignatureAlgorithm.ES512)
        // 밑에건 만료시간
        .setExpiration(validity)
        .compact();
  }


  //이건 역으로 token을 파라미터 로 받아서 토큰 정보로 authentication 객체를 리턴하는 메소드 생성
  public Authentication getAuthentication(String token) {
    Claims claims = Jwts
        .parserBuilder()
        .setSigningKey(key)
        .build()
        .parseClaimsJws(token) // 여기서 토큰을 파라미터로 받고 클레임을 만들어줌
        .getBody();
 
    // 클레임에서 권한 정보를 빼내는 작업
    Collection<? extends GrantedAuthority> authorities =
        Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
            .map(SimpleGrantedAuthority::new)
            .collect(Collectors.toList());

    User principal = new User(claims.getSubject(), "", authorities);

    return new UsernamePasswordAuthenticationToken(principal, token, authorities);
  }

  //유효한 토큰인지 확인
  public boolean validateToken(String token) {
    try {
      Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
      return true;
    } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
      logger.info("잘못된 JWT 서명입니다.");
    } catch (ExpiredJwtException e) {
      logger.info("만료된 JWT 토큰입니다.");
    } catch (UnsupportedJwtException e) {
      logger.info("지원되지 않는 JWT 토큰입니다.");
    } catch (IllegalArgumentException e) {
      logger.info("JWT 토큰이 잘못되었습니다.");
    }
    return false;
  }
}
