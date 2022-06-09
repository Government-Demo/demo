import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Box, Cost } from "./List.style";
import styled from "styled-components";
import data from "./ListData";
import pa from "./Pabi.png";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const StyledButton = styled.button`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  margin: 50px;
  width: 200px;
  height: 200px;
  top: 89px;
  left: 49px;
  border-radius: 50%;
  border: 2px solid #9393ff;
  font-weight: 700;
  font-size: 32px;
  margin: 0 auto;
  background: rgba(220, 220, 255, 0.5);
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    font-weight: 500;
    font-size: 30px;
    border: 2px solid #5252ff;
    background: rgba(157, 157, 157, 0.5);
    color: #ffffff;
  }
  &:hover::after {
    content: "응찰하기";
  }
`;
const StyledCol = styled(Col)`
  padding: 10px;
`;
const StyledCard = styled(Card)`
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
    visibility: visible;
    opacity: 1;
    content: "ㅎㅇ";
  }
`;
const StyledBody = styled(Card.Body)`
  padding: 16px;
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
  height: 220px;
  overflow: hidden;
`;
const StyledImg = styled(Card.Img)``;

export default function List() {
  let [list, setList] = useState(data);
  let navigate = useNavigate();

  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      {Array.from({ length: 12 }).map((a, i) => (
        <StyledCol key={list[i].id}>
          <StyledCard>
            <StyledButton
              onClick={() => {
                navigate("/detail/" + list[i].id);
              }}
            ></StyledButton>
            <ImgBox>
              <StyledImg src={list[i].img} onError={handleError}></StyledImg>
            </ImgBox>
            <StyledBody>
              <Box>
                <StyledTitle>{list[i].title} </StyledTitle>
              </Box>
              <Styledadress>{list[i].adress}</Styledadress>

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
              <Link to="/" style={{ textDecoration: "none" }}></Link>
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
