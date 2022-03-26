import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const EmailFormStyle = styled.form`
  max-width: 950px;
  padding-top: 0.85rem;
  display: flex;
  flex-direction: column;

  & > h3 {
    max-width: none;
    font-size: 1.2rem;
    padding: 0 5%;
    padding-bottom: 20px;
    margin: 0 auto;
    font-weight: 400;
    line-height: 1.328125;
  }

  & > div {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    text-align: center;

    & > ul {
      flex: 1 0 auto;
      text-align: right;
      vertical-align: top;
      padding: 0;
      margin: 0;

      & > li {
        list-style: none;
        margin-left: 0;
        margin-bottom: 10px;
        display: list-item;

        & > div {
          max-width: 500px;
          position: relative;

          & > div {
            position: relative;

            & > label > input {
              min-width: 500px;
              font-size: 1rem;
              height: 70px;
              padding: 10px 10px 0;
              width: 100%;
              border-radius: 2px;
              color: black;
              border: 1px solid #8c8c8c;
              appearance: none;
              outline: none;
              border-bottom: ${(props) => !props.valid && "2px solid #ffa00a"};
            }

            & > label > label {
              font-size: 0.8125rem;
              position: absolute;
              font-weight: 700;
              line-height: 1.3076923077;
              top: 6px;
              left: 10px;
              color: #8c8c8c;
            }

            & > div {
              color: #ffa00a;
              text-align: left;
              margin-bottom: -6px;
              padding: 6px 3px;
              font-size: 0.9375rem;
              line-height: 1.3;
            }
          }
        }
      }
    }

    & > div {
      display: inline-block;
      flex: 1 0 auto;

      .button-start {
        border: none;
        border-left: 1px solid #333;
        margin: 0;
        font-size: 1.875rem;
        min-height: 70px;
        padding: 0 1em;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        width: auto;
        position: relative;
        appearance: none;
        background-color: #e50914;
        color: white;
        cursor: pointer;

        &:hover {
          background-color: #f40612;
        }

        .button-text {
          padding: 0.5rem 0;
          flex: 1 1 auto;
          text-align: center;
          font-weight: 400;
        }

        .button-svg {
          height: 0.75em;
          width: 0.35em;
          flex: 0 1 auto;
          margin: 0 0 0 0.5em;
          position: relative;

          & > svg {
            position: absolute;
            top: 0;
            left: 0;
            margin: 1px 0;
            height: 100%;
            transform: scaleX(1);
            overflow: hidden;
          }
        }
      }
    }
  }
`;

export default function EmailForm() {
  const emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{1,3}$/i;
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setEmail(email);
    checkValid();
  }, [email]);

  const onChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const submitEmail = async (event) => {
    event.preventDefault();
    if (email && valid) {
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
    } else if (email.length >= 0) {
      setValid(false);
      setError("이메일 주소를 입력해 주세요.");
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
                <div>{error}</div>
              </div>
            </div>
          </li>
        </ul>
        <div>
          <button className="button-start" type="submit">
            <span className="button-text">시작하기</span>
            <span className="button-svg">
              <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
                  fill="white"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </EmailFormStyle>
  );
}
