import React, { useEffect, useState } from "react";
import Footer from "components/common/footer";
import Header from "components/signup/header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LoginStyle } from "components/common/styled";

export default function Login() {
  // Module
  const navigate = useNavigate();

  // Local Variables
  const emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  // Local States
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  // Life Cycle
  useEffect(() => {
    setEmail(email);
    setPassword(password);
    checkEmail();
    checkPassword();
  }, [email, password]);

  // Functions
  const onChangeHandler = (event) => {
    if (event.target.name == "email") {
      setEmail(event.target.value);
    } else if (event.target.name == "password") {
      setPassword(event.target.value);
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (email.length > 0 && password.length > 0) {
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
            if (remember) {
              localStorage.setItem("user", JSON.stringify(login.data.result));
            }
            sessionStorage.setItem("user", JSON.stringify(login.data.result));
            if (login.data.result.hasMembership == 0) {
              alert("가입된 멤버십이 없습니다.");
              navigate(`/signup/planform`);
            } else {
              navigate(`/browse`);
            }
          } else if (login.data.code == 3015) {
            alert("가입되지 않은 이메일입니다.");
            navigate(`/`);
          } else if (login.data.code == 3014) {
            alert("비밀번호가 올바르지 않습니다.");
          }
        } catch (e) {
          console.log(e);
        }
      }
    } else {
      alert("이메일과 비밀번호를 올바르게 입력하세요.");
    }
  };

  const checkEmail = () => {
    if (email.length >= 5 && email.length < 51) {
      if (emailReg.test(email)) {
        setValidEmail(true);
      } else {
        setValidEmail(false);
      }
    } else if (email.length == 0) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const checkPassword = () => {
    if (password.length >= 4 && password.length < 60) {
      setValidPassword(true);
    } else if (password.length == 0) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };

  return (
    <LoginStyle
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
    </LoginStyle>
  );
}
