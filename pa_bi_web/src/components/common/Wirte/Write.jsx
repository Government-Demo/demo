import { Dropdown } from "./Write.style";
import { Container } from "react-bootstrap";
import styled from "styled-components";
const StyledContainer = styled(Container)`
  max-width: 1280px;
`;

export default function Write() {
  return (
    <StyledContainer>
      <SelectBox options={OPTIONS}></SelectBox>
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
