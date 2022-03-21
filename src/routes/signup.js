import React from "react";
import Header from "components/signup/Header";
import { ReactComponent as CheckMark } from "images/checkmark.svg";
import Footer from "components/common/footer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ScreenStyle = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  word-break: keep-all;

  b {
    font-weight: 700;
  }

  .main-container {
    padding-bottom: 95px;
    flex-grow: 1;
    background-color: white;
    width: 100%;
    overflow: hidden;
    word-break: keep-all;

    .center-container {
      padding: 20px 32px 60px;
      margin: 0 auto 15px;
      max-width: 978px;

      .plan-container {
        max-width: 340px;
        margin: 0 auto;
        text-align: center;

        .step-logo-container {
          display: inline-block;
          text-align: center;

          .step-logo {
            margin: 100px 0 20px;
            text-align: center;
            width: 50px;
            height: 50px;
            display: block;
            background: url("https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png")
              no-repeat 50% 50%;
            background-size: 50px;
          }
        }

        .step-header-container {
          display: block;

          .step-header {
            display: inline-block;

            .step-indicator {
              display: block;
              font-size: 0.8125rem;
              line-height: 1.4615384615;
            }

            .step-title {
              font-size: 2rem;
              display: inline-block;
              font-weight: 700;
              margin: 0 0 0.4em;
              line-height: 1.3125;
            }
          }
        }

        .context-body {
          max-width: 300px;
          display: inline-block;

          .check-group {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 15px 0 20px;
            text-align: left;

            .check-item {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              margin: 0;
              margin-top: 20px;

              svg {
                align-self: flex-start;
                color: #e50914;
                flex: none;
                height: 24px;
                width: 24px;
                overflow: hidden;
              }

              span {
                margin-left: 10px;
                font-size: 1.125rem;
                line-height: 1.3333333333;
              }
            }

            .check-item:first-child {
              margin-top: 0;
            }
          }
        }
      }

      .submit-button-container {
        max-width: 340px;
        margin: 0 auto;
        margin-top: 24px;

        .submit-button {
          color: white;
          background-color: #e50914;
          min-height: 64px;
          font-weight: 500;
          font-size: 1.5rem;
          border: none;
          border-radius: 4px;
          line-height: 1;
          padding: 0.75rem 25.33333333px;
          min-width: 110px;
          width: 100%;
          cursor: pointer;

          &:hover {
            background-color: #f6121d;
          }
        }
      }
    }
  }
`;

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <ScreenStyle>
      <Header logoutbtn />
      <div className="main-container">
        <div className="center-container">
          <div className="plan-container">
            <div className="step-logo-container">
              <span className="step-logo"></span>
            </div>
            <div className="step-header-container">
              <div className="step-header">
                <span className="step-indicator">
                  <b>2</b>/<b>3단계</b>
                </span>
                <h1 className="step-title">원하는 멤버십을 선택하세요.</h1>
              </div>
            </div>
            <div className="context-body">
              <ul className="check-group">
                <li className="check-item">
                  <CheckMark />
                  <span>無약정, 無위약금. 해지도 쿨하게 언제든지.</span>
                </li>
                <li className="check-item">
                  <CheckMark />
                  <span>넷플릭스의 모든 콘텐츠를 하나의 요금으로.</span>
                </li>
                <li className="check-item">
                  <CheckMark />
                  <span>모든 디바이스에서 무제한 시청.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="submit-button-container">
            <button
              type="button"
              className="submit-button"
              onClick={() => navigate(`/signup/planform`)}
            >
              다음
            </button>
          </div>
        </div>
      </div>
      <Footer registration />
    </ScreenStyle>
  );
}
