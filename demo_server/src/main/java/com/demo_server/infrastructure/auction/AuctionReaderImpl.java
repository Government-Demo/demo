package com.demo_server.infrastructure.auction;

import com.demo_server.domain.auction.Auction;
import com.demo_server.domain.auction.AuctionReader;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class AuctionReaderImpl implements AuctionReader {

  private final AuctionRepository auctionRepository;

  @Override
  public List<Auction> FindAuctionList() {
    return auctionRepository.findAll();
  }
}
