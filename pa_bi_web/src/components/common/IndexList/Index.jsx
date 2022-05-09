import {
  Section,
  Inside,
  SectionTitle,
  SubTitle,
  MainTitle,
  SearchBar,
} from "./Index.style";
import { Container, Row } from "react-bootstrap";
import Col from "../Col/Col";
import styled from "styled-components";

const StyledContainer = styled(Container)``;
const StyledRow = styled(Row)`
  justify-content: center;
`;
export default function Index() {
  return (
    <Section>
      <Inside>
        <SectionTitle>
          <MainTitle>가전제품 검색</MainTitle>
          <SubTitle>15000개의 상품이 있습니다.</SubTitle>
          <SearchBar placeholder="검색어를 입력해주세요." />
        </SectionTitle>

        <StyledContainer>
          <StyledRow>
            <Col />
            <Col />
            <Col />
            <Col />
          </StyledRow>
          <StyledRow>
            <Col />
            <Col />
            <Col />
            <Col />
          </StyledRow>
        </StyledContainer>
      </Inside>
    </Section>
  );
}
