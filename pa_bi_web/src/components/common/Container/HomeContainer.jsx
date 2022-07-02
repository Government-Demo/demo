import { Container } from "react-bootstrap";
import { Caption, More } from "./HomeContainer.style";
import styled from "styled-components";
import HomeList from "../List/HomeList";

// bootstrap css

const StyledContainer = styled(Container)`
  margin-bottom: 160px;
`;

export default function HomeContainer() {
  return (
    <StyledContainer>
      <Caption>진행중인 경매</Caption>
      <More>진행중인 경매 더보기 ▶</More>
      <HomeList />
      <Caption>임박매물</Caption>
      <More>임박매물 더보기 ▶</More>
      <HomeList />
      <Caption>인기매물</Caption>
      <More>인기매물 더보기 ▶</More>
      <HomeList />
    </StyledContainer>
  );
}
