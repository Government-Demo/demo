package com.demo_server.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

  @Bean
  public CorsFilter corsFilter() {
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowCredentials(true); //서버 응답시 js에서 처리 가능 할지
    config.addAllowedOrigin("*"); // 모든 ip
    config.addAllowedHeader("*"); // 모든 header
    config.addAllowedMethod("*"); // 모든 http 요청
 
    source.registerCorsConfiguration("/api/**", config);
    return new CorsFilter(source);
  }

}