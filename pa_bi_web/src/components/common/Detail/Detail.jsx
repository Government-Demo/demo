import { render } from "@testing-library/react";
import { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";

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
  Cost,
  CostBox,
  Notice,
  NoticeTitle,
} from "./Detail.style";

const StyledContainer = styled(Container)`
  max-width: 1280px;
  .tab-content {
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.025em;
    li {
      margin-left: 10px;
    }
  }
`;
const StyledTabs = styled(Tabs)``;

const StyledTab = styled(Tab)`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #767676;
  span {
    line-height: 50px;
  }
`;
const TabTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: -0.025em;
  margin-bottom: 20px;
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
        <NoticeTitle>주의사항</NoticeTitle>
        <Notice>
          회원님이 응찰한 가격이 낙찰금액으로 결정될 수 있습니다. <br />
          응찰은 취소할 수 없습니다. 신중하게 응찰해주세요. <br />
          판매자의 사정으로 경매가 철회될 수 있습니다. <br />
          경매가 종료되면 낙찰자와 판매자에게 전화번호가 공개됩니다. <br />
          희망가와 같거나 높은 금액으로 응찰하면 즉시 낙찰됩니다.
        </Notice>
      </TextBox>
      <ControlledTabs />
    </StyledContainer>
  );
}
function ControlledTabs() {
  const [key, setKey] = useState("info");

  return (
    <StyledTabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <StyledTab eventKey="info" title="물품정보">
        <TabTitle>물품정보</TabTitle>
        JBL 파티박스온더고 블루투스 스피커 미개봉 새제품 입니다 !!! 백석동는
        직거래 가능하고 나머지 지역은 택배가능합다 ~~~~!!!!! 많은 문의
        바랄게요!d
      </StyledTab>
      <StyledTab eventKey="comment" title="판매자에게 문의">
        <TabTitle>판매자에게 문의</TabTitle>
        상품 및 배송, 반품, 환불 관련 문의를 작성할 수 있습니다.
      </StyledTab>
      <StyledTab eventKey="terms" title="경매약관">
        <TabTitle>경매약관</TabTitle>
        <ul>1. 목적</ul>
        <li>
          경매에 관한 이하의 조건 (이하 "경매약관"이라 한다)과 관련된 유의사항
          (이하 "유의사항"이라 한다)은 다음의 사항을 규율 함을 목적으로 합니다.
        </li>
        <li>
          파비옥션 (이하 "파비옥션"이라 한다)의 당사경매의 응찰 희망자에 의한
          응찰 등록 그리고 / 또는 응찰 신청 및 응찰자에 의한 당사 경매에의 응찰
        </li>
        <ul>2. 경매의 실시 및 경매물품의 매매</ul>
        <li>
          파비옥션은 단독적이고 절대적인 재량에 의해, 모든 당사 경매에의 참가를
          거절할 수 있으며, 어떠한 응찰도 거부할 수 있습니다.
        </li>
        <li>
          경매의 종료 이후 판매자와 낙찰자 간의 개인간 거래에서 발생하는 모든
          책임은 거래 당사자들에 있으며, 파비옥션은 어떠한 사유를 불문하고
          책임을 부담하지 않습니다.
        </li>
        <li>
          경매물품에 관하여, 판매자는 물품의 하자를 포함한 모든 정보를 성실하게
          공개하여야하며, 응찰자는 응찰을 함으로써 판매자가 공개한 경매물품의
          정보에 이의가 없는 것으로 간주합니다.
        </li>
        <li>
          판매자의 사정으로 경매가 취소된 경우에 파비옥션은 이익 또는 이자의
          손실을 포함한, 어떠한 특별한, 간접적인 또는 후속적인 손해에 대해서도
          책임을 부담하지 않습니다.
        </li>
        <li>
          판매자와 낙찰자 간의 경매계약은 파비옥션의 홈페이지 상에서 실시된 당사
          경매에서 파비옥션에 의해 해당 경매물품의 최종경매마감시간에 해당
          경매물품의 최고 응찰가가 낙찰가로 확정됨으로써 즉시 성립합니다.
        </li>
        <li>
          판매자는 자신의 경매물품에 대하여 직·간접적인 응찰을 할 수 없습니다.
        </li>
        <li>
          파비옥션은 경매물품의 사기 등의 피해가 발생하지 않도록 최선의 노력을
          기울입니다.
        </li>
        <li>이를 위해 신고기능을 운영하며 회원들에 공개합니다.</li>
        <ul>3. 낙찰철회</ul>
        <li>
          경매 종료 후 판매자의 사정에 의해 낙찰이 철회될 수 있으며, 째깍은 이로
          인해 발생하는 손해에 대해서 일절 책임지지 않습니다. 또 잦은 철회를
          막기 위해 째깎은 판매자의철회횟수를 공개합니다.
        </li>
        <ul>4. 기타</ul>
        <li>
          본 경매약관에 따라 개정된, 본 경매약관 그리고/또는 유의사항은 전체
          계약 및 법에내포되고 계약에 의해 배제될 수 있는 조항의 배제에 관한
          당사자들 간의 이해를 구성하며, 본 경매약관 그리고/또는 유의사항에 관한
          문제에 대한 당사자들 간의 어떠한 사전 서면 또는 구두 합의를
          대체합니다. 본 경매약관 및 유의사항에 명시되지 않은 진술 또는 보증에
          의하여 어떠한 당사자도 본 경매약관 및 유의사항에 동의하도록 강제되지
          않았음이 합의되었습니다.
        </li>
      </StyledTab>
    </StyledTabs>
  );
}
