package com.demo_server.domain.user;

import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
public class UserInfo {

  @Getter
  @Builder
  @ToString
  @AllArgsConstructor
  public static class Main {

    private String loginId;
    private String password;
    private String nickname;
    private Set<AuthorityInfo> authorityInfoSet;

  }
 
  @Getter
  @Builder
  @ToString
  public static class AuthorityInfo {

    private String authorityName;
  }
}
