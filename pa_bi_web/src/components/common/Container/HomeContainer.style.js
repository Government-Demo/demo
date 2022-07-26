import styled from "styled-components";

export const Caption = styled.div`
  display: inline-block;
  font-size: 25px;
  color: #000000;
  margin-top: 70px;
  font-weight: 500;
  line-height: 37px;
  border-bottom: 3px solid #0000d8;
  &:first-child {
    margin-top: 0px;
  }
`;

export const More = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  text-align: right;
  letter-spacing: -0.02em;
  color: #000000;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 10px;
  padding-bottom: 20px;
  cursor: pointer;
`;
