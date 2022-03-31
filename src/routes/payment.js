import Header from "components/signup/header";
import Footer from "components/common/footer";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SecuritySVG } from "images/security.svg";
import { RegistrationStyle } from "components/common/styled";

export default function Payment() {
  // Module
  const navigate = useNavigate();

  return (
    <RegistrationStyle>
      <Header logoutbtn />
      <div className="main-container">
        <div className="center-container">
          <div className="payment-container">
            <div className="payment-header">
              <div className="step-logo-container">
                <span className="step-logo"></span>
              </div>
              <div className="step-header-container">
                <div className="step-header">
                  <span className="step-indicator">
                    <b>3</b>/<b>3</b>단계
                  </span>
                  <h1 className="step-title">결제 정보 등록</h1>
                </div>
              </div>
              <div className="step-text">
                <div className="text-row">
                  결제가 완료되면 바로 멤버십이 시작됩니다.
                </div>
                <div className="text-row">
                  <div className="bold-text">약정도 없고, 광고도 없다!</div>
                  <div className="bold-text">클릭 한번으로 끝.</div>
                </div>
              </div>
            </div>
            <div className="security">
              <SecuritySVG />
              <div className="security-text">보안 서버</div>
            </div>
            <div
              className="payment-selection"
              onClick={() => navigate(`/signup/creditoption`)}
            >
              <div>
                <div className="payment-option">
                  <div className="names-and-logos">
                    <div className="text-container">
                      <span className="text">신용카드 또는 체크카드</span>
                    </div>
                    <div className="logo-container">
                      <span className="logos">
                        <img
                          className="logo-icon"
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/bc.svg"
                        />
                        <img
                          className="logo-icon"
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/hana.svg"
                        />
                        <img
                          className="logo-icon"
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/hyundai.svg"
                        />
                        <img
                          className="logo-icon"
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/kb.svg"
                        />
                        <img
                          className="logo-icon"
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/keb.svg"
                        />
                        <img
                          className="logo-icon"
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/lotte.svg"
                        />
                        <img
                          className="logo-icon"
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/nh.svg"
                        />
                        <img
                          className="logo-icon"
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/samsung.svg"
                        />
                        <img
                          className="logo-icon"
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/shinhan.svg"
                        />
                      </span>
                    </div>
                  </div>
                  <span className="next-icon"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer registration />
    </RegistrationStyle>
  );
}
