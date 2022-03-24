import Header from "components/signup/Header";
import Footer from "components/common/footer";
import React from "react";
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
      padding: 20px 16px 60px;
      margin: 0 auto 15px;
      max-width: 978px;

      .payment-container {
        text-align: center;
        max-width: 500px;
        margin: 0 auto;

        .payment-header {
          margin-bottom: 20px;

          .step-logo-container {
            display: inline-block;

            .step-logo {
              display: block;
              margin: 20px 0;
              width: 50px;
              background: url("https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png")
                no-repeat 50% 50%;
              height: 50px;
              background-size: 50px;
            }
          }

          .step-header-container {
            display: block;

            .step-header {
              display: inline-block;
              margin-top: 20px;

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
            max-width: 205px;
            margin: 0 auto;
            display: inline-block;

            .text-row {
              .bold-text {
                font-weight: 700;
              }
            }

            .text-row:last-child {
              margin-top: 10px;
            }
          }
        }

        .security {
          display: flex;
          flex-direction: row-reverse;
          height: 1rem;
          justify-content: flex-start;
          align-items: flex-end;

          .security-text {
            font-size: 0.8125rem;
            line-height: 1.0769230769;
          }

          svg {
            height: 16px;
            width: 16px;
            margin-left: 2px;
          }
        }

        .payment-selection {
          min-height: 50px;
          position: relative;

          .payment-option {
            min-height: 60px;
            height: auto;
            display: flex;
            align-items: center;
            cursor: pointer;
            text-align: left;
            padding: 0;
            position: relative;
            background-color: white;
            margin: 5px 0;
            border: 2px solid #ccc;
            border-radius: 5px;

            .names-and-logos {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              padding: 15px 0;
              flex-wrap: wrap;
              width: 90%;

              .text-container {
                margin: 5px 0 5px 15px;
                min-height: 20px;
                line-height: 1.25;
              }

              .logo-container {
                margin: 0 15px;
                min-height: 20px;

                .logos {
                  display: inline-block;
                  white-space: nowrap;
                  margin-top: -4px;
                  overflow: auto;
                  vertical-align: middle;
                  height: 30px;

                  .logo-icon {
                    margin-top: 4px;
                    margin-right: 6px;
                    margin-bottom: 1px;
                    width: auto;
                    background-image: none;
                    height: 25px;
                  }
                }
              }
            }

            .next-icon {
              background-image: url("https://assets.nflxext.com/ffe/siteui/acquisition/reg_selection/chevron_060915_2.svg");
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center center;
              font-size: 1.1875rem;
              line-height: 1;
              position: absolute;
              top: 50%;
              right: 0;
              transform: translateY(-50%);
              vertical-align: bottom;
              display: inline-block;
              width: 1em;
              height: 1em;
              margin: 0 0.2em;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
`;

export default function Payment() {
  const navigate = useNavigate();
  return (
    <ScreenStyle>
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
              <svg viewBox="0 0 12 16">
                <g fill="none">
                  <g fill="#FFB53F">
                    <path d="M8.4 5L8.4 6.3 10 6.3 10 5C10 2.8 8.2 1 6 1 3.8 1 2 2.8 2 5L2 6.3 3.6 6.3 3.6 5C3.6 3.7 4.7 2.6 6 2.6 7.3 2.6 8.4 3.7 8.4 5ZM11 7L11 15 1 15 1 7 11 7ZM6.5 11.3C7 11.1 7.3 10.6 7.3 10.1 7.3 9.3 6.7 8.7 6 8.7 5.3 8.7 4.7 9.3 4.7 10.1 4.7 10.6 5 11.1 5.5 11.3L5.2 13.4 6.9 13.4 6.5 11.3Z"></path>
                  </g>
                </g>
              </svg>
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
    </ScreenStyle>
  );
}
