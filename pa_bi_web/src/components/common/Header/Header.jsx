import { Link } from "react-router-dom";
import {
  MainHeader,
  Menu,
  Logo,
  IconList,
  MenuList,
  SubHeader,
  Wrap,
} from "./Header.style";
import { BiLogIn } from "react-icons/bi";
import { ReactComponent as Pabi } from "./logo.svg";
import MenuListData from "./MenuListData";
import Search from "../Search/Search";
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
            <Link to="/login">
              <BiLogIn />
              로그인/회원가입
            </Link>
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
    <MenuList key={(props.name, props.link)}>
      <Link to={props.link}>{props.name}</Link>
    </MenuList>
  ));
  return <Menu>{menuList}</Menu>;
};
