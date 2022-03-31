import Footer from "components/common/footer";
import React, { useEffect } from "react";
import { ReactComponent as Logo } from "images/nflogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { LogoutStyle, LogoutHeaderStyle } from "components/common/styled";

export default function Logout() {
  // Module
  const navigate = useNavigate();

  // Life Cycle
  useEffect(() => {
    const timer = setTimeout(() => navigate(`/`), 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <LogoutStyle>
      <div className="background-wrapper"></div>
      <LogoutHeaderStyle>
        <Link to="/" className="header-logo">
          <Logo />
        </Link>
        <Link to="/login" className="login-button">
          로그인
        </Link>
      </LogoutHeaderStyle>
      <div className="login-body">
        <div className="logout" data-uia="logout-contatiner">
          <h1 className="logout-title">벌써 나가시려고요?</h1>
          <p className="logout-body">
            참고로 알려드리면, 매번 Netflix에서 로그아웃하실 필요는 없습니다.
            공용 컴퓨터에서 이용한 경우에만 로그아웃하시면 됩니다.
          </p>
          <p className="logout-body">5초 후 Netflix.com으로 이동합니다.</p>
          <Link to="/" className="btn btn-logout btn-blue btn-large">
            지금 이동
          </Link>
        </div>
      </div>
      <Footer login dark center registration />
    </LogoutStyle>
  );
}
