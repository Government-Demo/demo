package com.demo_server.interfaces.user;

import com.demo_server.domain.user.UserCommand;
import com.demo_server.domain.user.UserInfo;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.ReportingPolicy;

@Mapper(
    componentModel = "spring", // 스프링에서 씀
    injectionStrategy = InjectionStrategy.CONSTRUCTOR,
    unmappedTargetPolicy = ReportingPolicy.ERROR //타겟이 안받으면 에러낸다 호난ㄴ다아주그냥
)
public interface UserDtoMapper {

  UserCommand.SignupUserRequest of(UserDto.SignupUserRequest request);

  @Mappings({
      @Mapping(source = "signupUserInfo.authorityInfoSet", target = "authorityResponseSet")
  })
  UserDto.UserResponse of(UserInfo.Main signupUserInfo);
}
