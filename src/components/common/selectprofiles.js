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

  b {
    font-weight: 600;
  }

  ul {
    padding: 0;
    margin-top: 25.6px;
    margin-bottom: 25.6px;
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
    box-pack: center;

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

  .profile-pin-prompt {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    transition: opacity 300ms ease-out;

    .pin-input-container {
      border: none;
      box-flex: 0;
      flex: 0 1 auto;
      display: flex;
      color: #000;
      margin: 0.5em;
      direction: ltr;
    }

    .pin-number-input {
      width: 3.5em;
      height: 3.5em;
      font-size: 49px;
      padding: 0.2em;
      margin: 0.2em;
      text-align: center;
      border: 0.05em solid white;
      box-sizing: border-box;
      box-shadow: none;
      background: 0 0;
      color: white;
      transition: transform 0.1s ease-out, -webkit-transform 0.1s ease-out,
        -moz-transform 0.1s ease-out, -o-transform 0.1s ease-out;
      line-height: 3;

      &:focus {
        transform: scale(1.1);
      }
    }
  }

  .pin-input-error {
    min-height: 30px;
    color: #b9090b;
    font-size: 1.3vw;
    margin: 1em 0;
  }

  .profile-pin-prompt-forgot {
    position: absolute;
    bottom: 5vw;
    font-size: 1.3vw;

    .nf-flat-button {
      color: #ccc;
    }
  }

  .nf-flat-button {
    padding: 0.57em 1.35em;

    .nf-flat-button-text {
      vertical-align: middle;
      padding: 0;
      margin: 0;
      top: auto;
      white-space: nowrap;
    }
  }

  .nf-icon-button {
    display: inline-block;
    position: relative;
  }

  .nf-flat-button-type-borderless {
    font-size: inherit;
    margin: 0;
    background: 0 0;
    box-shadow: none;
    text-transform: none;
    font-weight: 400;
    border: 0.1em solid transparent;
  }

  .profile-pin-dismiss {
    position: absolute;
    top: 100px;
    right: 30px;

    a {
      display: block;
    }

    svg {
      width: 2vw;
      height: 2vw;
      color: #ccc;
    }
  }

  .profile-pin-prompt-status {
    color: #aaa;
    font-size: 1.3vw;
  }

  .profile-pin-prompt-label {
    width: 100%;
    color: white;
    font-size: 2.5vw;
    opacity: 1;
    font-weight: 700;
    transition: opacity 400ms ease-out;
    margin: 0.5em 0 1em 0;
  }

  .profile-pin-prompt-pad-wrapper {
    display: flex;
    box-align: center;
    align-items: center;
    box-orient: vertical;
    box-direction: normal;
    flex-direction: column;
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

    h2.profile-entry-header {
      margin: 0 0 7px 0;
      color: #ccc;

      svg {
        vertical-align: middle;
      }
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

  .avatar-box {
    position: relative;

    .avatar-edit-icon {
      cursor: pointer;
      position: absolute;
      bottom: 7%;
      left: 7%;
      border: none;
      background-color: transparent;
      height: 35px;
      padding: 1px 6px;

      svg {
        width: 28px;
        height: 28px;
        max-width: 45px;
        max-height: 45px;
        background-color: rgba(0, 0, 0, 0.7);
        filter: drop-shadow(1px 1px 2px #000);
        border-radius: 5rem;
        color: white;
      }
    }
  }

  .profile-edit-inputs {
    position: relative;
    display: flex;
    box-orient: horizontal;
    box-direction: normal;
    flex-direction: row;
    box-align: center;
    align-items: center;
  }

  .profile-entry {
    label {
      display: inline;
    }

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
    }
  }

  .profile-name-entry:focus {
    outline: none;
  }

  .profile-entry-dropdowns {
    display: flex;
    box-orient: vertical;
    box-direction: normal;
    flex-direction: column;

    .profile-dropdown {
      margin-top: 1rem;

      .profile-dropdown-label {
        font-size: 1.3vw;
        margin-bottom: 7px;
        color: #ccc;
      }

      .nf-dropdown.theme-lakira {
        min-width: 18rem;
      }
    }
  }

  .nf-dropdown.theme-lakira {
    position: relative;
    text-align: left;

    .label {
      height: 2.5rem;
      padding-left: 10px;
      line-height: 2.5rem;
      letter-spacing: 1px;
      font-weight: 600;
      border: 1px solid rgba(255, 255, 255, 0.9);
      display: inline-block;
      color: white;
      background-color: black;
      appearance: none;
      border-radius: 0;
      position: relative;
      padding-right: 50px;

      .arrow {
        border-color: #fff transparent transparent;
        border-style: solid;
        border-width: 5px 5px 0;
        height: 0;
        position: absolute;
        right: 10px;
        top: 44%;
        width: 0;
      }
    }
  }

  .profile-entry-lock {
    margin: 1.5vw 0 0 0;
    border-top: 1px solid #333;
    padding: 1.5vw 0 0 0;

    svg {
      width: 1.3vw;
      height: 1.3vw;
      margin-right: 1vw;
    }
  }

  .profile-entry-restrictions {
    margin: 1.5vw 0 0 0;
    border-top: 1px solid #333;
    padding: 1.5vw 0 0 0;
    font-size: 1vw;

    .profile-maturity-label {
      border-radius: 2px;
      background-color: #333;
      padding: 7px 10px;
      font-weight: 600;
      margin-right: 5px;
    }

    .profile-button {
      font-size: 1vw;
      margin: 1em 0 1em 0;
    }
  }

  .profile-entry-autoplay {
    margin: 1.5vw 0 0 0;
    border-top: 1px solid #333;
    padding: 1.5vw 0 0 0;

    .autoplay-option {
      display: flex;
      box-align: center;
      align-items: center;
      margin: 5px 0;
      font-size: 0.9vw;
    }
  }

  .profile-entry {
    input[type="checkbox"] {
      display: none;

      &:checked + label {
        border: 1px solid #333;
        color: #99a1a7;
      }
    }
  }

  .svg-icon {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .visually-hidden {
    clip: rect(1px, 1px, 1px, 1px) !important;
    height: 1px !important;
    overflow: hidden !important;
    position: absolute !important;
    white-space: nowrap !important;
    width: 1px !important;
  }
`;

export default function SelectProfiles(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profiles, setProfiles] = useState();
  const [change, setChange] = useState(false);
  const [display, setDisplay] = useState(true);
  const [addProfile, setAddProfile] = useState(false);
  const [name, setName] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [unlock, setUnlock] = useState(false);
  const [one, setOne] = useState();
  const [two, setTwo] = useState();
  const [three, setThree] = useState();
  const [four, setFour] = useState();
  const [newProfileName, setNewProfileName] = useState();
  const [isLocked, setIsLocked] = useState();

  const nameInputHandler = (event) => {
    setNewProfileName(event.target.value);
  };

  useEffect(() => {
    setNewProfileName(newProfileName);
  }, [newProfileName]);

  const selectProfile = async (event) => {
    const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
    const token = JSON.parse(sessionStorage.getItem("user")).jwt;
    const profile = event.currentTarget.getAttribute("profileidx");
    const pinNumber = event.currentTarget.getAttribute("unlock");
    if (!props.manage) {
      if (pinNumber != "N") {
        sessionStorage.setItem("unlock", profile);
        setUnlock(true);
      } else {
        sessionStorage.setItem("selectedProfile", profile);
        setDisplay(false);
        props.setProfile(profile);
      }
    } else {
      sessionStorage.setItem("change", profile);
      try {
        const lockInfo = await axios({
          method: "GET",
          url: `/profile/info?userIdx=${userIdx}&profileIdx=${profile}`,
          baseURL: "https://rtflix.site",
          headers: {
            "X-ACCESS-TOKEN": token,
          },
        });
        console.log();
        if (lockInfo.data.result.lockPin != "N") {
          setIsLocked(true);
        } else {
          setIsLocked(false);
        }
      } catch (e) {
        console.log(e);
      }
      setChange(true);
    }
  };

  const checkPIN = async () => {
    const profile = sessionStorage.getItem("unlock");
    const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
    const token = JSON.parse(sessionStorage.getItem("user")).jwt;
    if (
      one.length == 1 &&
      two.length == 1 &&
      three.length == 1 &&
      four.length == 1
    ) {
      try {
        console.log("시작");
        const unlock = await axios({
          method: "POST",
          url: "/profile",
          baseURL: "https://rtflix.site",
          headers: {
            "X-ACCESS-TOKEN": token,
          },
          data: {
            userIdx: userIdx,
            profileIdx: profile,
            profileLockPin: one + two + three + four,
          },
        });
        if (unlock.data.code == "3019") {
          alert("비밀번호가 틀렸습니다.");
          setOne();
          setTwo();
          setThree();
          setFour();
        } else if (unlock.data.code == 1000) {
          sessionStorage.setItem("selectedProfile", profile);
          setUnlock(false);
          setDisplay(false);
          props.setProfile(profile);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      return;
    }
  };

  const onChangeHandler = (event) => {
    setName(event.target.value);
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

  const reselectProfile = () => {
    sessionStorage.removeItem("selectedProfile");
    dispatch({ type: "UNSELECT_PROFILE" });
    navigate(`/browse`);
  };

  const goToManageProfiles = () => {
    navigate(`/ManageProfiles`);
  };

  useEffect(() => {
    getAllProfiles();
  }, [change]);

  const changeProfileName = async () => {
    const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
    const token = JSON.parse(sessionStorage.getItem("user")).jwt;
    if (newProfileName.length > 0) {
      try {
        const change = await axios({
          method: "PATCH",
          url: "profile/info/name",
          baseURL: "https://rtflix.site",
          headers: {
            "X-ACCESS-TOKEN": token,
          },
          data: {
            userIdx: userIdx,
            profileIdx: sessionStorage.getItem("change"),
            profileName: newProfileName,
          },
        });
        if ((change.data.code = 1000)) {
          setChange(false);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    setName(name);
  }, [name]);

  useEffect(() => {
    getAllProfiles();
  }, [addProfile]);

  useEffect(() => {
    if (unlock) {
      setOne(one);
      setTwo(two);
      setThree(three);
      setFour(four);
      checkPIN();
    } else {
      return;
    }
  }, [one, two, three, four]);

  return (
    <>
      {display && (
        <MainStyle edit>
          {!addProfile && (
            <>
              {unlock ? (
                <div className="centered-div profile-pin-prompt">
                  <div className="profile-pin-dismiss">
                    <Link to="/">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-icon svg-icon-close"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="profile-pin-prompt-status">
                    프로필 잠금 기능이 현재 켜져 있습니다.
                  </div>
                  <h1 className="profile-pin-prompt-label">
                    이 프로필을 이용하려면 PIN 번호를 입력하세요.
                  </h1>
                  <div className="profile-pin-prompt-pad-wrapper">
                    <div className="pin-input-container">
                      <input
                        type="tel"
                        pattern="[0-9]"
                        name="one"
                        maxLength={1}
                        className="pin-number-input"
                        tabIndex={0}
                        value={one}
                        onChange={inputHandler}
                      />
                      <input
                        type="tel"
                        pattern="[0-9]"
                        name="two"
                        maxLength={1}
                        className="pin-number-input"
                        tabIndex={0}
                        value={two}
                        onChange={inputHandler}
                      />
                      <input
                        type="tel"
                        pattern="[0-9]"
                        name="three"
                        maxLength={1}
                        className="pin-number-input"
                        tabIndex={0}
                        value={three}
                        onChange={inputHandler}
                      />
                      <input
                        type="tel"
                        pattern="[0-9]"
                        name="four"
                        maxLength={1}
                        className="pin-number-input"
                        tabIndex={0}
                        value={four}
                        onChange={inputHandler}
                      />
                    </div>
                    <p className="pin-input-error">
                      PIN 번호는 4자리여야 합니다.
                    </p>
                  </div>
                  <div className="profile-pin-prompt-forgot">
                    <a
                      className="nf-icon-button nf-flat-button nf-flat-button-type-borderless nf-flat-button-uppercase no-icon"
                      tabIndex={0}
                    >
                      <span className="nf-flat-button-text">
                        PIN 번호를 잊으셨나요?
                      </span>
                    </a>
                  </div>
                </div>
              ) : change ? (
                <div className="centered-div">
                  <div className="profile-actions-container">
                    <h1>프로필 변경</h1>
                    <div className="profile-metadata profile-entry">
                      <div className="main-profile-avatar">
                        <div className="avatar-box">
                          <img src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71" />
                          <button className="avatar-edit-icon">
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
                          </button>
                        </div>
                      </div>
                      <div className="profile-edit-parent">
                        <div className="profile-edit-inputs">
                          <label
                            htmlFor="profile-name-entry"
                            className="visually-hidden"
                          >
                            프로필 이름
                          </label>
                          <input
                            type="text"
                            className="profile-name-entry"
                            id="profile-name-entry"
                            placeholder="이름"
                            value={newProfileName}
                            onChange={nameInputHandler}
                          />
                        </div>
                        <div className="profile-entry-dropdowns">
                          <div className="profile-dropdown">
                            <h2 className="profile-dropdown-label">언어</h2>
                            <div className="nf-dropdown theme-lakira">
                              <div className="label">
                                한국어
                                <span className="arrow"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {!isLocked ? null : (
                          <div className="profile-entry-lock">
                            <h2 className="profile-entry-header">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg-icon svg-icon-profile-lock"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V9H19C20.1046 9 21 9.89543 21 11V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V11C3 9.89543 3.89543 9 5 9H7V8ZM15 8V9H9V8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8ZM5 11V19H19V11H5ZM11 13V17H13V13H11Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              <span>
                                프로필 잠금 기능이
                                <strong> 켜져 </strong>
                                있습니다.
                              </span>
                            </h2>
                          </div>
                        )}
                        <div className="profile-entry-restrictions">
                          <h2 className="profile-entry-header">
                            관람등급 설정:
                          </h2>
                          <div>
                            <ul>
                              <li className="profile-maturity-label">
                                모든 관람등급
                              </li>
                            </ul>
                            <p>
                              이 프로필에서는 <b>모든 관람등급</b>의 콘텐츠가
                              표시됩니다.
                            </p>
                          </div>
                          <div>
                            <a className="profile-button">수정</a>
                          </div>
                        </div>
                        <div className="profile-entry-autoplay">
                          <h2 className="profile-entry-header">
                            자동 재생 설정
                          </h2>
                          <div className="autoplay-option">
                            <input
                              type="checkbox"
                              id="next-episode-profile"
                              checked
                            />
                            <label htmlFor="next-episode-profile">
                              {/* <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg-icon svg-icon-check-mark"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                  fill="currentColor"
                                ></path>
                              </svg> */}
                            </label>
                            <span className="next-episode-marker">
                              모든 디바이스에서 시리즈의 다음 화 자동 재생
                            </span>
                          </div>
                          <div className="autoplay-option">
                            <input type="checkbox" id="videomerch-profile" />
                            <label htmlFor="videomerch-profile"></label>
                            <span className="videomerch-marker">
                              모든 디바이스에서 탐색 중 미리보기 자동 재생
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="profile-button preferred-action"
                      type="button"
                      onClick={changeProfileName}
                    >
                      저장
                    </button>
                    <button className="profile-button">취소</button>
                    <button className="profile-button">프로필 삭제</button>
                  </div>
                </div>
              ) : (
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
                              key={p.profileIdx}
                              unlock={p.lockPin}
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
                                      fillRule="evenodd"
                                      clipRule="evenodd"
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
                    <img src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71" />
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
