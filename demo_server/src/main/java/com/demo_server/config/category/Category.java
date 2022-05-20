package com.demo_server.config.category;

import javax.persistence.*;

@Table(name = "category")
@Entity
public class Category {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

}
