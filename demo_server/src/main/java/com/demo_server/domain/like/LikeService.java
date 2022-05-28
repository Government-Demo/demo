package com.demo_server.domain.like;

import com.demo_server.domain.user.User;
import com.demo_server.repository.LikeRepository;
import org.springframework.stereotype.Service;

@Service
public class LikeService {

  static LikeRepository likeRepository;

  public static void likeInsert(Like like, User user) {
    like.setUser(user);
    likeRepository.save(like);
  }
}
