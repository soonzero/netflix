import axios from "axios";
import AccountHeader from "components/common/accountheader";
import { LockBodyStyle } from "components/common/styled";
import Footer from "components/common/footer";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CheckSVG } from "images/check-pin.svg";

export default function Lock(props) {
  // Module
  const navigate = useNavigate();

  // Local Variables
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;

  // Local States
  const [selected, setSelected] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [next, setNext] = useState(false);
  const [info, setInfo] = useState();
  const [lock, setLock] = useState(true);
  const [PIN, setPIN] = useState();
  const [one, setOne] = useState();
  const [two, setTwo] = useState();
  const [three, setThree] = useState();
  const [four, setFour] = useState();

  // Life Cycle
  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    setPassword(password);
  }, [password]);

  useEffect(() => {
    setOne(one);
    setTwo(two);
    setThree(three);
    setFour(four);
  }, [one, two, three, four]);

  useEffect(() => {
    if (sessionStorage.getItem("user") == null) {
      navigate(`/login`);
    }
  }, []);

  // Functions
  const getProfile = async () => {
    if (isLoading) {
      try {
        const profile = await axios({
          method: "GET",
          url: `/profile/info?userIdx=${userIdx}&profileIdx=${sessionStorage.getItem(
            "lock"
          )}`,
          baseURL: "https://rtflix.site",
          headers: {
            "X-ACCESS-TOKEN": token,
          },
        });
        setInfo(profile.data.result);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const checkAuth = async () => {
    try {
      const check = await axios({
        method: "GET",
        url: `/users/account?userIdx=${userIdx}`,
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      if (check.data.result.password == password) {
        alert("비밀번호가 일치합니다.");
        setNext(true);
      } else {
        alert("올바르지 않은 비밀번호입니다. 다시 입력하세요.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const inputHandler = (event) => {
    if (event.target.name == "one") {
      setOne(event.target.value);
    } else if (event.target.name == "two") {
      setTwo(event.target.value);
    } else if (event.target.name == "three") {
      setThree(event.target.value);
    } else {
      setFour(event.target.value);
    }
  };

  const submitPin = async () => {
    if (lock) {
      if (
        typeof one == "string" &&
        typeof two == "string" &&
        typeof three == "string" &&
        typeof four == "string"
      ) {
        if (
          one.length == 1 &&
          two.length == 1 &&
          three.length == 1 &&
          four.length == 1
        ) {
          try {
            const lock = await axios({
              method: "PATCH",
              url: "/profile/manage",
              baseURL: "https://rtflix.site",
              headers: {
                "X-ACCESS-TOKEN": token,
              },
              data: {
                userIdx: userIdx,
                profileIdx: parseInt(sessionStorage.getItem("lock")),
                profileLockPin: one + two + three + four,
              },
            });
          } catch (e) {
            console.log(e);
          }
        }
      }
    } else {
      const unlock = await axios({
        method: "PATCH",
        url: "/profile/manage",
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
        data: {
          userIdx: userIdx,
          profileIdx: parseInt(sessionStorage.getItem("lock")),
          profileLockPin: "N",
        },
      });
    }
    try {
      const newOne = await axios({
        method: "GET",
        url: `/profile?userIdx=${userIdx}`,
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      sessionStorage.setItem("profiles", JSON.stringify(newOne.data.result));
    } catch (e) {
      console.log(e);
    }
    navigate("/YourAccount");
  };

  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <AccountHeader />
      {!isLoading && (
        <LockBodyStyle lock={lock}>
          <div className="body">
            <div className="responsive-account-container">
              <div className="profile-lock-container">
                <div className="profile-hub-header">
                  <h1 className="profile=lock=header">프로필 잠금</h1>
                  <img className="active-profile" src={info.profileImageUrl} />
                </div>
                <div>
                  <h2
                    className={`account-subheader ${
                      !next
                        ? "password-check-subheader"
                        : "profile-lock-subheader"
                    }`}
                  >
                    {!next ? (
                      <>
                        <strong>{info.profileName}</strong> 프로필의{" "}
                        <strong>잠금 설정</strong>을 변경하려면 계정 비밀번호를
                        입력하세요.
                      </>
                    ) : (
                      "4자리 PIN 번호를 생성해 이 프로필을 잠그세요."
                    )}
                  </h2>
                  {!next ? (
                    <div className="password-check-input-wrapper">
                      <label
                        htmlFor="input-account-content-restrictions"
                        className="password-input ui-label ui-input-label"
                      >
                        <span className="ui-label-text"></span>
                        <input
                          type="password"
                          className="ui-text-input"
                          id="input-account-content-restrictions"
                          value={password}
                          onChange={passwordHandler}
                          required
                        />
                      </label>
                      <a href="/lock" className="password-check-forgot">
                        비밀번호를 잊으셨나요?
                      </a>
                    </div>
                  ) : (
                    <>
                      <div className="ui-binary-input">
                        <input
                          type="checkbox"
                          id="bxid-lock-profile-true"
                          defaultChecked
                          onChange={() => setLock((prev) => !prev)}
                        />
                        <label htmlFor="bxid-lock-profile-true">
                          {info.profileName} 프로필을 이용하려면 PIN 번호를
                          입력하도록 합니다.
                          <span className="tooltip">
                            <CheckSVG />
                          </span>
                        </label>
                      </div>
                      {lock && (
                        <>
                          <div className="pin-input-container">
                            <input
                              type="tel"
                              pattern="[0-9]"
                              name="one"
                              maxLength={1}
                              className="pin-number-input pin-1"
                              tabIndex={0}
                              value={one}
                              onChange={inputHandler}
                              required
                            />
                            <input
                              type="tel"
                              pattern="[0-9]"
                              name="two"
                              maxLength={1}
                              className="pin-number-input pin-2"
                              tabIndex={0}
                              value={two}
                              onChange={inputHandler}
                              required
                            />
                            <input
                              type="tel"
                              pattern="[0-9]"
                              name="three"
                              maxLength={1}
                              className="pin-number-input pin-3"
                              tabIndex={0}
                              value={three}
                              onChange={inputHandler}
                              required
                            />
                            <input
                              type="tel"
                              pattern="[0-9]"
                              name="four"
                              maxLength={1}
                              className="pin-number-input pin-4"
                              tabIndex={0}
                              value={four}
                              onChange={inputHandler}
                              required
                            />
                          </div>
                          <p className="pin-input-error"></p>
                        </>
                      )}
                    </>
                  )}
                  <div className="btn-bar">
                    <button
                      className="btn pin-submit-password-button btn-blue btn-small"
                      type="button"
                      onClick={!next ? checkAuth : submitPin}
                    >
                      {!next ? "다음" : "저장"}
                    </button>
                    <button
                      className="btn cancel-password-button btn-gray btn-small"
                      type="button"
                    >
                      취소
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LockBodyStyle>
      )}
      <Footer youraccount />
    </div>
  );
}
