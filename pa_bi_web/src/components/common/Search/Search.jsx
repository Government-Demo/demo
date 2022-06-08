import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

const SearchBar = styled.div`
  position: relative;
`;
const InputField = styled.input`
  width: 470px;
  height: 36px;
  border: 1px solid #0000d8;
  border-radius: 18px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.025em;
  color: #767676;
  padding: 8px 19px 9px 19px;
`;

export default function Search() {
  return (
    <SearchBar>
      <InputField type={"text"} placeholder="검색어를 입력해 주세요" />
    </SearchBar>
  );
}
