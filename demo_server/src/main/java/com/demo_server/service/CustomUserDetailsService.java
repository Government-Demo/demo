package com.demo_server.service;

import com.demo_server.domain.user.User;
import com.demo_server.infrastructure.user.UserRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component("userDetailsService")
public class CustomUserDetailsService implements UserDetailsService {

  private final UserRepository userRepository;

  public CustomUserDetailsService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }
 
  @Override
  @Transactional
  //스프링이 로그인 요청을 가로 챌 때, username, password 변수 2개를 가로채는데
  //password는 스프링에서 알아서 함
  //username이 db에 있는지만 확인해주면 됨.
  //그걸 loadUserByUsername이 함
  public UserDetails loadUserByUsername(final String username) {
    //여기서는 권한과 유저네임을 같이 가지고옴
    return userRepository.findOneWithAuthoritiesByLoginId(username)
        .map(user -> createUser(username, user))
        .orElseThrow(() -> new UsernameNotFoundException(username + " -> 데이터베이스에서 찾을 수 없습니다."));
  }

  private org.springframework.security.core.userdetails.User createUser(String username,
      User user) {
//        if (!user.isActivated()) {
//            throw new RuntimeException(username + " -> 활성화되어 있지 않습니다.");
//        }
    List<GrantedAuthority> grantedAuthorities = user.getAuthorities().stream()
        .map(authority -> new SimpleGrantedAuthority(authority.getAuthorityName()))
        .collect(Collectors.toList());
    return new org.springframework.security.core.userdetails.User(user.getLoginId(),
        user.getPassword(),
        grantedAuthorities);
  }
}