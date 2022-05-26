import styled from "styled-components";

export const Caption = styled.div`
  display: inline-block;
  font-size: 37px;
  font-size: 25px;
  color: #000000;
  margin-bottom: 30px;
  line-height: 37px;
  border-bottom: 3px solid #0000d8;
`;
export const Box = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin-bottom: 10px;
`;
export const Cost = styled.div`
  color: ${(props) => props.co};
  &:last-child {
    margin-left: auto;
  }
`;
