import { Container, Row, Col, Card } from "react-bootstrap";
import { Caption } from "./HomeContainer.style";
import styled from "styled-components";

// bootstrap css

const StyledContainer = styled(Container)`
  margin-bottom: 160px;
`;
const StyledCard = styled(Card)`
  border: 0px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(0deg, #ffffff, #ffffff), #f7f7f9;
    box-shadow: 4px 4px 25px #c9c9e3;
    transition-duration: 0.3s;
  }
`;
const StyledBody = styled(Card.Body)`
  padding: 16px 0 0 0;
`;
const StyledTitle = styled(Card.Title)`
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  letter-spacing: -0.025em;
  left: 0;
`;
const Styledadress = styled(Card.Text)`
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.025em;
  color: #b1b1b1;
`;
const StyledPrice = styled(Card.Text)`
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #0000d8;
  display: inline;
  margin-right: 33px;
`;
const StyledTime = styled(Card.Text)`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.025em;
  display: inline;
`;

export default function HomeContainer() {
  return (
    <StyledContainer>
      <Caption>임박매물</Caption>
      <Row xs={1} md={2} lg={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <StyledCard>
              <Card.Img
                variant="top"
                src="http://blog.jinbo.net/attach/615/200937431.jpg"
              />
              <StyledBody>
                <StyledTitle>토토로</StyledTitle>
                <Styledadress>경기도 용인시 기흥구</Styledadress>
                <StyledPrice>💰현재가</StyledPrice>
                <StyledPrice>999,999원</StyledPrice>
                <StyledTime>⏰11:11:11</StyledTime>
              </StyledBody>
            </StyledCard>
          </Col>
        ))}
      </Row>
      <Caption>인기매물</Caption>
      <Row xs={1} md={2} lg={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="http://blog.jinbo.net/attach/615/200937431.jpg"
              />
              <Card.Body>
                <Card.Title>토토로</Card.Title>
                <Card.Text>경기도 용인시 기흥구</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </StyledContainer>
  );
}
