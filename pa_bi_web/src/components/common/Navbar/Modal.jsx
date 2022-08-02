import { useState } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import pa from "./Logo.png";
import { useNavigate } from "react-router-dom";

export default function Example() {
  let navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [key, setKey] = useState(Login);

  function Login() {
    return (
      <StyledModalBody he="310px">
        <Input type={"email"} placeholder={"아이디를 입력해주세요"} />
        <Input type={"password"} placeholder={"비밀번호를 입력해주세요"} />
        <Box>
          <Remember type={"checkbox"} />
          <RememberLabel>로그인 상태 유지</RememberLabel>
          <Find
            onClick={() => {
              handleClose();
              navigate("/");
            }}
          >
            아이디/비밀번호 찾기
          </Find>
        </Box>
        <Button type={"submit"} value={"로그인"} />
        <Close>
          회원가입이 필요없으신가요?{" "}
          {
            <span
              onClick={() => {
                handleClose();
              }}
              style={{ color: "#000000", cursor: "pointer" }}
            >
              둘러보기 ＞
            </span>
          }
        </Close>
      </StyledModalBody>
    );
  }
  function Register() {
    return (
      <StyledModalBody he="470px">
        <Title>이메일</Title>
        <Input type={"email"} placeholder={"이메일 주소를 입력해주세요"} />
        <Title>비밀번호</Title>
        <Input type={"password"} placeholder={"비밀번호"} />
        <Title>비밀번호 확인</Title>
        <Input type={"password"} placeholder={"비밀번호 확인"} />
        <Terms co="#767676">
          회원으로 가입하면 서비스 약관과 개인정보 처리방침을 읽고 이해한 것으로
          간주됩니다.
        </Terms>
        <Button type={"submit"} value={"회원가입"} />
      </StyledModalBody>
    );
  }
  return (
    <>
      <Sign onClick={handleShow}>로그인/회원가입</Sign>

      <StyledModal show={show} onHide={handleClose} centered>
        <StyledModalHeader closeButton>
          <StyledModalTitle>
            <img src={pa} alt="logo" />에 로그인
          </StyledModalTitle>
          <Tabs>
            <Tab onClick={() => setKey(Login)}>로그인</Tab>
            <Tab onClick={() => setKey(Register)}>회원가입</Tab>
          </Tabs>
        </StyledModalHeader>
        {key}
      </StyledModal>
    </>
  );
}

const Sign = styled.div`
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  color: #0000d8;
  margin-left: 300px;
  padding: 10px;
`;
const StyledModal = styled(Modal)``;
const StyledModalHeader = styled(Modal.Header)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dbdbdb;
  height: 150px;
  padding: 30px 65px 0;
  button {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;
const StyledModalTitle = styled(Modal.Title)`
  font-weight: 500;
  font-size: 20px;
  img {
    margin-right: 10px;
  }
`;
const Tabs = styled.div`
  margin-top: auto;
  margin-right: auto;
  display: flex;
`;
const Tab = styled.div`
  cursor: pointer;
  width: 80px;
  height: 50px;
  text-align: center;
  padding: 15px 0;
  border-bottom: 3px solid #0000d8;
  &:first-child {
    margin-right: 10px;
  }
`;
const StyledModalBody = styled(Modal.Body)`
  height: ${(props) => props.he};
  padding: 0 65px;
  text-align: center;
`;
const Input = styled.input`
  padding: 8px 16px;
  width: 365px;
  height: 35px;
  font-weight: 400;
  font-size: 12px;
  background: #f1f1f5;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  &:first-child {
    margin-top: 25px;
    margin-bottom: 20px;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const Button = styled.input`
  margin-top: 30px;
  width: 365px;
  height: 35px;
  background: #0000d8;
  border: none;
  border-radius: 3px;
  color: #ffffff;
`;
const Remember = styled.input``;
const RememberLabel = styled.label`
  margin-left: 10px;
  font-weight: 400;
  font-size: 12px;
`;
const Find = styled.div`
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  margin-left: auto;
`;
const Close = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-top: 30px;
  color: #767676;
`;
const Title = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const Terms = styled.div`
  color: ${(props) => props.co};
  margin-top: 50px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;
