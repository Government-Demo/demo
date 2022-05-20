package com.demo_server.common.util;

import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

public class SecurityUtil {

  private static final Logger logger = LoggerFactory.getLogger(SecurityUtil.class);

  private SecurityUtil() {
  }

  public static Optional<String> getCurrentUsername() {
    //시큐리티 컨텍스트에서 어센티케이션을 꺼내 어센티케이션을 통해 로그인 정보를 꺼내주는 기능
    final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    if (authentication == null) {
      logger.debug("Security Context에 인증 정보가 없습니다.");
      return Optional.empty();
    }
        
    String username = null;
    if (authentication.getPrincipal() instanceof UserDetails) {
      UserDetails springSecurityUser = (UserDetails) authentication.getPrincipal();
      username = springSecurityUser.getUsername();
    } else if (authentication.getPrincipal() instanceof String) {
      username = (String) authentication.getPrincipal();
    }

    return Optional.ofNullable(username);
  }
}