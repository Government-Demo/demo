package com.demo_server.application.auction;

import com.demo_server.domain.auction.AuctionInfo;
import com.demo_server.domain.auction.AuctionService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuctionFacade {

  private final AuctionService auctionService;

  public List<AuctionInfo.Main> auctionList() {
    return auctionService.auctionList();
  }
}
