import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as LogoSVG } from "images/nflogo.svg";
import { SignUpHeaderStyle } from "components/common/styled";

export default function Header(props) {
  // Module
  const navigate = useNavigate();

  // Functions
  const logout = () => {
    sessionStorage.clear();
    navigate(`/logout`);
  };

  const goToLogin = () => {
    navigate(`/login`);
  };

  return (
    <SignUpHeaderStyle login={props.login}>
      <Link to="/" className="netflix-logo">
        <LogoSVG />
      </Link>
      {!props.login && (
        <a
          onClick={props.logoutbtn ? logout : goToLogin}
          className="login-link"
        >
          {props.logoutbtn ? "로그아웃" : "로그인"}
        </a>
      )}
    </SignUpHeaderStyle>
  );
}
