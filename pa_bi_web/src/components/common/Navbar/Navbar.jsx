import { Link } from "react-router-dom";
import React from "react";
import {
  MainHeader,
  Menu,
  Logo,
  IconList,
  MenuList,
  SubHeader,
  Wrap,
} from "./Navbar.style";
import { ReactComponent as Pabi } from "./logo.svg";
import MenuListData from "./MenuListData";
import Search from "../Search/Search";
import Modal from "./Modal";

export default function Header() {
  return (
    <Wrap>
      <MainHeader>
        <Logo>
          <Link to="/">
            <Pabi />
          </Link>
        </Logo>
        <Menu>
          <IconList>
            <Search />
          </IconList>
          <IconList>
            <Modal>로그인</Modal>
          </IconList>
        </Menu>
      </MainHeader>
      <SubHeader>
        <MenuData />
      </SubHeader>
    </Wrap>
  );
}

const MenuData = () => {
  const menuList = MenuListData.map((props) => (
    <MenuList key={props.id}>
      <Link to={props.link}>{props.name}</Link>
    </MenuList>
  ));
  return <Menu>{menuList}</Menu>;
};
