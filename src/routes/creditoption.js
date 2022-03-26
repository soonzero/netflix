import React, { useEffect, useState } from "react";
import Footer from "components/common/footer";
import Header from "components/signup/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

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

      .payment-form {
        .payment-form-container {
          text-align: center;
          max-width: 440px;
          margin: 0 auto;

          & > div:first-child {
            text-align: left;
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
          }

          .field-container {
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;
            text-align: left;

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

            .form {
              & > ul {
                text-align: left;
                margin-top: 10px;

                .form-list {
                  list-style: none;
                  margin-bottom: 10px;

                  .form-input {
                    position: relative;
                    max-width: 500px;

                    .input-placement {
                      position: relative;

                      .input {
                        input {
                          height: 60px;
                          padding: 10px 10px 0;
                          width: 100%;
                          outline: none;
                          font-size: 1rem;
                          border: 1px solid #8c8c8c;
                          border-radius: 2px;

                          &#username {
                            border-color: ${(props) =>
                              props.username ? "#5fa53f" : "#b92d2b"};
                          }

                          &#card-number {
                            border-color: ${(props) =>
                              props.card ? "#5fa53f" : "#b92d2b"};
                          }
                        }

                        label {
                          position: absolute;
                          color: #8c8c8c;
                          top: 6px;
                          left: 10px;
                          font-weight: 600;
                          font-size: 0.8125rem;
                          line-height: 1.3076923077;
                        }
                      }
                    }

                    .input-error {
                      font-size: 0.8125rem;
                      line-height: 1.3076923077;
                      color: #b92d2b;
                    }
                  }
                }
              }
            }

            .order-info {
              background-color: #f4f4f4;
              border-radius: 5px;
              list-style-type: none;
              margin: 0;
              padding: 0;
              text-align: left;

              .order-info-item {
                .item-container {
                  display: flex;

                  .item-content {
                    flex: 1 1 auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    min-height: 72px;
                    padding: 7px 14px;
                    overflow: hidden;

                    .item-title {
                      font-size: 1rem;
                      font-weight: 600;
                      color: #333;
                      line-height: 1;
                    }

                    .item-desc {
                      padding-top: 5px;
                      font-size: 1rem;
                      font-weight: 400;
                      color: #737373;
                    }
                  }

                  .order-info-item-button {
                    font-size: 1rem;
                    appearance: none;
                    background: 0 0;
                    border: none;
                    margin: 0;
                    padding: 14px;
                    flex: 0 0 auto;
                    font-weight: 600;
                    color: #0071eb;
                    cursor: pointer;

                    &:hover {
                      text-decoration: underline;
                    }
                  }
                }
              }
            }

            .tou-container {
              margin-top: 20px;
              box-sizing: content-box;
              color: #333333;

              .terms-of-use {
                box-sizing: content-box;

                .consent-input {
                  box-sizing: border-box;
                  position: relative;
                  padding-left: 36px;
                  min-height: 32px;
                  font-size: 1rem;
                  max-width: 500px;

                  input {
                    position: absolute;
                    top: 0;
                    left: 0;
                    opacity: 0;
                    box-sizing: border-box;
                    padding: 0;
                    margin: 0;
                  }

                  .checkbox-label {
                    margin: 8px 0;
                    position: relative;
                    display: block;
                    line-height: 1.2;
                    padding: 6px 0;
                    box-sizing: content-box;
                    font-weight: 400;

                    &.bold {
                      font-weight: 600;
                    }

                    &::before {
                      content: "";
                      position: absolute;
                      display: block;
                      top: 2px;
                      left: -36px;
                      padding: 0;
                      border: 1px solid #333333;
                      width: 25px;
                      height: 25px;
                      box-sizing: content-box;
                    }

                    &::after {
                      display: block;
                      position: absolute;
                      top: 7px;
                      left: -32px;
                      width: 14px;
                      height: 6px;
                      color: #0071eb;
                      border-bottom: 4px solid;
                      border-left: 4px solid;
                      transform: rotate(-45deg);
                      box-sizing: content-box;
                    }

                    &.all::after {
                      ${(props) => props.all && `content: "";`}
                    }
                    &.tou::after {
                      ${(props) => props.tou && `content: "";`}
                    }
                    &.third-party::after {
                      ${(props) => props.tp && `content: "";`}
                    }
                    &.abroad::after {
                      ${(props) => props.abroad && `content: "";`}
                    }
                    &.gateway::after {
                      ${(props) => props.gateway && `content: "";`}
                    }
                    &.anytime::after {
                      ${(props) => props.anytime && `content: "";`}
                    }

                    span {
                      line-height: 1.2;
                      text-align: center;
                      vertical-align: middle;
                    }
                  }
                }

                .checkboxes {
                  box-sizing: border-box;

                  .checkboxes-heading {
                    box-sizing: content-box;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 0.75em;
                    margin-bottom: 1.5rem;
                  }

                  & > ul {
                    padding: 0;
                    margin: 0;

                    & > li {
                      list-style: none;
                      margin-left: 0;
                      margin-bottom: 5px;
                    }
                  }

                  .error-summary {
                    color: #e50914;
                  }
                }
              }
            }
          }
        }

        .submit-button-container {
          display: block;
          max-width: 440px;
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
  }
`;

export default function CreditOption() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cardNumber, setCardNumber] = useState("");
  const [validCard, setValidCard] = useState(false);
  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);

  const [all, setAll] = useState(false);
  const [tou, setTOU] = useState(false);
  const [tp, setTP] = useState(false);
  const [abroad, setAbroad] = useState(false);
  const [gateway, setGateway] = useState(false);
  const [anytime, setAnytime] = useState(false);

  const [isPossible, setIsPossible] = useState(false);

  const membership = useSelector((state) => state.membership.membership);
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const hasMembership = JSON.parse(
    sessionStorage.getItem("user")
  ).hasMembership;

  const plan = () => {
    if (membership == "B") {
      return "베이식";
    } else if (membership == "S") {
      return "스탠다드";
    } else {
      return "프리미엄";
    }
  };

  const price = () => {
    if (membership == "B") {
      return "9,500";
    } else if (membership == "S") {
      return "13,500";
    } else {
      return "17,000";
    }
  };

  const checkAll = () => {
    if (all) {
      setTOU(true);
      setTP(true);
      setAbroad(true);
      setGateway(true);
      setAnytime(true);
    } else {
      setTOU(false);
      setTP(false);
      setAbroad(false);
      setGateway(false);
      setAnytime(false);
    }
  };

  useEffect(() => {
    checkAll();
  }, [all]);

  useEffect(() => {
    if (all && tou && tp && abroad && gateway && anytime) {
      setIsPossible(true);
    } else {
      setIsPossible(false);
    }
  }, [all, tou, tp, abroad, gateway, anytime]);

  const onChangeHandler = (event) => {
    if (event.target.name == "card-number") {
      setCardNumber(event.target.value);
    } else if (event.target.name == "username") {
      setUsername(event.target.value);
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (isPossible && validCard && validUsername) {
      try {
        const purchase = await axios({
          method: "POST",
          url: "/users/payment",
          baseURL: "https://rtflix.site/",
          data: {
            userIdx: userIdx,
            cardNumber: cardNumber,
            name: username,
            membershipType: membership,
          },
        });
        console.log(purchase);
        if (purchase.data.code == 1000) {
          dispatch({
            type: "SET_MEMBERSHIP",
            data: {
              membershipIdx: purchase.data.result,
            },
          });
          navigate(`/browse`);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const checkCard = () => {
    if (cardNumber.length !== 16) {
      setValidCard(false);
    } else {
      setValidCard(true);
    }
  };

  const checkName = () => {
    if (username.length == 0) {
      setValidUsername(false);
    } else {
      setValidUsername(true);
    }
  };

  useEffect(() => {
    setCardNumber(cardNumber);
    setUsername(username);
    checkCard();
    checkName();
  }, [username, cardNumber]);

  return (
    <ScreenStyle
      card={validCard}
      username={validUsername}
      all={all}
      tou={tou}
      tp={tp}
      abroad={abroad}
      gateway={gateway}
      anytime={anytime}
    >
      <Header logoutbtn />
      <div className="main-container">
        <div className="center-container">
          <form className="payment-form" onSubmit={onSubmitHandler}>
            <div className="payment-form-container">
              <div>
                <div className="step-header-container">
                  <div className="step-header">
                    <span className="step-indicator">
                      <b>3</b>/<b>3</b>단계
                    </span>
                    <h1 className="step-title">신용카드나 체크카드 등록</h1>
                  </div>
                </div>
              </div>
              <div className="field-container">
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
                <div className="form">
                  <ul>
                    <li className="form-list">
                      <div className="form-input">
                        <div className="input-placement">
                          <label className="input">
                            <input
                              type="tel"
                              id="card-number"
                              name="card-number"
                              minLength={12}
                              maxLength={19}
                              onChange={onChangeHandler}
                              required
                            />
                            <label htmlFor="card-number">카드 번호</label>
                          </label>
                        </div>
                        {!validCard && (
                          <div className="input-error">
                            카드 번호를 정확히 입력하세요.
                          </div>
                        )}
                      </div>
                    </li>
                    <li className="form-list">
                      <div className="form-input">
                        <div className="input-placement">
                          <label className="input">
                            <input
                              type="text"
                              id="username"
                              name="username"
                              required
                              minLength={1}
                              onChange={onChangeHandler}
                            />
                            <label htmlFor="username">이름</label>
                          </label>
                        </div>
                        {!validUsername && (
                          <div className="input-error">
                            이름은 반드시 입력해 주셔야 합니다.
                          </div>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
                <ul className="order-info">
                  <div className="order-info-item">
                    <div className="item-container">
                      <div className="item-content">
                        <div className="item-title">
                          <span>매월 {price()}원</span>
                        </div>
                        <div className="item-desc">{plan()} 멤버십</div>
                      </div>
                      <button
                        type="button"
                        className="order-info-item-button"
                        onClick={() => navigate(`/signup/editplan`)}
                      >
                        변경
                      </button>
                    </div>
                  </div>
                </ul>
                <div className="tou-container">
                  <div className="terms-of-use">
                    <div className="checkboxes">
                      <h4 className="checkboxes-heading">
                        <div className="consent-input">
                          <input
                            onChange={() => setAll((prev) => !prev)}
                            type="checkbox"
                            id="tou-all"
                          />
                          <label
                            htmlFor="tou-all"
                            className="checkbox-label bold all"
                          >
                            <span>
                              19세 이상이며, 아래의 약관에 모두 동의합니다.
                            </span>
                          </label>
                          <div className="helper"></div>
                        </div>
                      </h4>
                      {!isPossible && (
                        <div className="error-summary">
                          먼저 이용 약관에 동의하셔야 합니다.
                        </div>
                      )}
                      <ul>
                        <li>
                          <div className="consent-input">
                            <input
                              onChange={() => setTOU((prev) => !prev)}
                              type="checkbox"
                              id="cb-tou"
                            ></input>
                            <label
                              htmlFor="cb-tou"
                              className="checkbox-label tou"
                            >
                              <span>
                                Netflix 이용 약관 및 개인정보 처리방침에
                                동의합니다.
                              </span>
                            </label>
                            <div className="helper"></div>
                          </div>
                        </li>
                        <li>
                          <div className="consent-input">
                            <input
                              type="checkbox"
                              id="cb-thrid-parties"
                              onChange={() => setTP((prev) => !prev)}
                            ></input>
                            <label
                              htmlFor="cb-thrid-parties"
                              className="checkbox-label third-party"
                            >
                              <span>
                                본인의 개인 정보를 제3자에 제공하는 데에
                                동의합니다.
                              </span>
                            </label>
                            <div className="helper"></div>
                          </div>
                        </li>
                        <li>
                          <div className="consent-input">
                            <input
                              onChange={() => setAbroad((prev) => !prev)}
                              type="checkbox"
                              id="cb-abroad"
                            ></input>
                            <label
                              htmlFor="cb-abroad"
                              className="checkbox-label abroad"
                            >
                              <span>
                                본인의 개인 정보가 해외로 이전되는 데에
                                동의합니다.
                              </span>
                            </label>
                            <div className="helper"></div>
                          </div>
                        </li>
                        <li>
                          <div className="consent-input">
                            <input
                              onChange={() => setGateway((prev) => !prev)}
                              type="checkbox"
                              id="cb-gateway"
                            ></input>
                            <label
                              htmlFor="cb-gateway"
                              className="checkbox-label gateway"
                            >
                              <span>
                                본인의 개인 정보를 결제 서비스업체에 제공하는
                                데에 동의합니다.
                              </span>
                            </label>
                            <div className="helper"></div>
                          </div>
                        </li>
                        <li>
                          <div className="consent-input">
                            <input
                              onChange={() => setAnytime((prev) => !prev)}
                              type="checkbox"
                              id="cb-anytime"
                            ></input>
                            <label
                              htmlFor="cb-anytime"
                              className="checkbox-label anytime"
                            >
                              <span>
                                멤버십을 해지하지 않으면 Netflix에서 자동으로
                                멤버십을 계속하며, 멤버십 요금(현 {price()}원)이
                                등록한 결제 수단으로 매월 청구됩니다. 멤버십은
                                www.netflix.com의 '계정' 페이지에서 언제든지
                                해지할 수 있습니다. 이 경우 결제 주기가 종료될
                                때 멤버십이 해지되며, 잔여 기간 동안은 서비스를
                                계속 이용할 수 있습니다. 단, 결제일로부터 7일
                                이내 Netflix 콘텐츠를 시청하지 않고 멤버십이
                                즉시 종료되도록 해지하는 경우 해당 결제 주기에
                                청구된 멤버십 요금을 전액 환불 요청할 수
                                있습니다.
                              </span>
                            </label>
                            <div className="helper"></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="submit-button-container">
              <button type="submit" className="submit-button">
                유료 멤버십 시작
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer registration />
    </ScreenStyle>
  );
}
