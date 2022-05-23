package com.demo_server.interfaces.user;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Set;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

public class UserDto {

  @Getter
  @ToString
  @NoArgsConstructor
  @AllArgsConstructor
  public static class SignupUserRequest {

    @NotNull
    @Size(min = 3, max = 50)
    private String loginId;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @NotNull
    @Size(min = 3, max = 100)
    private String password;

    @NotNull
    @Size(min = 3, max = 50)
    private String nickname;

    private Set<AuthorityRequest> signupAuthorityRequestSet;
  }

  @Getter
  @Setter
  @Builder
  @AllArgsConstructor
  @NoArgsConstructor
  public static class LoginRequest {

    @NotNull
    @Size(min = 3, max = 50)
    private String loginId;

    @NotNull
    @Size(min = 3, max = 100)
    private String password;
  }

  @Getter
  @ToString
  @AllArgsConstructor
  public static class UserResponse {

    private String loginId;
    private String nickname;
    private Set<AuthorityResponse> authorityResponseSet;
  }

  @Getter
  @NoArgsConstructor
  public static class AuthorityRequest {

    private String authorityName;
  }

  @Getter
  @Setter
  @Builder
  @AllArgsConstructor
  @NoArgsConstructor
  public static class LoginResponse {

    private String token;
  }

  @Getter
  @ToString
  @AllArgsConstructor
  public static class AuthorityResponse {

    private String authorityName;
  }
}
