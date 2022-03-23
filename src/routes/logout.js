import Footer from "components/common/footer";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  return (
    <LogoutStyle>
      <div className="background-wrapper"></div>
      <LogoutHeaderStyle>
        <Link to="/" className="header-logo">
          <svg
            viewBox="0 0 111 30"
            className="svg-icon svg-icon-netflix-logo"
            focusable="true"
          >
            <g id="netflix-logo">
              <path
                d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                id="Fill-14"
              ></path>
            </g>
          </svg>
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
          <p className="logout-body">30초 후 Netflix.com으로 이동합니다.</p>
          <Link to="/" className="btn btn-logout btn-blue btn-large">
            지금 이동
          </Link>
        </div>
      </div>
      <Footer login dark center registration />
    </LogoutStyle>
  );
}
