import styled from "styled-components";

export const Cost = styled.div`
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
  margin-bottom: 10px;
`;
