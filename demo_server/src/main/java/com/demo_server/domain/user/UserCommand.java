package com.demo_server.domain.user;


import com.demo_server.domain.authority.Authority;
import java.util.Collections;
import java.util.Set;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.security.crypto.password.PasswordEncoder;

public class UserCommand {

  @Getter
  @Builder
  @ToString
  public static class SignupUserRequest {

    private String loginId;
    private String password;
    private String nickname;

    private Set<SignupAuthorityRequest> signupAuthorityRequestSet;

    public User toEntity(PasswordEncoder passwordEncoder) {
      var authority = new Authority("ROLE_USER");
      return new User(
          loginId,
          passwordEncoder.encode(password),
          nickname,
          Collections.singleton(authority)
      );
    }
 
    @Getter
    @Builder
    public static class SignupAuthorityRequest {

      private String authorityName;
    }
  }
}
