import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ProfileStyle } from "./styled";
import { ReactComponent as DismissSVG } from "images/dismiss.svg";
import { ReactComponent as EditSVG } from "images/pencil.svg";
import { ReactComponent as LockSVG } from "images/lock.svg";
import { ReactComponent as CheckSVG } from "images/check.svg";

export default function SelectProfiles(props) {
  // Module
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Local States
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
  const [oldProfileName, setOldProfileName] = useState();
  const [newProfileName, setNewProfileName] = useState();
  const [isLocked, setIsLocked] = useState();

  // Life Cycle
  useEffect(() => {
    getAllProfiles();
  }, [addProfile, change]);

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

  useEffect(() => {
    setName(name);
  }, [name]);

  useEffect(() => {
    setNewProfileName(newProfileName);
  }, [newProfileName]);

  useEffect(() => {
    setOldProfileName(oldProfileName);
  }, [oldProfileName]);

  // Functions
  const nameInputHandler = (event) => {
    setNewProfileName(event.target.value);
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
      setOldProfileName(event.currentTarget.getAttribute("name"));
      try {
        const lockInfo = await axios({
          method: "GET",
          url: `/profile/info?userIdx=${userIdx}&profileIdx=${profile}`,
          baseURL: "https://rtflix.site",
          headers: {
            "X-ACCESS-TOKEN": token,
          },
        });
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
      alert("????????? ????????? ???????????????.");
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
        console.log("??????");
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
          alert("??????????????? ???????????????.");
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

  const reselectProfile = () => {
    sessionStorage.removeItem("selectedProfile");
    dispatch({ type: "UNSELECT_PROFILE" });
    navigate(`/browse`);
  };

  const goToManageProfiles = () => {
    navigate(`/ManageProfiles`);
  };

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

  return (
    <>
      {display && (
        <ProfileStyle edit>
          {!addProfile && (
            <>
              {unlock ? (
                <div className="centered-div profile-pin-prompt">
                  <div className="profile-pin-dismiss">
                    <Link to="/">
                      <DismissSVG />
                    </Link>
                  </div>
                  <div className="profile-pin-prompt-status">
                    ????????? ?????? ????????? ?????? ?????? ????????????.
                  </div>
                  <h1 className="profile-pin-prompt-label">
                    ??? ???????????? ??????????????? PIN ????????? ???????????????.
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
                      PIN ????????? 4???????????? ?????????.
                    </p>
                  </div>
                  <div className="profile-pin-prompt-forgot">
                    <a
                      className="nf-icon-button nf-flat-button nf-flat-button-type-borderless nf-flat-button-uppercase no-icon"
                      tabIndex={0}
                    >
                      <span className="nf-flat-button-text">
                        PIN ????????? ????????????????
                      </span>
                    </a>
                  </div>
                </div>
              ) : change ? (
                <div className="centered-div">
                  <div className="profile-actions-container">
                    <h1>????????? ??????</h1>
                    <div className="profile-metadata profile-entry">
                      <div className="main-profile-avatar">
                        <div className="avatar-box">
                          <img src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71" />
                          <button className="avatar-edit-icon">
                            <EditSVG />
                          </button>
                        </div>
                      </div>
                      <div className="profile-edit-parent">
                        <div className="profile-edit-inputs">
                          <label
                            htmlFor="profile-name-entry"
                            className="visually-hidden"
                          >
                            ????????? ??????
                          </label>
                          <input
                            type="text"
                            className="profile-name-entry"
                            id="profile-name-entry"
                            placeholder="??????"
                            value={newProfileName}
                            onChange={nameInputHandler}
                            defaultValue={oldProfileName}
                          />
                        </div>
                        <div className="profile-entry-dropdowns">
                          <div className="profile-dropdown">
                            <h2 className="profile-dropdown-label">??????</h2>
                            <div className="nf-dropdown theme-lakira">
                              <div className="label">
                                ?????????
                                <span className="arrow"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {!isLocked ? null : (
                          <div className="profile-entry-lock">
                            <h2 className="profile-entry-header">
                              <LockSVG />
                              <span>
                                ????????? ?????? ?????????
                                <strong> ?????? </strong>
                                ????????????.
                              </span>
                            </h2>
                          </div>
                        )}
                        <div className="profile-entry-restrictions">
                          <h2 className="profile-entry-header">
                            ???????????? ??????:
                          </h2>
                          <div>
                            <ul>
                              <li className="profile-maturity-label">
                                ?????? ????????????
                              </li>
                            </ul>
                            <p>
                              ??? ?????????????????? <b>?????? ????????????</b>??? ????????????
                              ???????????????.
                            </p>
                          </div>
                          <div>
                            <a className="profile-button">??????</a>
                          </div>
                        </div>
                        <div className="profile-entry-autoplay">
                          <h2 className="profile-entry-header">
                            ?????? ?????? ??????
                          </h2>
                          <div className="autoplay-option">
                            <input
                              type="checkbox"
                              id="next-episode-profile"
                              checked
                            />
                            <label htmlFor="next-episode-profile">
                              <CheckSVG />
                            </label>
                            <span className="next-episode-marker">
                              ?????? ?????????????????? ???????????? ?????? ??? ?????? ??????
                            </span>
                          </div>
                          <div className="autoplay-option">
                            <input type="checkbox" id="videomerch-profile" />
                            <label htmlFor="videomerch-profile"></label>
                            <span className="videomerch-marker">
                              ?????? ?????????????????? ?????? ??? ???????????? ?????? ??????
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
                      ??????
                    </button>
                    <button
                      className="profile-button"
                      type="button"
                      onClick={() => setChange(false)}
                    >
                      ??????
                    </button>
                    <button className="profile-button">????????? ??????</button>
                  </div>
                </div>
              ) : (
                <div className="centered-div list-profiles-container">
                  <div className="list-profiles">
                    <h1 className="profile-gate-label">
                      {props.manage
                        ? "????????? ??????"
                        : "??????????????? ????????? ???????????? ???????????????."}
                    </h1>
                    <ul className="choose-profile">
                      {!isLoading &&
                        profiles.map((p) => {
                          return (
                            <li
                              key={p.profileIdx}
                              name={p.profileName}
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
                                      <EditSVG />
                                    </div>
                                  )}
                                </div>
                                <span className="profile-name">
                                  {p.profileName}
                                </span>
                              </a>
                              {p.lockPin != "N" && <LockSVG />}
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
                            <span className="profile-name">????????? ??????</span>
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <span>
                    <div
                      className={`profile-button ${
                        props.manage && "preferred-action"
                      }`}
                      onClick={
                        props.manage ? reselectProfile : goToManageProfiles
                      }
                    >
                      {props.manage ? "??????" : "????????? ??????"}
                    </div>
                  </span>
                </div>
              )}
            </>
          )}
          {addProfile && (
            <div className="centered-div">
              <div className="profile-actions-container">
                <h1>????????? ??????</h1>
                <h2>
                  ??????????????? ????????? ?????? ???????????? ?????????????????? ????????????
                  ???????????????.
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
                        placeholder="??????"
                        value={name}
                        onChange={onChangeHandler}
                      />
                      <div className="option-wrapper">
                        <div className="add-kids-option">
                          <input type="checkbox" id="add-kids-profile" />
                          <label htmlFor="add-kids-profile" />
                          <span className="add-kids-marker">???????????????????</span>
                          <span className="kids-profile-tooltip">
                            ??? ????????? ??????????????? ??? ???????????? ??? 12??? ?????? ?????????
                            ???????????? ????????? ???????????????.
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
                  <span>??????</span>
                </span>
                <span
                  className="profile-button"
                  onClick={() => setAddProfile(false)}
                >
                  <span>??????</span>
                </span>
              </div>
            </div>
          )}
        </ProfileStyle>
      )}
    </>
  );
}
