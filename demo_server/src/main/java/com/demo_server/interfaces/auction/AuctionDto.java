package com.demo_server.interfaces.auction;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

public class AuctionDto {

  @Getter
  @Builder
  @ToString
  @AllArgsConstructor
  public static class ListResponse {

    private Long id;

    private List<CategoriesResponse> categories;

    private String title;

    private String content;

    private String location;

    private Integer startPrice;

    private Integer instantPrice;

    private Integer winningPrice;

    private String transactionMethod;
  }

  @Getter
  @Builder
  @ToString
  public static class CategoriesResponse {

    private CategoryResponse category;
  }

  @Getter
  @Builder
  @ToString
  public static class CategoryResponse {

    private String name;
  }
}
