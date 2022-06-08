import styled from "styled-components";

export const Caption = styled.div`
  height: 40px;
  display: flex;
  margin-top: 30px;
  margin-bottom: 60px;
  padding-bottom: 10px;
  border-bottom: 2px solid #dbdbdb;
  align-items: center;
`;
export const Name = styled.div`
  font-size: 24px;
  letter-spacing: -0.025em;
`;
export const ImgBox = styled.div`
  width: 675px;
  height: 750px;
  border: 1px solid black;
  display: inline-block;
`;
export const TextBox = styled.div`
  float: right;
`;
export const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.025em;
`;
export const Adress = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 42px;
  letter-spacing: -0.025em;
  color: #b1b1b1;
`;
export const Boxes = styled.div`
  display: flex;
`;
export const Box = styled.div`
  width: ${(props) => props.wi};
  height: ${(props) => props.he};
  border-radius: 10px;
  font-weight: 500;
  letter-spacing: -0.025em;
  text-align: center;
  background: ${(props) => props.bg};
  padding: ${(props) => props.pa};
  color: ${(props) => props.co};
  border: ${(props) => props.bo};
`;
export const BoxText = styled.div`
  display: inline-block;
  font-size: ${(props) => props.si};
  margin-right: ${(props) => props.mr};
  color: ${(props) => props.co};
`;
export const CostBox = styled.div`
  display: flex;
  padding: 0 30px;
  &:last-child {
    margin-top: 15px;
  }
`;
export const Cost = styled.span`
  color: ${(props) => props.co};
  font-weight: ${(props) => props.we};
  font-size: ${(props) => props.si};
  &:last-child {
    margin-left: auto;
  }
`;
