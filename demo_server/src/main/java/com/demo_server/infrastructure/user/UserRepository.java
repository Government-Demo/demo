package com.demo_server.infrastructure.user;

import com.demo_server.domain.user.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

  @EntityGraph(attributePaths = "authorities")
  Optional<User> findOneWithAuthoritiesByLoginId(String loginId);
}
