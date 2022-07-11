package com.demo_server.domain.auction;

import java.util.List;

public interface AuctionReader {

  List<Auction> findAuctionList();
}
