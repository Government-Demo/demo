package com.demo_server.domain.user;

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
public interface UserInfoMapper {
 
  @Mappings({
      @Mapping(source = "user.authorities", target = "authorityInfoSet")})
  UserInfo.Main of(User user);
}
