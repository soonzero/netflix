import React, { useEffect, useState } from "react";
import Footer from "components/common/footer";
import styled from "styled-components";
import Header from "components/signup/Header";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ScreenStyle = styled.div`
  background-color: black;
  min-height: 100%;
  position: relative;
  color: white;
  z-index: 0;

  .login-wrapper-background {
    background-size: cover;
    display: block;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    position: absolute;
    width: 100%;
    z-index: -1;
    opacity: 0.5;

    img {
      min-height: 100%;
      min-width: 100%;
    }
  }

  .login-body {
    margin: 0 auto -236px;
    min-height: 100vh;
    background-color: transparent;
    max-width: 450px;
    padding: 0 5%;
    box-sizing: content-box;

    &::before {
      content: "";
      height: 91px;
      display: block;
    }

    &::after {
      content: "";
      height: 236px;
      display: block;
    }

    & > div {
      .login-main {
        min-height: 660px;
        margin: 0;
        padding: 60px 68px 40px;
        margin-bottom: 90px;
        background-color: rgba(0, 0, 0, 0.75);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        width: 100%;

        .login-form-main {
          flex-grow: 1;

          .login-form-title {
            color: white;
            font-size: 2rem;
            line-height: 1.28125;
            font-weight: 700;
            margin-bottom: 28px;
          }

          .login-form {
            .login-input {
              padding-bottom: 16px;
              max-width: 100%;
              position: relative;

              .login-input-placement {
                position: relative;
                border-radius: 4px;

                .input-email,
                .input-password {
                  input {
                    background-color: #333;
                    border-radius: 4px;
                    border: 0;
                    color: white;
                    height: 50px;
                    font-size: 1rem;
                    padding: 16px 20px 0;
                    width: 100%;
                    outline: none;

                    &:focus {
                      background-color: #454545;
                    }
                  }

                  label {
                    position: absolute;
                    top: 7px;
                    left: 20px;
                    font-size: 0.6875rem;
                    color: #8c8c8c;
                  }
                }

                .input-email {
                  &::after {
                    border-bottom: 2px solid #e87c03;
                    border-bottom-left-radius: 4px;
                    border-bottom-right-radius: 4px;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    ${(props) =>
                      !props.validEmail &&
                      `
                    content: "";`}
                    display: block;
                    height: 6px;
                    width: 100%;
                  }
                }

                .input-password {
                  &::after {
                    border-bottom: 2px solid #e87c03;
                    border-bottom-left-radius: 4px;
                    border-bottom-right-radius: 4px;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    ${(props) =>
                      !props.validPassword &&
                      `
                    content: "";`}
                    display: block;
                    height: 6px;
                    width: 100%;
                  }
                }
              }

              .email-input-error,
              .password-input-error {
                color: #e87c03;
                margin-bottom: -6px;
                padding: 6px 3px;
                font-size: 0.8125rem;
              }
            }

            .login-button {
              border-radius: 4px;
              font-size: 1rem;
              font-weight: 700;
              margin: 24px 0 12px;
              width: 100%;
              max-width: 100%;
              padding: 16px;
              line-height: 1;
              border: none;
              background-color: #e50914;
              color: white;
              cursor: pointer;
            }

            .login-remember-or-help {
              display: flex;
              position: relative;

              .login-remember {
                flex-grow: 1;
                padding-left: 20px;
                font-size: 1rem;
                display: inline-block;
                margin-bottom: -5px;

                .login-remember-me {
                  position: absolute;
                  top: 0;
                  left: 0;
                  opacity: 0;
                  padding: 0;
                  margin: 0;
                  margin-right: 10px;
                }

                & > label {
                  padding: 0;
                  position: relative;
                  display: block;
                  color: #333;
                  line-height: 1.2;

                  .login-remember-me-text {
                    color: #b3b3b3;
                    font-size: 0.8125rem;
                    font-weight: 500;
                  }

                  &::before {
                    content: "";
                    width: 16px;
                    height: 16px;
                    background-color: #737373;
                    border-radius: 2px;
                    position: absolute;
                    top: 2px;
                    left: -20px;
                  }

                  ${(props) =>
                    props.remember &&
                    `&::after {
                    font-family: "Netflix Icon";
                    content: "\\e804";
                    color: black;
                    font-size: 1.125rem;
                    position: absolute;
                    top: 0;
                    left: -21px;
                  }`}
                }
              }

              .login-help {
                color: #b3b3b3;
                font-size: 0.8125rem;
                line-height: 1.2692307692;
                font-weight: 500;
                padding-top: 2px;
                cursor: pointer;
              }
            }
          }
        }

        .login-form-other {
          .fb-login-form-container {
            margin-bottom: 0;

            .fb-login-form {
              display: block;
            }
            .fb-minimal {
              hr {
                display: none;
              }

              .fb-login {
                min-height: 0;
                width: auto;
                border: none;
                border-radius: 2px;
                background: 0 0;
                padding: 0;
                margin: 0;
                margin-top: 16px;
                display: inline-block;
                font-size: 0.8125rem;
                line-height: 1em;
                min-width: 98px;
                position: relative;
                vertical-align: middle;
                text-align: center;

                .fb-login-button {
                  background: 0 0;
                  cursor: pointer;
                  border: none;
                  font-size: 0.875rem;
                  line-height: 1em;

                  img {
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                    vertical-align: middle;
                  }

                  .fb-text {
                    color: #737373;
                    font-size: 0.8125rem;
                    font-weight: 500;
                    line-height: 1em;
                    text-align: center;
                    vertical-align: middle;
                  }
                }
              }
            }
          }

          .signup-now {
            color: #737373;
            font-size: 1rem;
            font-weight: 500;
            margin-top: 16px;
            line-height: 1.28125;

            a {
              text-decoration: none;
              color: white;
            }
          }

          .recaptcha-term {
            color: #8c8c8c;
            font-size: 0.8125rem;
            margin-top: 11px;
            position: relative;
            text-align: left;

            p {
              margin: 13px 0;
              line-height: 1.2307692308;
            }

            span {
              line-height: 1.2692307692;
            }
          }
        }
      }
    }
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [remember, setRemember] = useState(true);

  const onChangeHandler = (event) => {
    if (event.target.name == "email") {
      setEmail(event.target.value);
    } else if (event.target.name == "password") {
      setPassword(event.target.value);
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (email && password) {
      if (validEmail && validPassword) {
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
          if (login.data.code == 1000) {
            dispatch({
              type: "LOGGED_IN",
              data: {
                userIdx: login.data.result.userIdx,
                jwt: login.data.result.jwt,
              },
            });
            navigate(`/browse`);
          } else if (login.data.code == 3015) {
            alert("가입되지 않은 이메일입니다.");
          } else if (login.data.code == 3014) {
            alert("비밀번호가 올바르지 않습니다.");
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  const checkEmail = () => {
    if (email.length >= 5 && email.length < 51) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const checkPassword = () => {
    if (password.length >= 4 && password.length < 60) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };

  useEffect(() => {
    setEmail(email);
    setPassword(password);
    checkEmail();
    checkPassword();
  }, [email, password]);

  return (
    <ScreenStyle
      validEmail={validEmail}
      validPassword={validPassword}
      remember={remember}
    >
      <div className="login-wrapper-background">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/87a1d9d8-a21d-4109-ba3a-c10d9055f5cf/25155d75-2aae-4c0a-aee9-25c07646d644/KR-ko-20220307-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
      </div>
      <Header login />
      <div className="login-body">
        <div>
          <div className="login-main">
            <div className="login-form-main">
              <h1 className="login-form-title">로그인</h1>
              <form className="login-form" onSubmit={onSubmitHandler}>
                <div className="login-input">
                  <div className="login-input-placement">
                    <label className="input-email">
                      <input
                        type="email"
                        id="login-email"
                        name="email"
                        value={email}
                        onChange={onChangeHandler}
                      />
                      <label htmlFor="login-email">이메일 주소</label>
                    </label>
                  </div>
                  {validEmail ? null : (
                    <div className="email-input-error">
                      정확한 이메일 주소를 입력하세요.
                    </div>
                  )}
                </div>
                <div className="login-input">
                  <div className="login-input-placement">
                    <label className="input-password">
                      <input
                        type="password"
                        id="login-password"
                        name="password"
                        value={password}
                        onChange={onChangeHandler}
                      />
                      <label htmlFor="login-password">비밀번호</label>
                    </label>
                  </div>
                  {validPassword ? null : (
                    <div className="password-input-error">
                      비밀번호는 4 - 60자 사이여야 합니다.
                    </div>
                  )}
                </div>
                <button className="login-button" type="submit">
                  로그인
                </button>
                <div className="login-remember-or-help">
                  <div className="login-remember">
                    <input
                      type="checkbox"
                      className="login-remember-me"
                      id="login-remember-me"
                      onChange={() => setRemember((prev) => !prev)}
                      defaultChecked
                    />
                    <label htmlFor="login-remember-me">
                      <span className="login-remember-me-text">
                        로그인 정보 저장
                      </span>
                    </label>
                  </div>
                  <div className="login-help">도움이 필요하신가요?</div>
                </div>
              </form>
            </div>
            <div className="login-form-other">
              <form className="fb-login-form-container">
                <div className="fb-login-form">
                  <div className="fb-minimal">
                    <hr />
                    <button className="fb-login" type="button">
                      {/* 페이스북 로그인 api 연결 필요 */}
                      <div className="fb-login-button">
                        <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" />
                        <span className="fb-text">Facebook으로 로그인</span>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
              <div className="signup-now">
                Netflix 회원이 아닌가요? <Link to="/">지금 가입하세요</Link>.
              </div>
              <div className="recaptcha-term">
                <p>
                  이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이
                  아님을 확인합니다. 자세히 알아보기
                </p>
                <div className="recaptcha-detail">
                  <span>
                    Google reCAPTCHA가 수집하는 정보에는 Google
                    개인정보처리방침과 서비스 약관이 적용되며, 해당 정보는
                    reCAPTCHA 서비스 제공, 관리 및 개선과 일반적인 보안 유지에
                    사용됩니다(Google의 개인 맞춤 광고에 사용 안 함).
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer registration login center dark />
    </ScreenStyle>
  );
}
