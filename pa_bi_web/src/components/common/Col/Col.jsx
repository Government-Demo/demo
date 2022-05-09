import { Button, Card } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 253px;
  height: 442px;
  border: 1px solid #c5c5c5;
  box-sizing: border-box;
  border-radius: 3px;
  margin-right: 8px;
  margin-bottom: 70px;
  padding: 0px;

  &:hover {
    background: linear-gradient(0deg, #ffffff, #ffffff), #f7f7f9;
    box-shadow: 4px 4px 25px #c9c9e3;
    transition-duration: 0.3s;
  }
  &:nth-child(4) {
    margin-right: 0px;
  }
`;
const ImgBox = styled.div`
  margin-top: 18px;
`;
const ImgView = styled.div`
  position: absolute;
`;
const StyledImg = styled(Card.Img)`
  width: 217px;
  height: 185px;
  border-radius: 3px;
  justify-content: center;
`;
const StyledTitle = styled(Card.Title)`
  font-size: 14px;
  line-height: 21px;
  text-align: left;
`;
const StyledSubTitle = styled(Card.Title)`
  font-size: 13px;
  line-height: 19px;
  text-align: left;
  color: #b1b1b1;
`;
const StyledText = styled(Card.Text)`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #505050;
  text-align: left;
`;
const StyledButton = styled(Button)`
  background: #b1b1b1;
  border: 1px solid #b1b1b1;
  border-radius: 22px;
`;

export default function Col() {
  return (
    <StyledCard>
      <ImgBox>
        <StyledImg src="http://blog.jinbo.net/attach/615/200937431.jpg" />
      </ImgBox>
      <Card.Body>
        <StyledTitle>토토로</StyledTitle>
        <StyledSubTitle>경기도 용인시 기흥구</StyledSubTitle>
        <StyledText>평균 희망가</StyledText>
        <StyledText>시작가</StyledText>
        <StyledText>현재가</StyledText>
        <StyledButton>응찰하러 가기</StyledButton>
      </Card.Body>
    </StyledCard>
  );
}
