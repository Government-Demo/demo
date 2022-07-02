import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Box, Cost, StyledTime } from "./List.style";
import styled from "styled-components";
import data from "./ListData";
import icon from "./장소아이콘.png";
import heart from "./하트.png";
import clock from "./Clock.png";
import pa from "./Pabi.png";

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
const Styledaddress = styled(Card.Text)`
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
  display: flex;
`;

const ImgBox = styled.div`
  height: 220px;
  overflow: hidden;
`;
const StyledImg = styled(Card.Img)`
  border-radius: 20px;
`;

export default function HomeList() {
  let [list] = useState(data);
  let [wish, setwish] = useState(0);
  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      {Array.from({ length: 4 }).map((a, i) => (
        <StyledCol key={list[i].id}>
          <StyledCard>
            <ImgBox>
              <StyledImg
                variant="top"
                src={list[i].img}
                onError={handleError}
              />
            </ImgBox>
            <StyledBody>
              <StyledTitle>{list[i].title}</StyledTitle>
              <Box>
                <img src={icon} alt="address" />
                <Styledaddress>{list[i].address}</Styledaddress>
                <Styledaddress
                  onClick={() => {
                    setwish(wish + 1);
                  }}
                >
                  <img src={heart} alt="heart" />
                  {wish}
                </Styledaddress>
              </Box>

              <StyledPrice>
                <Cost co="#0000D8">
                  현재가
                  <br />
                  <Cost co="#0000D8" we="500" si="24px" he="28px">
                    {list[i].nowprice.toLocaleString("en")}
                  </Cost>
                </Cost>

                <StyledTime>
                  <img src={clock} alt="clock" />
                  03:21:18
                </StyledTime>
              </StyledPrice>
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
