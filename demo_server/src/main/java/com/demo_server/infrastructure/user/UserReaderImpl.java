package com.demo_server.infrastructure.user;

import com.demo_server.domain.user.User;
import com.demo_server.domain.user.UserReader;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class UserReaderImpl implements UserReader {

  private final UserRepository userRepository;

  @Override
  public Optional<User> findOneUser(String loginId) {
    return userRepository.findOneWithAuthoritiesByLoginId(loginId);
  }
}
