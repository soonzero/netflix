import React, { useState } from "react";
import Header from "components/signup/Header";
import { ReactComponent as CheckMark } from "images/checkmark.svg";
import Footer from "components/common/footer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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

      .plan-form-container {
        max-width: 1024px;
        margin: 0 auto;
        overflow: hidden;

        & > div {
          display: block;

          .step-header-container {
            display: block;
            padding: 0 16px;
            box-sizing: content-box;

            .step-header {
              display: inline-block;

              .step-indicator {
                display: block;
                font-size: 0.8125rem;
                line-height: 2.0769230769;
              }

              .step-title {
                font-size: 2rem;
                display: inline-block;
                font-weight: 700;
                margin: 0 0 0.4em;
                line-height: 1.21875;
              }
            }
          }

          .change-anytime {
            padding: 0 16px;
            margin-bottom: 20px;

            .check-group {
              margin: 4px 0 20px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              text-align: left;

              .check-item {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                margin: 0;
                margin-top: 6px;

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

        .plan-grid {
          .plan-grid-header {
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            .plan-grid-selection {
              width: 60%;
              display: flex;
              justify-content: center;

              .plan-grid-choice {
                width: calc(100% / 3);
                padding: 12px 0;
                flex: 1 1 auto;
                position: relative;

                .plan-choice {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  opacity: 0;
                  width: 120px;
                  height: 120px;
                  appearance: none;
                  z-index: -1;
                  background: 0 0;
                  margin: 0;
                }

                span {
                  opacity: 0.6;
                  padding: 1px;
                  width: 120px;
                  height: 120px;
                  background-color: #e50914;
                  color: white;
                  font-weight: 700;
                  border-radius: 2px;
                  font-size: 1.0625rem;
                  margin: 0 auto;
                  position: relative;
                  display: flex;
                  justify-content: center;
                  align-items: center;

                  &.checked {
                    opacity: 1;
                  }

                  &.checked::after {
                    content: "";
                    display: block;
                    border: 0 solid transparent;
                    border-top-color: #e50914;
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    border-width: 10px;
                    border-bottom-width: 0;
                  }
                }
              }
            }
          }

          .plan-grid-table {
            display: flex;
            flex-direction: column;
            padding-bottom: 10px;
            border-collapse: collapse;

            .plan-grid-tbody {
              display: flex;
              flex-direction: column;

              tr {
                border-bottom: 1px solid #ccc;
                min-height: 60px;
                display: flex;
                align-items: center;
                box-sizing: content-box;

                &:last-child {
                  border-bottom: none;
                }

                td {
                  padding: 12px 16px;
                  line-height: 1.3125;
                  width: calc(60% / 3);
                }

                .plan-grid-feature {
                  width: 40%;
                  color: #333;
                  fill: #333;
                  flex: 0 0 auto;
                  text-align: left;
                }

                .plan-grid-string {
                  font-weight: 700;
                  flex: 1 1 auto;
                  text-align: center;
                  color: #737373;
                }

                .plan-grid-string.checked {
                  color: #e50914;
                }

                .plan-grid-boolean {
                  padding: 11px 16px 5px;
                  text-align: center;
                  color: #737373;
                }

                .plan-grid-boolean.checked {
                  color: #e50914;
                  fill: #e50914;
                }
              }
            }
          }

          .plan-grid-disclaimer {
            padding: 0 150px 0 16px;
            color: #737373;
            font-size: 0.8125rem;
            line-height: 1.3076923077;
            display: block;
          }

          .plan-grid-disclaimer:last-child {
            margin-top: 10px;
          }
        }
      }

      .submit-button-container {
        max-width: 440px;
        padding: 0 16px;
        margin: 0 auto;
        margin-top: 24px;
        box-sizing: content-box;

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

export default function EditPlan() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.membership.membership);
  const [selected, setSelected] = useState(plan);

  const onChangeHandler = (event) => {
    setSelected(event.target.value);
  };

  const onClickHandler = () => {
    dispatch({ type: "SET", data: { membership: selected } });
    navigate(`/signup/creditoption`);
  };

  return (
    <ScreenStyle selected={selected}>
      <Header logoutbtn />
      <div className="main-container">
        <div className="center-container">
          <div className="plan-form-container">
            <div>
              <div className="step-header-container">
                <div className="step-header">
                  <h1 className="step-title">원하는 멤버십을 선택하세요.</h1>
                </div>
              </div>
              <div className="change-anytime">
                <ul className="check-group">
                  <li className="check-item">
                    <CheckMark />
                    <span>광고 없이 무제한으로 시청.</span>
                  </li>
                  <li className="check-item">
                    <CheckMark />
                    <span>취향에 꼭 맞는 콘텐츠를 추천해 드립니다.</span>
                  </li>
                  <li className="check-item">
                    <CheckMark />
                    <span>멤버십은 언제든지 변경 또는 해지 가능.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="plan-grid">
              <div className="plan-grid-header">
                <div className="plan-grid-selection">
                  <label className="plan-grid-choice">
                    <input
                      type="radio"
                      className="plan-choice"
                      name="plan-choice"
                      value="basic"
                      onChange={onChangeHandler}
                    />
                    <span className={`${selected == "basic" && "checked"}`}>
                      베이식
                    </span>
                  </label>
                  <label className="plan-grid-choice">
                    <input
                      type="radio"
                      className="plan-choice"
                      name="plan-choice"
                      value="standard"
                      onChange={onChangeHandler}
                    />
                    <span className={`${selected == "standard" && "checked"}`}>
                      스탠다드
                    </span>
                  </label>
                  <label className="plan-grid-choice">
                    <input
                      type="radio"
                      className="plan-choice"
                      name="plan-choice"
                      value="premium"
                      onChange={onChangeHandler}
                    />
                    <span className={`${selected == "premium" && "checked"}`}>
                      프리미엄
                    </span>
                  </label>
                </div>
              </div>
              <table className="plan-grid-table">
                <tbody className="plan-grid-tbody">
                  <tr>
                    <td className="plan-grid-feature">월 요금</td>
                    <td
                      className={`plan-grid-string ${
                        selected == "basic" && "checked"
                      }`}
                    >
                      9,500원
                    </td>
                    <td
                      className={`plan-grid-string ${
                        selected == "standard" && "checked"
                      }`}
                    >
                      13,500원
                    </td>
                    <td
                      className={`plan-grid-string ${
                        selected == "premium" && "checked"
                      }`}
                    >
                      17,000원
                    </td>
                  </tr>
                  <tr>
                    <td className="plan-grid-feature">
                      <div>영상 화질</div>
                    </td>
                    <td
                      className={`plan-grid-string ${
                        selected == "basic" && "checked"
                      }`}
                    >
                      <div>좋음</div>
                    </td>
                    <td
                      className={`plan-grid-string ${
                        selected == "standard" && "checked"
                      }`}
                    >
                      <div>매우 좋음</div>
                    </td>
                    <td
                      className={`plan-grid-string ${
                        selected == "premium" && "checked"
                      }`}
                    >
                      <div>가장 좋음</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="plan-grid-feature">해상도</td>
                    <td
                      className={`plan-grid-string ${
                        selected == "basic" && "checked"
                      }`}
                    >
                      <div>480p</div>
                    </td>
                    <td
                      className={`plan-grid-string ${
                        selected == "standard" && "checked"
                      }`}
                    >
                      <div>1080p</div>
                    </td>
                    <td
                      className={`plan-grid-string ${
                        selected == "premium" && "checked"
                      }`}
                    >
                      <div>4K+HDR</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="plan-grid-feature">
                      TV, 컴퓨터, 스마트폰, 태블릿으로 시청
                    </td>
                    <td
                      className={`plan-grid-boolean ${
                        selected == "basic" && "checked"
                      }`}
                    >
                      <span>
                        <CheckMark />
                      </span>
                    </td>
                    <td
                      className={`plan-grid-boolean ${
                        selected == "standard" && "checked"
                      }`}
                    >
                      <span>
                        <CheckMark />
                      </span>
                    </td>
                    <td
                      className={`plan-grid-boolean ${
                        selected == "premium" && "checked"
                      }`}
                    >
                      <span>
                        <CheckMark />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <small className="plan-grid-disclaimer">
                <span className="plan-grid-legal">
                  HD(720p), 풀 HD(1080p), UHD(4K), HDR 화질 제공 여부는 사용하는
                  인터넷 서비스와 디바이스의 성능에 따라 달라질 수 있습니다.
                  모든 콘텐츠가 모든 화질로 제공되지는 않습니다. 자세한 내용은
                  이용약관을 확인하세요.
                </span>
              </small>
              <small className="plan-grid-disclaimer">
                <span className="plan-grid-legal">
                  한집에 사는 사람들만 계정을 함께 이용할 수 있습니다. 프리미엄
                  멤버십은 동시접속 4명, 스탠다드 멤버십은 2명, 베이식 멤버십은
                  1명까지 가능합니다.
                </span>
              </small>
            </div>
          </div>
          <div className="submit-button-container">
            <button
              type="button"
              className="submit-button"
              onClick={onClickHandler}
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
