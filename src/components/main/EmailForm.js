import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EmailFormStyle } from "components/common/styled";
import { ReactComponent as StartSVG } from "images/start.svg";

export default function EmailForm() {
  // Module
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Local Variable
  const emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  // Local States
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);
  const [error, setError] = useState("");

  //Life Cycle
  useEffect(() => {
    setEmail(email);
    checkValid();
  }, [email]);

  // Functions
  const onChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const submitEmail = async (event) => {
    event.preventDefault();
    if (email.length > 0 && valid) {
      try {
        const check = await axios({
          method: "GET",
          url: `/users/check-email?email=${email}`,
          baseURL: "https://rtflix.site/",
        });
        dispatch({ type: "SET_EMAIL", data: { email: email } });
        if (check.data.result == 1) {
          alert("이미 가입된 이메일입니다.");
          navigate(`/login`);
        } else if (check.data.result == 0) {
          navigate(`/signup/registration`);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const checkValid = () => {
    if (email.length >= 5) {
      if (emailReg.test(email)) {
        setValid(true);
        setError("");
      } else {
        setValid(false);
        setError("정확한 이메일 주소를 입력하세요.");
      }
    } else if (email.length > 0) {
      setValid(false);
      setError("이메일 주소를 입력해 주세요.");
    } else if (email.length == 0) {
      setValid(true);
      setError("");
    }
  };

  return (
    <EmailFormStyle valid={valid} onSubmit={submitEmail}>
      <h3>
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </h3>
      <div>
        <ul>
          <li>
            <div>
              <div>
                <label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChangeHandler}
                    maxLength={50}
                    minLength={5}
                  ></input>
                  <label htmlFor="email">이메일 주소</label>
                </label>
                {error.length > 0 && <div>{error}</div>}
              </div>
            </div>
          </li>
        </ul>
        <div>
          <button className="button-start" type="submit">
            <span className="button-text">시작하기</span>
            <span className="button-svg">
              <StartSVG />
            </span>
          </button>
        </div>
      </div>
    </EmailFormStyle>
  );
}
