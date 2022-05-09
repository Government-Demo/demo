import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: 2500px;
  background-color: rgba(241, 241, 245, 0.6);
  z-index: 1;
`;
export const SectionTitle = styled.div`
  display: flex;
  width: 1033px;
  height: 75px;
  margin: 0 auto 64px;
  background-color: #fff;
  border-bottom: 2px solid #0000d8;
  justify-content: center;
  align-items: center;
`;
export const MainTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.025em;
  height: 36px;
  width: 200px;
`;
export const SubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.025em;
  height: 36px;
  width: 200px;
  line-height: 45px;
  margin-right: 320px;
`;
export const SearchBar = styled.input`
  width: 300px;
  height: 36px;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  font-size: 13px;
  padding: 8px 20px 9px 19px;
`;
export const Inside = styled.div`
  position: absolute;
  width: 1500px;
  height: 2330px;
  background-color: #fff;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 0;
  text-align: center;
`;
