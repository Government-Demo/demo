import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Caption } from "./HomeContainer.style";
import styled from "styled-components";

const StyledCard = styled(Card)`
  cursor: pointer;
  &:hover {
    background: #dcdcff;
    box-shadow: 4px 4px 25px #c9c9e3;
    transition-duration: 0.3s;
  }
`;
const StyledButton = styled(Button)`
  background: #f1f1f5;
  border: 1px solid #b1b1b1;
  border-radius: 25px;
  color: #000000;
  &:hover {
    background: #09098f;
    transition-duration: 0.3s;
  }
`;

export default function Index() {
  return (
    <Container>
      <Caption>인기매물</Caption>
      <Row xs={1} md={2} lg={4} className="g-4">
        {Array.from({ length: 12 }).map((_, idx) => (
          <Col>
            <StyledCard>
              <Card.Img
                variant="top"
                src="http://blog.jinbo.net/attach/615/200937431.jpg"
              />
              <Card.Body>
                <Card.Title>토토로</Card.Title>
                <Card.Text>경기도 용인시 기흥구</Card.Text>
                <Card.Text>경기도 용인시 기흥구</Card.Text>
                <Card.Text>경기도 용인시 기흥구</Card.Text>
                <Card.Text>경기도 용인시 기흥구</Card.Text>
                <StyledButton>응찰하기</StyledButton>
              </Card.Body>
            </StyledCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
