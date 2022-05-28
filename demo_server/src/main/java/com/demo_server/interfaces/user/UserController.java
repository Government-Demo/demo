package com.demo_server.interfaces.user;


import com.demo_server.application.user.UserFacade;
import com.demo_server.common.response.CommonResponse;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {

  private final UserFacade userFacade;
  private final UserDtoMapper userDtoMapper;

  @GetMapping("/hello")
  public ResponseEntity<String> hello() {
    return ResponseEntity.ok("hello");
  }

  @PostMapping("/signup")
  public CommonResponse signup(
      @Valid @RequestBody UserDto.SignupUserRequest request) {
    var command = userDtoMapper.of(request);
    var userInfo = userFacade.signup(command);
    var response = userDtoMapper.of(userInfo);
    return CommonResponse.success(response);
  }
}