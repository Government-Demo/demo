import styled from "styled-components";

export const Header = styled.div`
  font-weight: 500;
  font-size: 40px;
  text-align: center;
  letter-spacing: -0.02em;
  margin: 120px auto 85px;
`;
export const Box = styled.div`
  width: 1280px;
  background: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 25px;
`;
export const Cell = styled.div`
  display: flex;
  width: 1150px;
  border-bottom: 1px solid #dbdbdb;
  padding: 15px 0;
  margin: 0 auto;
  &:last-child {
    border-bottom: none;
  }
  &:nth-child(5) {
    align-items: flex-start;
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  letter-spacing: -0.025em;
  width: 110px;
`;
export const Form = styled.input`
  width: ${(props) => props.wi};
  height: 35px;
  border: 1px solid #0000d8;
  border-radius: 5px;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.025em;
  align-items: center;
  padding: 8px 16px;
`;
export const Dropdown = styled.select`
  height: 35px;
  border: 1px solid #0000d8;
  border-radius: 5px;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.025em;
  align-items: center;
  padding: 7px 12px;
`;
export const Textarea = styled.textarea`
  width: 1000px;
  height: 200px;
  border: 1px solid #0000d8;
  border-radius: 5px;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.025em;
  padding: 7px 12px;
`;
