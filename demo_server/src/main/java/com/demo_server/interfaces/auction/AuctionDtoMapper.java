package com.demo_server.interfaces.auction;

import com.demo_server.domain.auction.AuctionInfo;
import java.util.List;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(
    componentModel = "spring", // 스프링에서 씀
    injectionStrategy = InjectionStrategy.CONSTRUCTOR,
    unmappedTargetPolicy = ReportingPolicy.ERROR //타겟이 안받으면 에러낸다 호난ㄴ다아주그냥
)
public interface AuctionDtoMapper {

  List<AuctionDto.ListResponse> of(List<AuctionInfo.Main> info);
}
