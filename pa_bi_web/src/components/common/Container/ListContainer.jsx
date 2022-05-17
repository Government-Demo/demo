import { Container, Row, Col, Card, Button, Pagination } from "react-bootstrap";
import { Caption, Name, Count, Dropdown, Cost } from "./ListContainer.style";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledButton = styled(Button)`
  width: 140px;
  height: 40px;
  background: #f1f1f5;
  border: 1px solid #b1b1b1;
  border-radius: 25px;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.025em;
  display: block;
  margin: 20px auto 3px;
  &::after {
    content: "⏰ 11:11:11";
    transition-duration: 0.3s;
    color: #000000;
  }
`;
const StyledCol = styled(Col)`
  padding: 4px;
`;
const StyledCard = styled(Card)`
  padding: 18px;

  cursor: pointer;
  &:hover {
    background: rgba(220, 220, 255, 0.5);
    box-shadow: 4px 4px 25px #c9c9e3;
    transition-duration: 0.3s;
  }
  &:active {
    background: #dcdcff;
  }
  &:hover ${StyledButton} {
    background: #5252ff;
    border: 1px solid #5252ff;
    transition-duration: 0.3s;
  }
  &:hover ${StyledButton}:after {
    content: "응찰하기";
    transition-duration: 0.3s;
    color: #ffffff;
  }
  &:active ${StyledButton} {
    background: #09098f;
    color: #ffffff;
  }
`;
const StyledBody = styled(Card.Body)`
  padding: 16px 0 0 0;
`;
const StyledTitle = styled(Card.Title)`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.025em;
  margin-bottom: 2px;
`;
const Styledadress = styled(Card.Text)`
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.025em;
  color: #b1b1b1;
  margin-bottom: 13px;
`;
const StyledPrice = styled(Card.Text)`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.025em;
  margin-bottom: 3px;
  display: flex; ;
`;
const StyledContainer = styled(Container)`
  max-width: 1080px;
`;
const StyledPagination = styled(Pagination)`
  margin-top: 60px;
  justify-content: center;
`;
const StyledPaginationItem = styled(Pagination.Item)``;

export default function ListContainer() {
  return (
    <StyledContainer>
      <Caption>
        <Name>디지털/가전</Name>
        <Count>(220)</Count>

        <SelectBox options={OPTIONS}></SelectBox>
      </Caption>

      <Row xs={1} md={2} lg={4} className="g-4">
        {Array.from({ length: 12 }).map((_, idx) => (
          <StyledCol>
            <StyledCard>
              <Card.Img
                variant="top"
                src="http://blog.jinbo.net/attach/615/200937431.jpg"
              />
              <StyledBody>
                <StyledTitle>토토로</StyledTitle>

                <Styledadress>경기도 용인시 기흥구</Styledadress>
                <StyledPrice>
                  <Cost co="#505050">시작가</Cost>
                  <Cost co="#505050">40,000</Cost>
                </StyledPrice>
                <StyledPrice>
                  <Cost co="#505050">평균희망가</Cost>
                  <Cost co="#505050">40,000</Cost>
                </StyledPrice>
                <StyledPrice>
                  <Cost co="#0000D8">현재가</Cost>
                  <Cost co="#0000D8">40,000</Cost>
                </StyledPrice>
                <StyledButton></StyledButton>
              </StyledBody>
            </StyledCard>
          </StyledCol>
        ))}
      </Row>
      <StyledPagination>
        <Pagination.First />
        <Pagination.Prev />
        <StyledPaginationItem active>{1}</StyledPaginationItem>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Item>{6}</Pagination.Item>
        <Pagination.Item>{7}</Pagination.Item>
        <Pagination.Item>{8}</Pagination.Item>
        <Pagination.Item>{9}</Pagination.Item>
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </StyledPagination>
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
