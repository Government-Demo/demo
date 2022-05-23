package com.demo_server.domain.user;

import com.demo_server.domain.authority.Authority;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user")
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class User {

  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
 
  @Column(name = "login_id", length = 50, unique = true)
  private String loginId;

  @Column(name = "password", length = 200)
  private String password;

  @Column(name = "nickname", length = 20)
  private String nickname;

  @ManyToMany
  @JoinTable(
      name = "user_authority",
      joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "id")},
      inverseJoinColumns = {
          @JoinColumn(name = "authority_name", referencedColumnName = "authority_name")})
  private Set<Authority> authorities;

  public User(String loginId, String password, String nickname, Set<Authority> authorities) {
    this.loginId = loginId;
    this.password = password;
    this.nickname = nickname;
    this.authorities = authorities;
  }
}