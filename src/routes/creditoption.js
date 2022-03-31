import React, { useEffect, useState } from "react";
import Footer from "components/common/footer";
import Header from "components/signup/header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RegistrationStyle } from "components/common/styled";

export default function CreditOption() {
  // Module
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Global Variable
  const membership = useSelector((state) => state.membership.membership);

  // Local Variables
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;

  // Local States
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

  // Life Cycle
  useEffect(() => {
    setCardNumber(cardNumber);
    setUsername(username);
    checkCard();
    checkName();
  }, [username, cardNumber]);

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

  // Functions
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

  return (
    <RegistrationStyle
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
    </RegistrationStyle>
  );
}
