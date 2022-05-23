package com.demo_server.config;

import com.demo_server.common.jwt.JwtAccessDeniedHandler;
import com.demo_server.common.jwt.JwtAuthenticationEntryPoint;
import com.demo_server.common.jwt.JwtSecurityConfig;
import com.demo_server.common.jwt.TokenProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.CorsFilter;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  //토큰 공급자
  private final TokenProvider tokenProvider;
  //cors필터
  private final CorsFilter corsFilter;
  // 에러 클래스
  private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
  private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

  public SecurityConfig(
      TokenProvider tokenProvider,
      CorsFilter corsFilter,
      JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint,
      JwtAccessDeniedHandler jwtAccessDeniedHandler
  ) {
    this.tokenProvider = tokenProvider;
    this.corsFilter = corsFilter;
    this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
    this.jwtAccessDeniedHandler = jwtAccessDeniedHandler;
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Override
  public void configure(WebSecurity web) {
    web.ignoring()
        .antMatchers(
            "/mysql/**", "/favicon.ico", "/error"
        );
  }

  @Override       // config -> 쉽게 생각해서 구성 이 클래스는 시큐리티의 구성
  protected void configure(HttpSecurity httpSecurity) throws Exception {
    httpSecurity
        // token을 사용하는 방식이기 때문에 csrf를 disable.
        // 그럼 기존의 csrf는 어케 막는지 몰루겟음
        .csrf().disable()

        .addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)
        .exceptionHandling()
        //에러들을 우리가 만든걸로 교체
        .authenticationEntryPoint(jwtAuthenticationEntryPoint)
        .accessDeniedHandler(jwtAccessDeniedHandler)

        // 세션을 사용하지 않기 때문에 STATELESS로 설정
        .and()
        .sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

        //기본 폼로그인 , http basic 비 활성화
        .and()
        .formLogin().disable()
        .httpBasic().disable()

        //인증 없이 허가 되는 주소
        .authorizeRequests()
        //메인 api
        .antMatchers("/api/hello").permitAll()
        //토큰을 받기 위한 api
        .antMatchers("/api/authenticate").permitAll()
        //회원 가입 api
        .antMatchers("/api/signup").permitAll()
        //제외시 전부 인증 필요
        .anyRequest().authenticated()
 
        .and()
        .apply(new JwtSecurityConfig(tokenProvider));
  }
}
