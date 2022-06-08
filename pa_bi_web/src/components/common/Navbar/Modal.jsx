import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { createRoot } from "react-dom/client";
import styled from "styled-components";

export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  `;
  const StyledModalBody = styled(Modal.Body)`
    height: 310px;
    padding: 10px;
  `;
  const Input = styled.input`
    width: 365px;
    height: 35px;
    background: #f1f1f5;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
  `;

  return (
    <>
      <Sign onClick={handleShow}>로그인/회원가입</Sign>

      <StyledModal show={show} onHide={handleClose} centered>
        <StyledModalHeader closeButton>
          <Modal.Title>Pa-bi에 로그인</Modal.Title>
        </StyledModalHeader>
        <StyledModalBody>
          <Input type={"email"} placeholder={"아이디를 입력해주세요"} />
          <Input type={"password"} placeholder={"비밀번호를 입력해주세요"} />
        </StyledModalBody>
      </StyledModal>
    </>
  );
}
