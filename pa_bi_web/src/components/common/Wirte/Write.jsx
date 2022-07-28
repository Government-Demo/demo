import {
  Box,
  Cell,
  Dropdown,
  Form,
  Header,
  Textarea,
  Title,
} from "./Write.style";
import { Container } from "react-bootstrap";
import styled from "styled-components";
const StyledContainer = styled(Container)`
  max-width: 1280px;
`;

export default function Write() {
  return (
    <StyledContainer>
      <Header>중고경매 글쓰기</Header>
      <Box>
        <Cell>
          <Title>물품</Title>
          <Form placeholder="내용을 입력하세요" wi="365px" required></Form>
        </Cell>
        <Cell>
          <Title>카테고리</Title>
          <SelectBox options={OPTIONS}></SelectBox>
        </Cell>
        <Cell>
          <Title>이미지</Title>
          <form encType="multipart/form-data">
            <label htmlFor="file">이미지업로드</label>
            <input
              type="file"
              id="file"
              accept="image/jpg, image/jpeg, image/png"
            />
          </form>
        </Cell>
        <Cell>
          <Title>주소</Title>
        </Cell>
        <Cell>
          <Title>물품정보</Title>
          <Textarea placeholder="내용을 입력하세요"></Textarea>
        </Cell>
        <Cell>
          <Title>시작가</Title>
          <Form placeholder="가격 (시작가)" wi="150px"></Form>
        </Cell>
        <Cell>
          <Title>즉시 구입가</Title>
          <Form placeholder="가격 (즉시 구입가)" wi="150px"></Form>
        </Cell>
        <Cell>
          <Title>호가</Title>
          <label>
            <input type={"radio"} name="money" value="1000"></input>
            1000 원
          </label>
          <label>
            <input type={"radio"} name="money" value="5000"></input>
            5000 원
          </label>
          <label>
            <input type={"radio"} name="money" value="10000"></input>
            10000 원
          </label>
        </Cell>
        <Cell>
          <Title>거래방식</Title>
          <SelectBox options={METHOD}></SelectBox>
        </Cell>
        <Cell>
          <Title>경매 날짜 / 시간</Title>
          <Form
            type={"date"}
            wi="150px"
            style={{ margin: "0 10px 0 0" }}
          ></Form>
          <Form type={"time"} wi="150px"></Form>
        </Cell>
        <Cell>
          <Title>검색어</Title>
          <Form placeholder="내용을 입력하세요" wi="365px"></Form>
        </Cell>
      </Box>
      <input type="submit" />
    </StyledContainer>
  );
}
const OPTIONS = [
  { value: "home", name: "홈/생활" },
  { value: "digital", name: "디지털/가전" },
  { value: "clothes", name: "패션의류/잡화" },
  { value: "beauty", name: "뷰티/주얼리" },
  { value: "car", name: "자동차/아웃도어" },
  { value: "hobby", name: "취미/스포츠" },
  { value: "etc", name: "기타중고물품" },
];
const METHOD = [
  { value: "package", name: "택배" },
  { value: "direct", name: "직거래" },
  { value: "package/direct", name: "택배/직거래" },
];
const SelectBox = (props) => {
  const handleChange = (e) => {};
  return (
    <Dropdown onChange={handleChange}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Dropdown>
  );
};
