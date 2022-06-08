import styled from "styled-components";

export const Cost = styled.span`
  color: ${(props) => props.co};

  font-weight: ${(props) => props.we};
  font-size: ${(props) => props.si};
  line-height: ${(props) => props.he};
  &:last-child {
    margin-left: auto;
  }
`;
export const Box = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
export const StyledTime = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.025em;
  text-align: right;
  margin-left: auto;
  margin-top: auto;
  img {
    margin-right: 10px;
  }
`;
