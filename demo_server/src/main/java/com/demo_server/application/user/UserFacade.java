package com.demo_server.application.user;

import com.demo_server.domain.user.UserCommand;
import com.demo_server.domain.user.UserInfo;
import com.demo_server.domain.user.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserFacade {
    private final UserService userService;

    public UserInfo.Main signup(UserCommand.SignupUserRequest request) {
        var userInfo = userService.signup(request);
        return userInfo;
    }
}
