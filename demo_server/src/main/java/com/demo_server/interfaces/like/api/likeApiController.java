package com.demo_server.interfaces.like.api;


import com.demo_server.domain.like.Like;
import com.demo_server.domain.user.User;
import com.demo_server.service.LikeService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class likeApiController {
 

  @PostMapping("/api/insertLike")
  public void insertLike(@RequestBody Like like, User user) {
    LikeService.likeInsert(like, user);
  }
}
