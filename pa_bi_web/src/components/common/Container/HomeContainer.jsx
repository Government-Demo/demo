import { Container } from "react-bootstrap";
import { Caption, More } from "./HomeContainer.style";
import styled from "styled-components";
import HomeList from "../List/HomeList";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// bootstrap css

const StyledContainer = styled(Container)`
  margin-bottom: 160px;
`;

export default function HomeContainer() {
  let navigate = useNavigate();
  let [lists, setLists] = useState([]);
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

  return (
    <StyledContainer>
      <Caption>진행중인 경매</Caption>
      <More
        onClick={() => {
          navigate("/item/all");
        }}
      >
        진행중인 경매 더보기 ▶
      </More>
      <HomeList lists={lists} />
      <Caption>임박매물</Caption>
      <More>임박매물 더보기 ▶</More>
      <HomeList lists={lists} />
      <Caption>인기매물</Caption>
      <More>인기매물 더보기 ▶</More>
      <HomeList lists={lists} />
    </StyledContainer>
  );
}
