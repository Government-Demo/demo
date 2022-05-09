import { Link } from "react-router-dom";
import {
  MainHeader,
  Menu,
  Logo,
  IconList,
  MenuList,
  SubHeader,
  Wrap,
  Hurry,
} from "./Header.style";
import { ReactComponent as Pabi } from "./logo.svg";
import { BiUser, BiShoppingBag, BiCog } from "react-icons/bi";
import MenuListData from "./MenuListData";
export default function Header() {
  return (
    <Wrap>
      <MainHeader>
        <Logo>
          <Link to="/">
            <Pabi />
          </Link>
        </Logo>
        <Hurry>
          <Link to="/">임박매물</Link>
        </Hurry>
        <Menu>
          <IconList>
            <Link to="mypage">
              <BiUser />
            </Link>
          </IconList>
          <IconList>
            <Link to="/">
              <BiShoppingBag />
            </Link>
          </IconList>
          <IconList>
            <Link to="/">
              <BiCog />
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
    <MenuList>
      <Link to={props.link}>{props.name}</Link>
    </MenuList>
  ));
  return <Menu>{menuList}</Menu>;
};
