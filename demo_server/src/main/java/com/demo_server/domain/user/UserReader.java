package com.demo_server.domain.user;

import java.util.Optional;

public interface UserReader {
 
  Optional<User> findOneUser(String loginId);
}
