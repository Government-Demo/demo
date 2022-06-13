import { useState } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import pa from "./Logo.png";
import { useNavigate } from "react-router-dom";

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
  height: 150px;

  div {
    font-weight: 500;
    font-size: 20px;
    margin: 0 auto;
  }
  button {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;
const StyledModalTitle = styled(Modal.Title)`
  img {
    margin-right: 10px;
  }
`;
const StyledModalBody = styled(Modal.Body)`
  height: 310px;
  padding: 0 65px;
  text-align: center;
  margin-top: 25px;
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
  background: #5252ff;
  border: none;
  border-radius: 3px;
  color: #ffffff;
`;
const Remember = styled.input``;
const RememberLabel = styled.label`
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

export default function Example() {
  let navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Sign onClick={handleShow}>로그인/회원가입</Sign>

      <StyledModal show={show} onHide={handleClose} centered>
        <StyledModalHeader closeButton>
          <StyledModalTitle>
            <img src={pa} alt="logo" />에 로그인
          </StyledModalTitle>
        </StyledModalHeader>

        <StyledModalBody>
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
      </StyledModal>
    </>
  );
}
