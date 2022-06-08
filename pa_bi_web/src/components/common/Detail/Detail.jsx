import { Container } from "react-bootstrap";

import styled from "styled-components";
import {
  Caption,
  Name,
  ImgBox,
  TextBox,
  Title,
  Adress,
  Box,
  BoxText,
  Boxes,
  Main,
  Cost,
  CostBox,
} from "./Detail.style";

const StyledContainer = styled(Container)`
  max-width: 1280px;
`;
export default function Detail() {
  return (
    <StyledContainer>
      <Caption>
        <Name>전체</Name>
      </Caption>

      <ImgBox />
      <TextBox>
        <Title>블루투스 이어폰+블루투스 스피커+블랙박스</Title>
        <Adress>경기도 고양시 일단동구 백석동</Adress>
        <Boxes>
          <Box wi="300px" he="80px" bg="#0000d8" pa="12px 0">
            <BoxText si="48px" co="#ffffff">
              02
            </BoxText>
            <BoxText si="15px" mr="10px" co="#ffffff">
              시간
            </BoxText>
            <BoxText si="48px" co="#ffffff">
              00
            </BoxText>
            <BoxText si="15px" mr="10px" co="#ffffff">
              분
            </BoxText>
            <BoxText si="48px" co="#ffffff">
              00
            </BoxText>
            <BoxText si="15px" co="#ffffff">
              초
            </BoxText>
          </Box>
          <Box wi="180px" he="80px" bg="#0000d8" pa="18px 0">
            <BoxText si="20px" co="#ffffff">
              경매 시작 전<br />
              상품입니다
            </BoxText>
          </Box>
        </Boxes>
        <Box
          wi="480px"
          he="120px"
          bg="#ffffff"
          pa="30px 0"
          bo="1px solid #DBDBDB"
        >
          <CostBox>
            <Cost si="20px">시작가</Cost>
            <Cost si="20px">300,000원</Cost>
          </CostBox>
          <CostBox>
            <Cost si="20px">즉시구입가</Cost>
            <Cost si="20px">450,000원</Cost>
          </CostBox>
        </Box>
        <Box
          wi="480px"
          he="120px"
          bg="#F1F1F5"
          pa="30px 0"
          bo="1px solid #DBDBDB"
        >
          <CostBox>
            <Cost si="20px">호가</Cost>
            <Cost si="20px">1,000원</Cost>
          </CostBox>
          <CostBox>
            <Cost si="20px">거래방식</Cost>
            <Cost si="20px">택배/직거래</Cost>
          </CostBox>
        </Box>
        주의사항
      </TextBox>
    </StyledContainer>
  );
}
