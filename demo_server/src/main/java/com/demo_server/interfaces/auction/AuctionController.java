package com.demo_server.interfaces.auction;

import com.demo_server.application.auction.AuctionFacade;
import com.demo_server.common.response.CommonResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AuctionController {

  private final AuctionFacade auctionFacade;
  private final AuctionDtoMapper auctionDtoMapper;

  @GetMapping("/auction")
  public CommonResponse auctionList() {
    var info = auctionFacade.auctionList();
    var response = auctionDtoMapper.of(info);
    return CommonResponse.success(response, "조회되었습니다");
  }
}
