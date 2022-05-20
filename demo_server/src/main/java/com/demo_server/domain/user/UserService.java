package com.demo_server.domain.user;

public interface UserService {

  UserInfo.Main signup(UserCommand.SignupUserRequest command);
}
