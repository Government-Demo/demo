import { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Box, Cost } from "./List.style";
import styled from "styled-components";
import data from "./ListData";
import pa from "./Pabi.png";
import clock from "./Clock.png";
import heart from "./하트.png";
import { Link } from "react-router-dom";

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
    transition-duration: 0.1s;
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
  text-decoration: none;

  &:last-child {
    margin-left: auto;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.025em;
    color: #000000;
  }
  img {
    margin-right: 5px;
  }
`;
const StyledPrice = styled(Card.Text)`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.025em;
  margin-bottom: 3px;
  display: flex; ;
`;
const ImgBox = styled.div`
  height: 162px;
  overflow: hidden;
`;
const StyledImg = styled(Card.Img)``;

export default function List() {
  let [list] = useState(data);
  let [wish, setwish] = useState(0);

  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      {Array.from({ length: 12 }).map((a, i) => (
        <StyledCol key={list[i].id}>
          <StyledCard>
            <ImgBox>
              <StyledImg src={list[i].img} onError={handleError}></StyledImg>
            </ImgBox>
            <StyledBody>
              <StyledTitle>{list[i].title}</StyledTitle>

              <Box>
                <Styledadress>{list[i].adress}</Styledadress>
                <Styledadress
                  onClick={() => {
                    setwish(wish + 1);
                  }}
                >
                  <img src={heart} alt="heart" />
                  {wish}
                </Styledadress>
              </Box>
              <StyledPrice>
                <Cost co="#505050">시작가</Cost>
                <Cost co="#505050">
                  {list[i].strprice.toLocaleString("en")}
                </Cost>
              </StyledPrice>
              <StyledPrice>
                <Cost co="#505050">평균희망가</Cost>
                <Cost co="#505050">
                  {list[i].avgprice.toLocaleString("en")}
                </Cost>
              </StyledPrice>
              <StyledPrice>
                <Cost co="#0000D8">현재가</Cost>
                <Cost co="#0000D8">
                  {list[i].nowprice.toLocaleString("en")}
                </Cost>
              </StyledPrice>
              <Link to="/" style={{ textDecoration: "none" }}>
                <StyledButton></StyledButton>
              </Link>
            </StyledBody>
          </StyledCard>
        </StyledCol>
      ))}
    </Row>
  );
}
const handleError = (e) => {
  e.target.src = pa;
};
