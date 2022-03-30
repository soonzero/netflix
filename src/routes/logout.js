import Footer from "components/common/footer";
import React, { useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "images/nflogo.svg";
import { Link, useNavigate } from "react-router-dom";

const LogoutStyle = styled.div`
  background-color: black;
  color: white;
  min-height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 0;

  .background-wrapper {
    background-image: url("https://assets.nflxext.com/ffe/siteui/acquisition/login/login-the-crown_2-1500x1000.jpg");
    background-size: cover;
    display: block;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    width: 100%;
    position: absolute;
    z-index: -1;
  }

  .login-body {
    color: #333;
    padding: 0 5%;
    margin: 0 auto -236px;
    min-height: 100vh;
    background-color: transparent;
    max-width: 450px;
    box-sizing: content-box;

    &::before {
      content: "";
      height: 91px;
      display: block;
    }

    .logout {
      width: 350px;
      background-color: #fafafa;
      padding: 30px 45px;
      color: #333;
      margin: 20px auto 0;
      line-height: 1.5;
      box-sizing: content-box;

      .logout-title {
        margin-bottom: 20px;
        padding: 0;
        font-size: 2em;
        box-sizing: content-box;
      }

      .logout-body {
        margin: 1rem 0;
      }
    }

    .btn-blue {
      color: white;
      background-color: #0080ff;
      background-image: linear-gradient(to bottom, #0080ff, #0277ec);
      box-shadow: 0 1px 0 rgb(0 0 0 / 55%);
    }

    .btn {
      position: relative;
      margin: 0.5em 0.5em 0.5em 0;
      text-decoration: none;
      display: inline-block;
      line-height: 1em;
      letter-spacing: 0.1px;
      border-radius: 2px;
      text-align: center;
      border: 0;
    }

    .btn.btn-logout {
      width: 100%;
    }

    .btn.btn-large {
      font-size: 1.25rem;
      padding: 14px 2em;
      min-width: 112px;
      min-height: 48px;
    }

    &::after {
      content: "";
      height: 236px;
      display: block;
    }
  }
`;

const LogoutHeaderStyle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border: 0;
  z-index: 5;
  border-bottom: transparent;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0,
    rgba(0, 0, 0, 0) 100%
  );
  height: 90px;

  .header-logo {
    margin-left: 3%;
    text-decoration: none;
    vertical-align: middle;
    fill: #e50914;
    display: inline-block;
    line-height: 90px;
  }

  .svg-icon-netflix-logo {
    width: 106px;
    height: 35px;
    vertical-align: middle;
    fill: #e50914;
  }

  .login-button {
    color: white;
    background-color: #e50914;
    margin: 18px 3% 0;
    padding: 7px 17px;
    font-size: 1rem;
    line-height: 1.25;
    border-radius: 3px;
    font-weight: 400;
    text-decoration: none;
    float: right;
  }
`;

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate(`/`), 10000);

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
          <p className="logout-body">10초 후 Netflix.com으로 이동합니다.</p>
          <Link to="/" className="btn btn-logout btn-blue btn-large">
            지금 이동
          </Link>
        </div>
      </div>
      <Footer login dark center registration />
    </LogoutStyle>
  );
}
