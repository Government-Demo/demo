import { Container } from "react-bootstrap";
import { Caption, Name, Count, Dropdown } from "./ListContainer.style";
import styled from "styled-components";
import Paginate from "../Paginate/Paginate";
import List from "../List/List";
import Pagination from "../Paginate/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const StyledContainer = styled(Container)`
  max-width: 1280px;
`;

export default function ListContainer() {
  let [lists, setLists] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const getList = () => {
      axios
        .get("/api/auction")
        .then((response) => {
          setLists(response.data.data);
        })
        .catch(() => console.log("실패"));
    };
    getList();
  }, []);
  function Title() {
    switch (location.pathname) {
      case "/item/all":
        return <Name>전체</Name>;
      case "/item/life":
        return <Name>홈/생활</Name>;
      case "/item/digital":
        return <Name>디지털/가전</Name>;
      case "/item/clothes":
        return <Name>패션의류/잡화</Name>;
      case "/item/beauty":
        return <Name>뷰티/주얼리</Name>;
      case "/item/car":
        return <Name>자동차/아웃도어</Name>;
      case "/item/hobby":
        return <Name>취미/스포츠</Name>;
      case "/item/etc":
        return <Name>기타중고물품</Name>;
      default:
        return <Name>전체</Name>;
    }
  }
  function Category() {
    switch (location.pathname) {
      case "/item/all":
        return "전체";
      case "/item/life":
        return "홈/생활";
      case "/item/digital":
        return "디지털/가전";
      case "/item/clothes":
        return "패션의류/잡화";
      case "/item/beauty":
        return "뷰티/주얼리";
      case "/item/car":
        return "자동차/아웃도어";
      case "/item/hobby":
        return "취미/스포츠";
      case "/item/etc":
        return "기타중고물품";
      default:
        alert("잘못된 접근입니다");
    }
  }
  return (
    <StyledContainer>
      <Caption>
        {Title()}
        <Count>
          (
          {
            lists.filter(
              Category() === "전체"
                ? (list) => list
                : (list) => list.categories[0]?.category.name === Category()
            ).length
          }
          )
        </Count>
        <SelectBox options={OPTIONS}></SelectBox>
      </Caption>
      <List
        lists={lists.filter(
          Category() === "전체"
            ? (list) => list
            : (list) => list.categories[0]?.category.name === Category()
        )}
      />

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
