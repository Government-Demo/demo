import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Box, Caption, Cost } from "./HomeContainer.style";
import styled from "styled-components";
import data from "./ListData";
import icon from "./장소아이콘.png";
import heart from "./하트.png";
import clock from "./Clock.png";

// bootstrap css

const StyledContainer = styled(Container)`
  margin-bottom: 160px;
`;

const StyledTime = styled(Card.Text)`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.025em;
`;
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
  border-radius: 20px;
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
  padding: 20px;
`;
const StyledTitle = styled(Card.Title)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.025em;
  margin-bottom: 5px;
`;
const Styledadress = styled(Card.Text)`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.025em;
  color: #b1b1b1;
  text-align: center;
  &:last-child {
    margin-left: auto;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.025em;
    color: #000000;
  }
`;
const StyledPrice = styled(Card.Text)`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.025em;
  margin-bottom: 3px;
  display: flex;
`;
const ImgBox = styled.div`
  height: 220px;
  overflow: hidden;
`;
const StyledImg = styled(Card.Img)`
  border-radius: 20px;
`;

export default function HomeContainer() {
  let [list] = useState(data);
  let [wish, setwish] = useState(0);
  return (
    <StyledContainer>
      <Caption>임박매물</Caption>

      <Row xs={1} md={2} lg={4} className="g-4">
        {list.map((a, i) => (
          <StyledCol>
            <StyledCard>
              <ImgBox>
                <StyledImg variant="top" src={list[i].img} />
              </ImgBox>
              <StyledBody>
                <StyledTitle>{list[i].title}</StyledTitle>
                <Box>
                  <img src={icon} alt="adress" />
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
                  <Cost co="#0000D8">현재가</Cost>
                  <Cost co="#0000D8">
                    {list[i].nowprice.toLocaleString("en")}
                  </Cost>
                  <Cost>
                    <StyledTime>
                      <img src={clock} alt="clock" />
                      11:11:11
                    </StyledTime>
                  </Cost>
                </StyledPrice>
              </StyledBody>
            </StyledCard>
          </StyledCol>
        ))}
      </Row>
      <Caption>인기매물</Caption>
    </StyledContainer>
  );
}
