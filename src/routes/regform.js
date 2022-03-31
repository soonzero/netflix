import React from "react";
import Header from "components/signup/header";
import Footer from "components/common/footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RegistrationStyle } from "components/common/styled";

export default function RegForm() {
  // Module
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Global Variables
  const [email, setEmail] = useState(useSelector((state) => state.email.email));

  // Local Variables
  const emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{1,3}$/i;

  // Local States
  const [validEmail, setValidEmail] = useState(false);
  const [emailText, setEmailText] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [checkedMandatory, setCheckedMandatory] = useState(false);
  const [checkedOptional, setCheckedOptional] = useState(false);

  // Life Cycle
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

  // Functions
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
    <RegistrationStyle
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
    </RegistrationStyle>
  );
}
