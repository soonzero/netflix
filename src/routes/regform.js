import React from "react";
import Header from "components/signup/Header";
import Footer from "components/common/footer";
import styled from "styled-components";
import { useState, useEffect } from "react";
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

      .reg-form-container {
        text-align: left;
        max-width: 440px;
        margin: 0 auto;

        & > div:first-child {
          .step-header {
            margin-top: 20px;

            .step-indicator {
              font-size: 0.8125rem;
              line-height: 1.4615384615;
              display: block;
            }

            .step-title {
              font-size: 2rem;
              line-height: 1.3125;
              margin: 0 0 0.4em;
              font-weight: 600;
            }
          }

          & > div:last-child {
            & > div {
              font-size: 1.125rem;
              line-height: 1.3333333333;
            }

            & > div:nth-child(2) {
              margin-top: 10px;
            }
          }

          .simple-form {
            margin: 10px 0 20px;

            .form-list {
              margin-bottom: 10px;

              .form-input {
                max-width: 500px;
                position: relative;
                display: block;

                .input-placement {
                  position: relative;

                  input {
                    height: 60px;
                    padding: 10px 10px 0;
                    width: 100%;
                    appearance: none;
                    font-size: 1rem;
                    border-radius: 2px;
                    border: 1px solid #8c8c8c;
                    display: block;
                    color: black;
                    outline: none;

                    &#email {
                      border-color: ${(props) =>
                        props.email ? "#5fa53f" : "#b92d2b"};
                    }

                    &#password {
                      border-color: ${(props) =>
                        props.password ? "#5fa53f" : "#b92d2b"};
                    }
                  }

                  .place-label {
                    position: absolute;
                    top: 6px;
                    left: 10px;
                    font-weight: 700;
                    font-size: 0.8125rem;
                    color: #8c8c8c;
                  }
                }

                .input-error {
                  font-size: 0.8125rem;
                  line-height: 1.3076923077;
                  color: #b92d2b;
                }
              }

              .checkbox-wrapper {
                position: relative;
                padding-left: 36px;
                min-height: 32px;
                font-size: 1rem;
                max-width: 500px;
                user-select: none;

                input[type="checkbox"] {
                  position: absolute;
                  top: 0;
                  left: 0;
                  opacity: 0;
                  margin: 0;
                }

                label {
                  margin: 8px 0;
                  padding: 6px 0;
                  display: block;
                  position: relative;
                  line-height: 1.2;

                  &::before {
                    content: "";
                    border: 1px solid black;
                    width: 25px;
                    height: 25px;
                    display: block;
                    position: absolute;
                    top: 2px;
                    left: -36px;
                    box-sizing: content-box;
                  }

                  &.privacy-consent::before {
                    border-color: ${(props) => !props.mandatory && "#b92d2b"};
                  }

                  &.email-consent::before {
                    border-color: ${(props) => !props.optional && "#b92d2b"};
                  }

                  ${(props) =>
                    props.mandatory &&
                    `
                  &.privacy-consent::after {
                    display: block;
                    position: absolute;
                    top: 7px;
                    left: -32px;
                    height: 6px;
                    width: 14px;
                    content: "";
                    border-left: 4px solid #0071eb;
                    border-bottom: 4px solid #0071eb;
                    transform: rotate(-45deg);
                    box-sizing: content-box;
                  }
                  `}

                  ${(props) =>
                    props.optional &&
                    `&.email-consent::after {
                    display: block;
                    position: absolute;
                    top: 7px;
                    left: -32px;
                    height: 6px;
                    width: 14px;
                    content: "";
                    border-left: 4px solid #0071eb;
                    border-bottom: 4px solid #0071eb;
                    transform: rotate(-45deg);
                    box-sizing: content-box;
                  }`}
                }

                .helper {
                  color: #b92d2b;
                  font-size: 0.8125rem;
                  line-height: 1em;
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

export default function RegForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{1,3}$/i;
  const [email, setEmail] = useState(useSelector((state) => state.email.email));
  const [validEmail, setValidEmail] = useState(false);
  const [emailText, setEmailText] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [checkedMandatory, setCheckedMandatory] = useState(false);
  const [checkedOptional, setCheckedOptional] = useState(false);

  const onChangeHandler = (event) => {
    if (event.target.name == "email") {
      setEmail(event.target.value);
    } else if (event.target.name == "password") {
      setPassword(event.target.value);
    }
  };

  const checkEmail = () => {
    if (email.length >= 5 && email.length < 51) {
      if (emailReg.test(email)) {
        setValidEmail(true);
        setEmailText("");
      } else {
        setValidEmail(false);
        setEmailText("정확한 이메일 주소를 입력하세요.");
      }
    } else {
      setValidEmail(false);
      setEmailText("이메일 주소는 5 ~ 50자 사이여야 합니다.");
    }
  };

  const checkPassword = () => {
    if (password.length >= 6 && password.length < 60) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };

  useEffect(() => {
    setEmail(email);
    setPassword(password);
    if (email) {
      checkEmail();
    }
    if (password) {
      checkPassword();
    }
  }, [email, password]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (checkedMandatory) {
      try {
        const signup = await axios({
          method: "post",
          url: "/users/signup",
          baseURL: "https://rtflix.site",
          data: {
            email: email,
            password: password,
          },
        });
        if (signup.data.code == 1000) {
          login();
        } else if (signup.data.code == 2017) {
          alert("이미 존재하는 계정입니다.");
          login();
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const login = async () => {
    try {
      const login = await axios({
        method: "POST",
        url: "/users/login",
        baseURL: "https://rtflix.site",
        data: {
          email: email,
          password: password,
        },
      });
      console.log(login);
      if (login.data.code == 1000) {
        sessionStorage.setItem("user", JSON.stringify(login.data.result));
        if (login.data.result.hasMembership == 0) {
          alert("멤버십 등록이 필요합니다.");
          navigate(`/signup/planform`);
        } else {
          navigate(`/browse`);
        }
      } else if (login.data.code == 3014) {
        alert("비밀번호가 틀렸습니다. 다시 입력해주세요.");
        navigate(`/login`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScreenStyle
      email={validEmail}
      password={validPassword}
      mandatory={checkedMandatory}
      optional={checkedOptional}
    >
      <Header />
      <div className="main-container">
        <div className="center-container">
          <form onSubmit={onSubmitHandler}>
            <div className="reg-form-container">
              <div>
                <div className="step-header-container">
                  <div className="step-header">
                    <span className="step-indicator">
                      <b>1</b>/<b>3단계</b>
                    </span>
                    <h1 className="step-title">
                      비밀번호를 설정해 멤버십을 시작하세요.
                    </h1>
                  </div>
                </div>
                <div>
                  <div className="context-row">
                    몇 단계만 더 거치면 넷플릭스 가입 완료!
                  </div>
                  <div className="context-row">
                    복잡한 단계는 모두 없앴습니다.
                  </div>
                  <ul className="simple-form">
                    <li className="form-list">
                      <div className="form-input">
                        <div className="input-placement">
                          <label className="input-email">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              maxLength={50}
                              minLength={5}
                              required
                              value={email}
                              onChange={onChangeHandler}
                            ></input>
                            <label className="place-label">이메일 주소</label>
                          </label>
                        </div>
                        {!validEmail && (
                          <div className="input-error">{emailText}</div>
                        )}
                      </div>
                    </li>
                    <li className="form-list">
                      <div className="form-input">
                        <div className="input-placement">
                          <label className="input-password">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              required
                              maxLength={61}
                              minLength={6}
                              value={password}
                              onChange={onChangeHandler}
                            ></input>
                            <label className="place-label">
                              비밀번호를 추가하세요
                            </label>
                          </label>
                        </div>
                        {!validPassword && (
                          <div className="input-error">
                            {password.length == 0
                              ? "비밀번호를 입력해 주세요."
                              : "비밀번호는 6~60자 사이여야 합니다."}
                          </div>
                        )}
                      </div>
                    </li>
                    <li className="form-list">
                      <div className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          id="privacy-consent"
                          name="privacyConsent"
                          onClick={() => setCheckedMandatory((prev) => !prev)}
                        ></input>
                        <label
                          htmlFor="privacy-consent"
                          className="privacy-consent"
                        >
                          <span>
                            예, 저는 개인정보 처리방침에 따른 개인정보 수집 및
                            활용에 동의합니다.
                          </span>
                        </label>
                        <div className="helper">
                          {!checkedMandatory &&
                            "먼저 이용 약관에 동의하셔야 합니다."}
                        </div>
                      </div>
                    </li>
                    <li className="form-list">
                      <div className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          id="email-consent"
                          name="emailConsent"
                          onClick={() => setCheckedOptional((prev) => !prev)}
                        ></input>
                        <label
                          htmlFor="email-consent"
                          className="email-consent"
                        >
                          예, 넷플릭스 특별 할인 알림 이메일을 보내주세요. (선택
                          사항)
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="submit-button-container">
                <button className="submit-button">동의하고 계속</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer registration />
    </ScreenStyle>
  );
}
