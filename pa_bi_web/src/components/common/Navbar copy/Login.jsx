import React, { useState } from "react";
import LoginModal from "./LoginModal";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [onLoginModal, setOnLoginModal] = useState(false);

  const onModalHandler = () => {
    setOnLoginModal(true);
  };

  const onLogoutHandler = () => {
    setIsLogin(false);
  };

  const Login = <button onClick={onModalHandler}>로그인</button>;
  const signOut = <button onClick={onLogoutHandler}>로그아웃</button>;

  return (
    <div>
      {!isLogin ? Login : signOut}
      {onLoginModal ? <LoginModal /> : null}
    </div>
  );
};

export default Login;
