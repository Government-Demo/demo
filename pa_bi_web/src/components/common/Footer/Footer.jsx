import {
  Wrap,
  MainFooter,
  Menu,
  MenuList,
  Text,
  SubFooter,
} from "./Footer.style";
import { ReactComponent as Logo } from "./footer-logo.svg";

export default function Footer() {
  return (
    <Wrap>
      <SubFooter>
        <Logo />
      </SubFooter>
      <MainFooter>
        <Menu>
          <MenuList>팀소개</MenuList>
          <MenuList>경매참여안내</MenuList>
          <MenuList>문의하기</MenuList>
        </Menu>

        <Text>COPYRIGHT ©2022TEAM.KOOKBI ALL RIGHTS RESERVED.</Text>
      </MainFooter>
    </Wrap>
  );
}
