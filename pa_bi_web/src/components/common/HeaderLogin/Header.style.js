import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 146px;
  position: relative;
  z-index: 9;
`;
export const MainHeader = styled.div`
  width: 100%;
  height: 90px;
  background-color: #fff;
  position: fixed;
  border-bottom: 1px solid rgba(241, 241, 245, 0.6);
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.ul`
  display: flex;
  font-size: 15px;
`;
export const Logo = styled.div`
  width: 200px;
  height: 50px;
  margin-right: 800px;
`;
export const Hurry = styled.div`
  margin-right: 50px;
  a {
    text-decoration: none;
    color: red;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
  }
`;
export const IconList = styled.li`
  margin-left: 30px;
  align-items: center;
  justify-content: center;
  a svg {
    height: 40px;
    width: 40px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
  }
`;

export const SubHeader = styled.div`
  position: fixed;
  display: flex;
  top: 90px;
  background-color: #fff;
  width: 100%;
  height: 56px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 12%);
  justify-content: center;
  align-items: center;
`;

export const MenuList = styled.li`
  margin-left: 20px;
  &: first-child {
    margin-left: 0px;
  }

  a {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
  }
`;
