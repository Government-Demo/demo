package com.demo_server.domain.auction;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuctionServiceImpl implements AuctionService {

  private final AuctionReader auctionReader;
  private final AuctionInfoMapper auctionInfoMapper;

  @Override
  public List<AuctionInfo.Main> auctionList() {
    return auctionInfoMapper.of(auctionReader.findAuctionList());
  }
}
