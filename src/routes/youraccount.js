import axios from "axios";
import Footer from "components/common/footer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.div`
  height: 90px;
  position: relative;
  color: #333;
  font-size: 1rem;

  .member-header {
    min-width: 190px;
    background-color: rgba(0, 0, 0, 0.97);
    padding: 0 45px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;

    .header {
      min-width: 1020px;
      height: 70px;
      padding-left: 135px;
      max-width: 1130px;

      .logo {
        position: absolute;
        left: 45px;
        top: 0;
        text-decoration: none;
        padding: 18px 0;
        font-size: 2rem;
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        width: 118px;

        .svg-icon-netflix-logo {
          fill: #e50914;
        }
      }
    }

    .last {
      width: auto !important;
    }

    .secondary-navigation {
      position: absolute;
      right: 0;
      top: 0;
      line-height: 70px;
    }

    .account-tools {
      float: right;
      height: 70px;

      .current-profile {
        padding: 0 45px 0 0;

        .profile-arrow {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 5px 5px 0 5px;
          border-color: white transparent transparent transparent;
          margin-left: 6px;
          display: inline-block;
          vertical-align: middle;
          font-weight: 700;
        }
      }

      .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    #profile-selector {
      height: 70px;
      cursor: pointer;
      font-size: 0.75rem;
      position: relative;
      outline: 0;

      .current-profile {
        .avatar {
          margin: 5px;
          width: 32px;
          display: inline-block;
          vertical-align: middle;
          border-radius: 4px;
        }
      }

      .trigger {
        visibility: hidden;
        opacity: 0;
        bottom: 0;
        top: inherit;
        left: 11px;
        width: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #e5e5e5;
        position: absolute;
        margin-top: -3px;
        right: 15px;
        transition: opacity 200ms;
      }

      .trigger-active {
        visibility: visible;
        opacity: 1;
      }

      .profiles-container {
        visibility: hidden;
        position: absolute;
        width: 156px;
        left: -56px;
        opacity: 0;
        transition: opacity 200ms;
        line-height: normal;
      }

      .profiles-container-active {
        visibility: visible;
        opacity: 1;
      }

      .profiles {
        overflow: hidden;
        height: auto;
        background-color: rgba(0, 0, 0, 0.97);
        border-top: 2px solid #e5e5e5;
        position: relative;
      }

      .profile {
        overflow: hidden;
        padding: 10px 5px 0 0;
        display: flex;
        align-items: center;

        a {
          flex-grow: 1;
        }

        img {
          float: left;
          margin-right: 10px;
          width: 32px;
          border-radius: 4px;
        }
      }

      .profile-manage {
        background-color: rgba(0, 0, 0, 0.97);
      }

      .manage {
        margin-bottom: 0;
        padding: 10px 5px 10px 0;
      }

      .links {
        overflow: hidden;
        border-top: 1px solid #666;
        padding: 10px 0;
        padding-bottom: 0;
        background-color: rgba(0, 0, 0, 0.97);

        a {
          padding: 0 10px;
        }

        .sign-out-link {
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.25);
          margin-bottom: 0;
          padding: 5px 0;
        }
      }

      a {
        text-decoration: none;
        color: white;
        padding: 0 10px;
        line-height: 32px;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    ul.structural {
      padding: 0;
      margin: 0;

      & > li {
        list-style: none;
        margin-left: 0;
      }
    }

    ul {
      & > li {
        margin-bottom: 5px;
      }
    }
  }
`;

const BodyStyle = styled.div`
  margin: 20px 30px 0;
  padding: 0;
  color: #333;
  font-size: 1rem;
  direction: ltr;
  line-height: 1.328125;

  a {
    text-decoration: none;
    color: #0080ff;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    &.profile-link:hover {
      text-decoration: none;
    }
  }

  ul {
    margin: 1rem 0;

    ul {
      margin: 0;
    }
  }

  .responsive-account-container {
    display: block;
    min-width: 300px;
    min-height: 400px;
    position: relative;
    margin: 0 auto;
    overflow-wrap: anywhere;
  }

  .responsive-account-container {
    width: 95%;
    max-width: 1024px;
    font-size: 1em;
  }

  .account-header-inline {
    vertical-align: middle;
    display: inline-block;
    font-size: 2.15rem;
    margin: 0 0 0.55em;
    font-weight: 400;
    line-height: 1.3226744186;
  }

  .account-section-membersince {
    display: inline-flex;
    align-items: center;
    color: #555;
    font-size: 0.8rem;
    font-weight: 800;
    margin-left: 20px;
    padding: 5px 14px 5px 0;
    text-align: center;
  }

  .account-section-membersince {
    display: inline-flex;
    align-items: center;
    color: #555;
    font-size: 0.8rem;
    font-weight: 800;
    margin-left: 20px;
    padding: 5px 14px 5px 0;
    text-align: center;
  }

  .account-section-membersince-svg {
    background: url(https://assets.nflxext.com/ffe/siteui/account/svg/membersince.svg)
      no-repeat 0 0;
    height: 26px;
    width: 26px;
    margin-right: 5px;
    padding-right: 26px;
  }

  .responsive-account-content {
    font-size: 1em;
  }

  .membership-section-wrapper.membership-section-with-button {
    padding-bottom: 10px;
  }

  .account-section {
    margin-bottom: 5px;
    background-color: white;
    border: 1px solid #999;
    position: relative;
    border-top: 1px solid #999;
    border-right: none;
    border-bottom: none;
    border-left: none;
    padding: 0;
    background-color: inherit;
    min-height: 4.5em;
  }

  .account-section-header {
    width: 270px;
    position: absolute;
    left: 0;
    padding-right: 10px;
    z-index: 2;
  }

  .account-section-heading {
    font-size: 1.125em;
    color: #757575;
    font-weight: 400;
    padding: 0;
    margin-top: 15px;
    margin-bottom: 20px;
    /* height: 81px; */
  }

  .btn {
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    font-weight: 400;
    letter-spacing: 0.1px;
    border-radius: 2px;
    user-select: none;
    text-align: center;
    border: 0;
  }

  .btn-gray,
  .btn-plain {
    color: black;
    background-color: #e6e6e6;
    background-image: linear-gradient(to bottom, #e6e6e6, #ddd);
    box-shadow: 0 1px 0 rgb(0 0 0 / 20%);
  }

  .btn.btn-small {
    font-size: 0.8125rem;
    padding: 12px 2em;
    min-width: 98px;
    min-height: 37px;
    padding-left: 1em;
    padding-right: 1em;
    line-height: 1em;
  }

  .btn.account-cancel-button,
  .btn.account-pause-button {
    position: relative;
    bottom: 10px;
    left: 0;
    width: 200px;
    max-width: 200px;
    display: block;
    margin: 20px 10px 10px 0;
    text-transform: none;
  }

  .account-section-content {
    margin-top: 15px;
    padding-left: 270px;
  }

  .account-subsection {
    position: relative;

    &::after {
      content: " ";
      display: block;
      width: 0;
      height: 0;
      overflow: hidden;
      clear: both;
    }

    & ~ .account-subsection {
      border-top: 1px solid #999;
      padding-top: 15px;

      .u-ta-right-desktop {
        text-align: right;
      }
    }

    & ~ .account-subsection.light-divider {
      border-color: #e5e5e5;
    }
  }

  .account-section-group {
    float: left;
    width: 50%;
    background-color: inherit;

    & + .account-section-group {
      text-align: right;
      float: right;
    }
  }

  .account-section-group.-wide {
    width: 66%;
  }

  .account-section-group.-thin {
    width: 34%;
  }

  .account-section-group.payment-details {
    padding-bottom: 12px;
  }

  .account-section-item {
    margin-bottom: 10px;
    line-height: 1.25;
  }

  .account-section-email {
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .account-section-item-disabled {
    color: #757575;
  }

  .account-section-link {
    width: 100%;
    padding: 15px 0 5px;
    color: #0073e6;
    display: inline;
    padding-right: 0;
    padding-top: 5px;
    border-top: none;
  }

  .quality-icon {
    height: 20px;
    margin-top: -3px;
    padding: 0 5px;
    vertical-align: middle;
  }

  .clearfix::after {
    content: " ";
    display: block;
    width: 0;
    height: 0;
    overflow: hidden;
    clear: both;
  }

  .profile-hub {
    .profile-header {
      display: flex;
      cursor: pointer;
      border-bottom: 1px solid #ccc;
      padding: 15px 0;

      svg {
        width: 20px;
        height: 20px;
        fill: #aaa;
      }

      img {
        height: 60px;
        border-radius: 4px;
      }
    }

    .profile-summary {
      flex-grow: 1;
      align-self: center;
      padding-left: 20px;
      font-size: 0.8em;
      color: #787878;
    }

    .profile-action-icons {
      display: flex;
      align-items: center;
      align-self: center;
      border: none;
      background-color: transparent;

      svg {
        color: #aaa;
      }
    }

    .profile-links {
      display: none;
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
    }

    .account-section-item:first-child {
      .profile-link {
        border: none;
      }
    }

    .profile-link {
      padding: 16px 0 20px;
      margin-left: 84px;
      display: flex;
      min-height: 90px;
      border-top: 1px solid #ccc;
    }

    .profile-main {
      flex-grow: 1;
      color: #787878;
      font-size: 0.8em;
      align-self: center;
    }

    .profile-change {
      font-size: 0.8em;
      align-self: center;
    }

    .expanded {
      .profile-links {
        display: block;
      }

      .profile-action-icons {
        svg.svg-icon-chevron-down {
          transform: rotate(180deg);
        }
      }
    }

    li {
      padding: 0;
      margin: 0;
      list-style-type: none;

      &:first-child {
        .profile-header {
          padding: 0 0 20px 0;
        }
      }

      &:last-of-type {
        .profile-header {
          border-bottom: 0;
        }
      }
    }

    h3 {
      margin: 0 0 0.3em 0;
      font-weight: 600;
      font-size: 1.2em;
      color: #333;
    }

    h4 {
      margin: 4px 0;
      font-size: 1.2em;
      color: #333;
    }
  }
`;

export default function YourAccount() {
  const [menu, setMenu] = useState(false);
  const [info, setInfo] = useState();
  const [membershipInfo, setMembershipInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const profileIdx = sessionStorage.getItem("selectedProfile");
  const profilesInfo = JSON.parse(sessionStorage.getItem("profiles"));
  const myImage = profilesInfo.filter((p) => p.profileIdx == profileIdx);
  const exceptMe = profilesInfo.filter((p) => p.profileIdx != profileIdx);
  const profiles = JSON.parse(sessionStorage.getItem("profiles"));
  const [expand, setExpand] = useState();

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
        console.log(info.data.result);
        setInfo(info.data.result);
        try {
          const membershipInfo = await axios({
            method: "GET",
            url: `/users/membership?userIdx=${userIdx}&membershipIdx=${info.data.result.membershipIdx}`,
            baseURL: "https://rtflix.site/",
            headers: {
              "X-ACCESS-TOKEN": token,
            },
          });
          setMembershipInfo(membershipInfo.data.result);
        } catch (e) {
          console.log(e);
        }
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (isLoading) {
      getUserInfo();
    }
  }, []);

  const membershipText = (type) => {
    if (type == "P") {
      return "프리미엄";
    } else if (type == "B") {
      return "베이직";
    } else {
      return "스탠다드";
    }
  };

  function openMenu(number) {
    if (expand !== number) {
      setExpand(number);
    } else {
      setExpand(undefined);
    }
  }

  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <HeaderStyle>
        <div className="member-header">
          <div className="header-container">
            <div className="header">
              <Link to="/browse" className="svg-nfLogo logo">
                <svg
                  viewBox="0 0 111 30"
                  className="svg-icon svg-icon-netflix-logo"
                  focusable="true"
                >
                  <g id="netflix-logo">
                    <path
                      d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                      id="Fill-14"
                    ></path>
                  </g>
                </svg>
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
      </HeaderStyle>
      {!isLoading && (
        <BodyStyle>
          <div className="responsive-account-container">
            <div>
              <h1 className="account-header-inline" onClick={getUserInfo}>
                계정
              </h1>
              <div className="account-section-membersince">
                <div className="account-section-membersince-svg"></div>
                멤버십 시작: {membershipInfo && membershipInfo.startTime}
              </div>
              <div className="responsive-account-content">
                <div className="account-section collapsable-panel clearfix membership-section-wrapper membership-section-with-button">
                  <header className="account-section-header collapsable-section-toggle">
                    <h2 className="account-section-heading">
                      멤버십 & 결제 정보
                      <button
                        className="btn account-cancel-button btn-plain btn-small"
                        type="button"
                      >
                        <span>멤버십 해지</span>
                      </button>
                    </h2>
                  </header>
                  <section className="collapsable-section-content account-section-content">
                    <div className="account-subsection clearfix">
                      <div className="clearfix">
                        <div className="account-section-group">
                          <div className="account-section-item account-section-email">
                            {info.email}
                          </div>
                          <div className="account-section-item account-section-item-disabled">
                            비밀번호: ********
                          </div>
                          <div className="account-section-item account-section-item-disabled"></div>
                        </div>
                        <div className="account-section-group">
                          <div className="account-section-item">
                            <a href="/email" className="account-section-link">
                              계정 이메일 변경
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a
                              href="/password"
                              className="account-section-link"
                            >
                              비밀번호 변경
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a
                              href="/phonenumber"
                              className="account-section-link"
                            >
                              휴대폰 번호 등록
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="account-subsection clearfix light-divider">
                      <div className="wallet-subsection">
                        <div className="account-subsection-borderless clearfix">
                          <div className="account-section-group payment-details -wide">
                            <div className="account-section-item">
                              <div className="wallet-mop">
                                <span className="payment-icon">
                                  <span className="text-payment">신용카드</span>{" "}
                                </span>
                                <span className="mopType">
                                  •••• •••• •••• ••••
                                </span>
                              </div>
                            </div>
                            <div className="account-section-item nextBillingDate-item">
                              다음 결제일은{" "}
                              {membershipInfo && membershipInfo.endTime}입니다.
                            </div>
                          </div>
                          <div className="account-section-group -thin">
                            <div className="account-section-item">
                              <a
                                className="account-section-link action-update-payment"
                                href="/simplemember/managepaymentinfo"
                              >
                                결제 정보 관리
                              </a>
                            </div>
                            <div className="account-section-item">
                              <a
                                className="account-section-link wallet-subsection-add-backup-mop-link"
                                href="/simplemember/paymentpicker"
                              >
                                예비 결제 수단 등록
                              </a>
                            </div>
                            <div className="account-section-item">
                              <a
                                className="account-section-link account-view-billing"
                                href="/BillingActivity"
                              >
                                결제 상세 정보
                              </a>
                            </div>
                            <div className="account-section-item">
                              <a
                                className="account-section-link action-update-billing-date"
                                href="/simplemember/billingdateedit"
                              >
                                결제일 변경
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="account-subsection clearfix is-external-gift-redemption light-divider">
                      <div className="clearfix">
                        <div className="u-ta-right-desktop gifts-link-group">
                          <div className="account-section-item account-section-item">
                            <a
                              className="account-section-link action-redeem-link"
                              href="/redeem"
                            >
                              기프트카드 또는 할인 코드 입력
                            </a>
                          </div>
                          <div className="account-section-item account-section-item">
                            <a
                              className="account-section-link action-gift-cards-link"
                              href="/gift-cards"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              기프트카드 판매처
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="account-section collapsable-panel clearfix">
                  <header className="account-section-header collapsable-section-toggle">
                    <h2 className="account-section-heading">
                      멤버십 상세 정보
                    </h2>
                  </header>
                  <section className="collapsable-section-content account-section-content">
                    <div className="account-subsection clearfix">
                      <div className="clearfix">
                        <div className="account-section-group">
                          <div className="account-section-item plan-label">
                            <b>
                              {membershipInfo &&
                                membershipText(membershipInfo.membershipType)}
                            </b>
                            <svg
                              viewBox="0 0 4770 960"
                              className="quality-icon"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <path
                                  d="M724,595 C724,642 714,672 694,684 C673,696 622,702 538,702 C460,702 412,696 393,684 C373,672 363,642 363,595 L363,247 L291,247 L291,612 C291,665 309,701 344,721 C379,739 445,749 543,749 C647,749 715,739 748,720 C780,700 796,659 796,595 L796,247 L724,247 L724,595 Z M1013,691 L1013,247 L941,247 L941,744 L1341,744 L1341,691 L1013,691 Z M1858,299 L1858,247 L1372,247 L1372,299 L1580,299 L1580,744 L1652,744 L1652,299 L1858,299 Z M2428,617 C2428,556 2394,525 2327,520 L2327,519 C2369,515 2398,503 2414,484 C2429,467 2437,434 2437,388 C2437,336 2422,300 2394,278 C2366,257 2318,247 2249,247 L1946,247 L1946,744 L2018,744 L2018,542 L2259,542 C2323,542 2356,571 2356,629 L2356,744 L2428,744 L2428,617 Z M2337,475 C2318,489 2281,495 2225,495 L2018,495 L2018,295 L2250,295 C2299,295 2331,301 2345,314 C2360,328 2368,358 2368,402 C2368,438 2358,462 2337,475 Z M3008,744 L3083,744 L2844,247 L2743,247 L2510,744 L2586,744 L2635,639 L2958,639 L3008,744 Z M2937,596 L2656,596 L2795,292 L2937,596 Z M3730,549 L3428,549 L3428,746 L3330,746 L3330,247 L3428,247 L3428,443 L3730,443 L3730,247 L3829,247 L3829,746 L3730,746 L3730,549 Z M4226,247 C4301,247 4356,260 4389,286 C4417,306 4438,335 4454,372 C4470,408 4478,449 4478,493 C4478,591 4449,661 4389,706 C4356,732 4301,746 4226,746 L3980,746 L3980,247 L4226,247 Z M4216,639 C4346,639 4373,562 4373,493 C4373,427 4359,351 4216,351 L4078,351 L4078,639 L4216,639 Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M4638.00019,0 C4711.00009,0 4770,59 4770,132 L4770,827 C4770,868.423884 4751.51202,905.147426 4722.42954,929.452533 C4699.55882,948.56629 4670.13605,960 4638.00019,960 L133.999803,960 C58.9999134,960 0,901 0,827 L0,132 C0,59 58.9999134,0 133.999803,0 L4638.00019,0 Z M133.999803,80 C103.999847,80 79.9998826,103 79.9998826,132 L79.9998826,827 C79.9998826,857 103.999847,880 133.999803,880 L4638.00019,880 C4667.00015,880 4690.00012,856 4690.00012,827 L4690.00012,132 C4690.00012,103 4667.00015,80 4638.00019,80 L133.999803,80 Z"
                                  fill="currentColor"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="account-section-group">
                          <div className="account-section-item">
                            <a
                              href="/ChangePlan"
                              className="account-section-link"
                            >
                              멤버십 변경
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="account-subsection clearfix">
                        <div className="account-section-group -full">
                          <p className="account-addendum"></p>
                          <p className="account-addendum"></p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="account-section collapsable-panel clearfix">
                  <header className="account-section-header collapsable-section-toggle">
                    <h2 className="account-section-heading">
                      프로필 & 자녀 보호 설정
                    </h2>
                  </header>
                  <section className="collapsable-section-content account-section-content">
                    <div className="account-subsection clearfix">
                      <div className="profile-hub">
                        <ul>
                          {profiles.map((p) => {
                            return (
                              <li
                                key={p.profileIdx}
                                name={p.profileIdx}
                                className={
                                  expand == p.profileIdx
                                    ? "single-profile expanded"
                                    : "single-profile"
                                }
                              >
                                <div
                                  className="profile-header"
                                  onClick={() => openMenu(p.profileIdx)}
                                >
                                  <img
                                    className="activeProfile"
                                    src={p.profileImageUrl}
                                  />
                                  <div className="profile-summary">
                                    <h3>{p.profileName}</h3>
                                    <div>모든 관람등급</div>
                                  </div>
                                  <button className="profile-action-icons">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="svg-icon svg-icon-chevron-down"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                                <ul className="profile-links">
                                  <li className="account-section-item">
                                    <a className="profile-link">
                                      <div className="profile-main">
                                        <h4>언어</h4>
                                        한국어
                                      </div>
                                      <div className="profile-change">변경</div>
                                    </a>
                                  </li>
                                  <li className="account-section-item">
                                    <a className="profile-link">
                                      <div className="profile-main">
                                        <h4>시청 제한</h4>
                                        <div>제한 없음.</div>
                                      </div>
                                      <div className="profile-change">변경</div>
                                    </a>
                                  </li>
                                  <li className="account-section-item">
                                    <a className="profile-link">
                                      <div className="profile-main">
                                        <h4>프로필 잠금</h4>
                                        꺼짐
                                      </div>
                                      <div className="profile-change">변경</div>
                                    </a>
                                  </li>
                                  <li className="account-section-item">
                                    <a className="profile-link">
                                      <div className="profile-main">
                                        <h4>시청 기록</h4>
                                      </div>
                                      <div className="profile-change">보기</div>
                                    </a>
                                  </li>
                                  <li className="account-section-item">
                                    <a className="profile-link">
                                      <div className="profile-main">
                                        <h4>평가한 콘텐츠</h4>
                                      </div>
                                      <div className="profile-change">보기</div>
                                    </a>
                                  </li>
                                  <li className="account-section-item">
                                    <a className="profile-link">
                                      <div className="profile-main">
                                        <h4>재생 설정</h4>
                                        다음 화 자동 재생. 미리보기 자동 재생 안
                                        함 최상 화질 및 음질.
                                      </div>
                                      <div className="profile-change">변경</div>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="account-section collapsable-panel clearfix">
                  <header className="account-section-header collapsable-section-toggle">
                    <h2 className="account-section-heading">설정</h2>
                  </header>
                  <section className="collapsable-section-content account-section-content">
                    <div className="account-subsection clearfix">
                      <div className="clearfix">
                        <div className="account-section-group">
                          <div className="account-section-item">
                            <a className="account-section-link">
                              넷플릭스 테스터로 참여
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a className="account-section-link">
                              영상 저장 디바이스 관리
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a className="account-section-link">
                              디바이스 활성화
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a className="account-section-link">
                              디바이스 최근 시청 기록
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a className="account-section-link">
                              모든 디바이스에서 로그아웃
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a className="account-section-link">
                              개인 정보 다운로드
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </BodyStyle>
      )}
      <Footer youraccount />
    </div>
  );
}
