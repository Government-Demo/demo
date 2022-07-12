import { Container } from "react-bootstrap";
import { Caption, Name, Count, Dropdown } from "./ListContainer.style";
import styled from "styled-components";
import Paginate from "../Paginate/Paginate";
import List from "../List/List";
import Pagination from "../Paginate/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";

const StyledContainer = styled(Container)`
  max-width: 1280px;
`;

export default function ListContainer() {
  let [list, setList] = useState([]);
  useEffect(() => {
    const getList = () => {
      axios
        .get("/api/auction")
        .then((response) => {
          setList(response.data.data);
        })
        .catch(() => console.log("실패"));
    };
    getList();
  }, []);

  return (
    <StyledContainer>
      <Caption>
        <Name></Name>
        <Count>({list.length})</Count>
        <SelectBox options={OPTIONS}></SelectBox>
      </Caption>
      <List list={list} />

      <Paginate />
      {/* <Pagination /> */}
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
