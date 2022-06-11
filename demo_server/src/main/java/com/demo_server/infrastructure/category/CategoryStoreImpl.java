package com.demo_server.infrastructure.category;

import com.demo_server.domain.category.Category;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import javax.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class CategoryStoreImpl {

  private final CategoryRepository categoryRepository;

  @PostConstruct
  void init() {
    List<Category> basicCategories = new ArrayList<>();
    List<Category> categories = categoryRepository.findAll();

    basicCategories.add(new Category("홈/생활"));
    basicCategories.add(new Category("디지털/가전"));
    basicCategories.add(new Category("패션의류/잡화"));
    basicCategories.add(new Category("뷰티/쥬얼리"));
    basicCategories.add(new Category("자동차/아웃도어"));
    basicCategories.add(new Category("취미/스포츠"));
    basicCategories.add(new Category("기타중고물품"));

    basicCategories = basicCategories.stream().filter(
            basicCategory ->
                categories.stream()
                    .noneMatch(category ->
                        basicCategory.getName().equals(category.getName())))
        .collect(Collectors.toList());

    categoryRepository.saveAll(basicCategories);
  }
}
