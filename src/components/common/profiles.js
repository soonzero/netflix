import { store } from "index";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #141414;
  z-index: 0;
  text-align: center;
  line-height: 1.4;
  color: white;

  ul {
    padding: 0;
  }

  li {
    display: inline-block;
    vertical-align: top;
    position: relative;

    a {
      text-decoration: none;
      color: white;
      cursor: pointer;

      &:hover {
        .profile-name {
          color: #e5e5e5;
        }

        .profile-icon::after {
          border-color: #e5e5e5;
        }
      }
    }
  }

  .centered-div {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .list-profiles {
      max-width: 80%;
      background-color: #141414;

      .profile-gate-label {
        width: 100%;
        color: white;
        font-size: 3.5vw;
        font-weight: unset;
        margin: 0.67em 0;
      }

      .choose-profile {
        margin: 2em 0;
      }

      .avatar-wrapper {
        position: relative;
      }
    }
  }

  li.profile {
    width: 10vw;
    max-width: 200px;
    min-width: 84px;

    & > a:hover {
      .add-profile-icon {
        background-color: #e5e5e5;
        border-radius: 4px;
      }
    }

    .svg-icon-profile-lock {
      width: 20px;
      height: 20px;
      color: #666;
    }
  }

  li.profile:not(:last-child) {
    margin: 0 2vw 0 0;
  }

  .add-profile-icon {
    font-size: 6.25rem;
    color: grey;
    text-align: center;
    text-decoration: none;
    height: 10vw;
    width: 10vw;
    max-height: 200px;
    max-width: 200px;
    min-height: 84px;
    min-width: 84px;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: "\\e716";
    }
  }

  .profile-icon {
    height: 10vw;
    width: 10vw;
    max-height: 200px;
    max-width: 200px;
    min-height: 84px;
    min-width: 84px;
    position: relative;
    text-decoration: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #333;
    border-radius: 4px;
    border: none;
    opacity: ${(props) => (props.edit ? "0.5" : "1")};

    &::after {
      content: "";
      border-radius: 4px;
      border: 0.3em solid transparent;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      box-sizing: content-box;
    }
  }

  .profile-button {
    display: block;
    margin: 2em 0 1em 0;
    font-size: 1.2vw;
    border: 1px solid grey;
    color: grey;
    padding: 0.5em 1.5em;
    letter-spacing: initial;
    cursor: pointer;
    background-color: transparent;
    box-sizing: content-box;
    text-decoration: none;

    &:hover {
      color: white;
      border-color: white;
    }
  }

  .profile-button.preferred-action {
    background: white;
    color: black;
    border: 1px solid white;
    font-weight: 600;
  }

  .profile-button.preferred-action.preferred-active,
  .profile-button.preferred-action:focus,
  .profile-button.preferred-action:hover {
    background-color: #c00;
    border: 1px solid #c00;
    color: white;
  }

  .profile-name {
    line-height: 1.5;
    font-size: 1.5rem;
    min-height: 1.8em;
    color: grey;
    text-align: center;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0.6em 0;
  }

  .list-profiles {
    .svg-edit {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      .svg-icon-edit {
        width: 2.625rem;
        height: 2.625rem;
        max-width: 70px;
        max-height: 70px;
        border: 1px solid transparent;
        margin: 0 -1px;
      }
    }
  }

  .profile-actions-container {
    text-align: left;
    position: relative;

    h1 {
      font-size: 4vw;
      margin: 0;
      font-weight: 400;
    }

    h2 {
      font-size: 1.3vw;
      color: #666;
      font-weight: 400;
      margin: 0.83em 0;
    }

    .profile-button {
      display: inline-block;
      margin-right: 20px;
    }
  }

  .profile-entry {
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;

    input[type="checkbox"] {
      display: none;

      & + label {
        border: 1px solid #333;
        border-radius: 0;
        display: inline-block;
        position: relative;
        margin-right: 0.5em;
        font-size: 0.8vw;
        width: 2.5em;
        height: 2.5em;
      }
    }
  }

  .profile-metadata {
    display: flex;
    padding: 1.75em 0;

    img {
      transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .main-profile-avatar {
      white-space: nowrap;
      margin-right: 1.5vw;
      width: 8vw;
      min-width: 80px;
      max-width: 180px;

      img {
        border-radius: 4px;
        height: 8vw;
        width: 8vw;
        max-height: 180px;
        max-width: 180px;
        min-height: 80px;
        min-width: 80px;
      }
    }

    .profile-entry-inputs {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      vertical-align: middle;

      input[type="text"] {
        width: 18em;
        height: 2em;
        background: #666;
        border: 1px solid transparent;
        margin: 0 0.8em 0 0;
        padding: 0.2em 0.6em;
        color: white;
        font-size: 1.3vw;
        text-indent: 0.1vw;
        line-height: 1.5397536058;
        outline: none;
      }
    }

    .add-kids-option {
      display: flex;
      align-items: center;
      position: relative;
      margin: 5px 0;
    }

    .add-kids-marker {
      font-weight: 400;
      font-size: 1.3vw;
    }
  }

  .profile-add-parent {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .kids-profile-tooltip {
    position: absolute;
    left: -6em;
    bottom: 3em;
    width: 18em;
    font-size: 1vw;
    background: white;
    color: black;
    padding: 0.8em;
    text-align: center;
    z-index: -1;
    transition: opacity 0.3s linear 50ms, z-index 1ms linear 350ms;
    opacity: 0;
  }

  .kids-profile-tooltip.show-tooltip {
    opacity: 1;
    z-index: 1;
    transition: opacity 0.3s linear 0.4s, z-index 1ms linear;
    box-sizing: content-box;

    &::after {
      top: 100%;
      left: 50%;
      border: solid transparent;
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-top-color: white;
      border-width: 0.7em;
      margin-left: -0.7em;
    }
  }
`;

export default function Profiles(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profiles, setProfiles] = useState();
  const [display, setDisplay] = useState(true);
  const [addProfile, setAddProfile] = useState(false);
  const [name, setName] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const selectProfile = (event) => {
    if (!props.manage) {
      sessionStorage.setItem(
        "selectedProfile",
        event.currentTarget.getAttribute("profileidx")
      );
      dispatch({ type: "SELECT" });
      setDisplay(false);
    } else {
      console.log("selected");
    }
  };

  const onChangeHandler = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    setName(name);
  }, [name]);

  const addNewProfile = async () => {
    const token = JSON.parse(sessionStorage.getItem("user")).jwt;
    const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
    if (name.length > 0) {
      try {
        const newProfile = await axios({
          method: "POST",
          url: "/profile/manage",
          baseURL: "https://rtflix.site/",
          headers: {
            "X-ACCESS-TOKEN": token,
          },
          data: {
            userIdx: userIdx,
            profileName: name,
          },
        });
        if (newProfile.data.code == 1000) {
          // sessionStorage.setItem(
          //   "profile",
          //   JSON.stringify(newProfile.data.result)
          // );
          setAddProfile(false);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("프로필 이름을 입력하세요.");
    }
  };

  const getAllProfiles = async () => {
    const token = JSON.parse(sessionStorage.getItem("user")).jwt;
    const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
    try {
      const getProfiles = await axios({
        method: "GET",
        url: `/profile?userIdx=${userIdx}`,
        baseURL: "https://rtflix.site/",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      setProfiles(getProfiles.data.result);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllProfiles();
  }, [addProfile]);

  const reselectProfile = () => {
    sessionStorage.removeItem("selectedProfile");
    navigate(`/browse`);
  };

  const goToManageProfiles = () => {
    navigate(`/ManageProfiles`);
  };

  return (
    <>
      {display && (
        <MainStyle edit>
          {!addProfile && (
            <>
              {getAllProfiles != null && (
                <div className="centered-div list-profiles-container">
                  <div className="list-profiles">
                    <h1 className="profile-gate-label">
                      {props.manage
                        ? "프로필 관리"
                        : "넷플릭스를 시청할 프로필을 선택하세요."}
                    </h1>
                    <ul className="choose-profile">
                      {!isLoading &&
                        profiles.map((p) => {
                          return (
                            <li
                              className="profile"
                              profileidx={p.profileIdx}
                              onClick={selectProfile}
                            >
                              <a className="profile-link">
                                <div className="avatar-wrapper">
                                  <div
                                    className="profile-icon"
                                    style={{
                                      backgroundImage: `url(${p.profileImageUrl})`,
                                    }}
                                  ></div>
                                  {props.manage && (
                                    <div className="svg-edit">
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg-icon svg-icon-edit"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z"
                                          fill="currentColor"
                                        ></path>
                                      </svg>
                                    </div>
                                  )}
                                </div>
                                <span className="profile-name">
                                  {p.profileName}
                                </span>
                              </a>
                              {p.lockPin != "N" && (
                                <>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="svg-icon svg-icon-profile-lock"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V9H19C20.1046 9 21 9.89543 21 11V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V11C3 9.89543 3.89543 9 5 9H7V8ZM15 8V9H9V8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8ZM5 11V19H19V11H5ZM11 13V17H13V13H11Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </>
                              )}
                            </li>
                          );
                        })}
                      {profiles && profiles.length < 5 && (
                        <li
                          className="profile"
                          onClick={() => setAddProfile(true)}
                        >
                          <a>
                            <div className="add-profile-icon icon-tvui-add"></div>
                            <span className="profile-name">프로필 추가</span>
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <span>
                    <a
                      className={`profile-button ${
                        props.manage && "preferred-action"
                      }`}
                      onClick={
                        props.manage ? reselectProfile : goToManageProfiles
                      }
                    >
                      {props.manage ? "완료" : "프로필 관리"}
                    </a>
                  </span>
                </div>
              )}
            </>
          )}
          {addProfile && (
            <div className="centered-div">
              <div className="profile-actions-container">
                <h1>프로필 추가</h1>
                <h2>
                  넷플릭스를 시청할 다른 사용자를 등록하시려면 프로필을
                  추가하세요.
                </h2>
                <div className="profile-metadata profile-entry">
                  <div className="main-profile-avatar">
                    <img src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41" />
                  </div>
                  <div className="profile-add-parent">
                    <div className="profile-entry-inputs">
                      <input
                        type="text"
                        id="add-profile-name"
                        placeholder="이름"
                        value={name}
                        onChange={onChangeHandler}
                      />
                      <div className="option-wrapper">
                        <div className="add-kids-option">
                          <input type="checkbox" id="add-kids-profile" />
                          <label htmlFor="add-kids-profile" />
                          <span className="add-kids-marker">어린이인가요?</span>
                          <span className="kids-profile-tooltip">
                            이 옵션을 선택하시면 이 프로필에 만 12세 이하 등급의
                            시리즈와 영화만 표시됩니다.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span
                  className={`profile-button preferred-action ${"preferred-active"}`}
                  onClick={addNewProfile}
                >
                  <span>다음</span>
                </span>
                <span
                  className="profile-button"
                  onClick={() => setAddProfile(false)}
                >
                  <span>취소</span>
                </span>
              </div>
            </div>
          )}
        </MainStyle>
      )}
    </>
  );
}
