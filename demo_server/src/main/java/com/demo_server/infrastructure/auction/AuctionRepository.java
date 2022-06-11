package com.demo_server.infrastructure.auction;

import com.demo_server.domain.auction.Auction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuctionRepository extends JpaRepository<Auction, Long> {

}
