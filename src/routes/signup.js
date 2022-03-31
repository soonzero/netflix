import React from "react";
import Header from "components/signup/header";
import { ReactComponent as BlueCheckMarkSVG } from "images/bluecheck.svg";
import Footer from "components/common/footer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { RegistrationStyle } from "components/common/styled";

export default function SignUp() {
  // Module
  const navigate = useNavigate();

  return (
    <RegistrationStyle>
      <Header />
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
                  <BlueCheckMarkSVG />
                  <span>無약정, 無위약금. 해지도 쿨하게 언제든지.</span>
                </li>
                <li className="check-item">
                  <BlueCheckMarkSVG />
                  <span>넷플릭스의 모든 콘텐츠를 하나의 요금으로.</span>
                </li>
                <li className="check-item">
                  <BlueCheckMarkSVG />
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
    </RegistrationStyle>
  );
}
