import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { AccountHeaderStyle } from "./styled";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "images/nflogo.svg";

export default function AccountHeader(props) {
  const [menu, setMenu] = useState(false);
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const profileIdx = sessionStorage.getItem("selectedProfile");
  const profilesInfo = JSON.parse(sessionStorage.getItem("profiles"));
  const myImage = profilesInfo.filter((p) => p.profileIdx == profileIdx);
  const exceptMe = profilesInfo.filter((p) => p.profileIdx != profileIdx);

  const getUserInfo = async () => {
    try {
      const info = await axios({
        method: "GET",
        url: `/users/account?userIdx=${userIdx}`,
        headers: {
          "X-ACCESS-TOKEN": token,
        },
        baseURL: "https://rtflix.site",
      });
      if (info.data.code == 1000) {
        props.setInfo(info.data.result);
        props.getMembershipInfo(info.data.result.membershipIdx);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (props.isLoading) {
      getUserInfo();
    }
  }, []);

  return (
    <AccountHeaderStyle>
      <div className="member-header">
        <div className="header-container">
          <div className="header">
            <Link to="/browse" className="svg-nfLogo logo">
              <Logo />
            </Link>
          </div>
          <div className="secondary-navigation last">
            <div className="account-tools">
              <div id="profile-selector">
                <div
                  className="current-profile"
                  onMouseOver={() => setMenu((prev) => !prev)}
                  onClick={() => setMenu((prev) => !prev)}
                >
                  <img className="avatar" src={myImage[0].profileImageUrl} />
                  <span className="profile-arrow"></span>
                  <span
                    className={menu ? "trigger trigger-active" : "trigger"}
                  ></span>
                </div>
                <div
                  className={
                    menu
                      ? "profiles-container profiles-container-active"
                      : "profiles-container"
                  }
                >
                  <div className="profile-selector">
                    <ul className="profiles structural">
                      {exceptMe.map((p) => {
                        return (
                          <li key={p.profileIdx} className="profile">
                            <a>
                              <img src={p.profileImageUrl} />
                              <div className="name">{p.profileName}</div>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <ul className="profile-manage structural">
                    <li className="manage">
                      <Link to="/ManageProfiles">프로필 관리</Link>
                    </li>
                  </ul>
                  <ul className="links structural">
                    <li>
                      <Link to="/YourAccount">계정</Link>
                    </li>
                    <li>
                      <a>고객 센터</a>
                    </li>
                    <li className="sign-out-link">
                      <a>넷플릭스에서 로그아웃</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccountHeaderStyle>
  );
}
