import React from "react";
import Header from "components/signup/Header";
import styled from "styled-components";
import Footer from "components/common/footer";
import { useNavigate } from "react-router-dom";

const ScreenStyle = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  word-break: keep-all;

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

      .registration-container {
        max-width: 340px;
        text-align: center;
        margin: 0 auto;

        .step-logo-container {
          display: inline-block;

          .step-logo {
            display: block;
            margin: 100px 0 20px;
            width: 260px;
            background: url("https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png")
              no-repeat 50% 50%;
            height: 90px;
            background-size: 260px;
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

        .step-text {
          font-size: 1.125rem;
          line-height: 1.3333333333;
          max-width: 300px;
          display: inline-block;
        }
      }

      .submit-button-container {
        display: block;
        max-width: 340px;
        margin: 0 auto;
        margin-top: 24px;
        text-align: center;

        .submit-button {
          color: white;
          min-height: 64px;
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 1;
          border: none;
          border-radius: 4px;
          background-color: #e50914;
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

export default function Registration() {
  const navigate = useNavigate();
  return (
    <ScreenStyle>
      <Header />
      <div className="main-container">
        <div className="center-container">
          <div className="registration-container">
            <div className="step-logo-container">
              <span className="step-logo"></span>
            </div>
            <div className="step-header-container">
              <div className="step-header">
                <span className="step-indicator">
                  <b>1</b>/<b>3</b>단계
                </span>
                <h1 className="step-title">계정 설정 마무리하기</h1>
              </div>
            </div>
            <div className="step-text">
              맞춤형 콘텐츠 서비스, 넷플릭스! 비밀번호를 설정해 다양한
              디바이스에서 아무 때나 시청하세요.
            </div>
          </div>
          <div className="submit-button-container">
            <button
              type="button"
              className="submit-button"
              onClick={() => navigate(`/signup/regform`)}
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
