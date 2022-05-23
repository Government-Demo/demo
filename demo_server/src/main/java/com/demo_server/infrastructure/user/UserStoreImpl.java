package com.demo_server.infrastructure.user;

import com.demo_server.domain.user.User;
import com.demo_server.domain.user.UserStore;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class UserStoreImpl implements UserStore {

  private final UserRepository userRepository;

  @Override
  public User signup(User user) {
    return userRepository.save(user);
  }
}
