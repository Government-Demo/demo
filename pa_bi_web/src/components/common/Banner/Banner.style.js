import styled from "styled-components";
import img from "./Img.png";
import logo from "./logo.png";

export const Image = styled.div`
  height: 548px;
  background-image: url(${img});
  background-blend-mode: multiply;
  background-size: cover;
  margin: 0 auto 176px;
  background-color: rgba(20, 20, 67, 0.7);
  background-repeat: no-repeat;
`;
export const Main = styled.div`
  text-align: center;
`;
export const TextBox = styled.div`
  margin-left: 20px;
  display: inline-block;
`;
export const Text = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  &:first-child {
    padding-top: 130px;
    font-weight: 700;
    font-size: 64px;
    line-height: 95px;
  }
`;
export const Boxes = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
`;
export const Box = styled.div`
  cursor: pointer;
  width: 180px;
  height: 55px;
  border-radius: 10px;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  padding: 13px 0px;
  background: #f1f1f5;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background: #5252ff;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.25);
    color: #ffffff;
    transition-duration: 0.3s;
  }
  &:active {
    background: #09098f;
    transition-duration: 0.1s;
  }
`;
