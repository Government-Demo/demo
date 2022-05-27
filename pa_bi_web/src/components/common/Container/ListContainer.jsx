import { Container } from "react-bootstrap";
import { Caption, Name, Count, Dropdown } from "./ListContainer.style";
import styled from "styled-components";
import Paginate from "../Paginate/Paginate";
import List from "../List/List";
import data from "../../common/List/ListData";

const StyledContainer = styled(Container)`
  max-width: 1080px;
`;

export default function ListContainer() {
  return (
    <StyledContainer>
      <Caption>
        <Name>전체</Name>
        <Count>({data.length})</Count>
        <SelectBox options={OPTIONS}></SelectBox>
      </Caption>
      <List />
      <Paginate />
    </StyledContainer>
  );
}
const OPTIONS = [
  { value: "latest", name: "최신순" },
  { value: "popular", name: "인기순" },
  { value: "high", name: "가격높은순" },
  { value: "low", name: "가격낮은순" },
  { value: "distance", name: "거리순" },
];
const SelectBox = (props) => {
  const handleChange = (e) => {};
  return (
    <Dropdown onChange={handleChange}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Dropdown>
  );
};
