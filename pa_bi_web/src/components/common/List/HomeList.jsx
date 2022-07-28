import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Box, Cost, StyledTime } from "./List.style";
import styled from "styled-components";
import icon from "./장소아이콘.png";
import heart from "./하트.png";
import clock from "./Clock.png";
import pa from "./Pabi.png";
import { Navigate } from "react-router-dom";

const HomeList = (props) => {
  let [wish, setwish] = useState(0);
  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      {props.lists.slice(0, 4).map((a, list) => (
        <StyledCol key={list}>
          <StyledCard
          // onClick={() => {
          //   Navigate("/detail/" + props.lists[list].id);
          // }}
          >
            <ImgBox>
              <StyledImg
                src={props.lists[list]?.img ? props.lists[list].img : pa}
              />
            </ImgBox>
            <StyledBody>
              <StyledTitle>{props.lists[list]?.title}</StyledTitle>
              <Box mb="10px">
                <img src={icon} alt="address" />
                <Styledaddress>{props.lists[list]?.location}</Styledaddress>
                <Styledaddress
                // onClick={() => {
                //   setwish(wish + 1);
                // }}
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
                    100,000
                    {/* {props.lists[list]?.winningPrice.toLocaleString("en")} */}
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
};

export default HomeList;

const StyledCol = styled(Col)`
  padding: 4px;
`;
const StyledCard = styled(Card)`
  border-radius: 20px;
  margin: 10px;
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
  padding: 10px 20px 20px;
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
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
