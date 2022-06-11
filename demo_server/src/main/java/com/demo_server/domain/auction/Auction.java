package com.demo_server.domain.auction;

import com.demo_server.domain.auction_category.AuctionCategory;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "auction")
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Auction {

  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @OneToMany(mappedBy = "auction", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<AuctionCategory> categories = new ArrayList<>();

  @Column(name = "title", length = 100)
  private String title;

  @Column(name = "content", length = 2000)
  private String content;

  @Column(name = "location", length = 100)
  private String location;

  @Column(name = "start_price")
  private Integer startPrice;

  @Column(name = "instant_price")
  private Integer instantPrice;

  @Column(name = "winning_price")
  private Integer winningPrice;

  @Column(name = "transaction_method", length = 20)
  private String transactionMethod;

}
