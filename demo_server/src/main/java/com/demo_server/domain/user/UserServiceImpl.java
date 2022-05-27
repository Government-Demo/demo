package com.demo_server.domain.user;

import com.demo_server.common.exception.DuplicateUserException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

  private final UserStore userStore;
  private final UserReader userReader;
  private final PasswordEncoder passwordEncoder;
  private final UserInfoMapper userInfoMapper;

  @Override
  @Transactional
  public UserInfo.Main signup(UserCommand.SignupUserRequest request) {
    if (userReader.findOneUser(request.getLoginId()).orElse(null) != null) {
      throw new DuplicateUserException("이미 가입되어 있는 유저입니다.");
    }
    return userInfoMapper.of(userStore.signup(request.toEntity(passwordEncoder)));
  }

//    @Transactional(readOnly = true)
//    //유저네임을 파라미터로 받아서 어떠한 유저네임이든 해당하는 권한객체를 가져옴
//    public UserDto getUserWithAuthorities(String username) {
//        return UserDto.from(userRepository.findOneWithAuthoritiesByUsername(username).orElse(null));
//    }
//
//    //현재 시큐리티컨텍스트에 저장되있는 유저에 해당하는 유저정보와 권한정보만 받아감
//    @Transactional(readOnly = true)
//    public UserDto getMyUserWithAuthorities() {
//        return UserDto.from(SecurityUtil.getCurrentUsername().flatMap(userRepository::findOneWithAuthoritiesByUsername).orElse(null));
//    }
}