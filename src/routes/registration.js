import React from "react";
import Header from "components/signup/header";
import Footer from "components/common/footer";
import { useNavigate } from "react-router-dom";
import { RegistrationStyle } from "components/common/styled";

export default function Registration() {
  // Module
  const navigate = useNavigate();

  return (
    <RegistrationStyle>
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
    </RegistrationStyle>
  );
}
