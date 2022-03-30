import axios from "axios";
import { store } from "index";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const FixedHeader = styled.div`
  color: white;
  height: 70px;
  line-height: 1.4;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .fixed-header-container {
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    .main-header {
      background-color: transparent;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.7) 10%,
        rgba(0, 0, 0, 0)
      );
      height: 68px;
      z-index: 2;
      padding: 0 60px;
      font-size: 0.875rem;
      position: relative;
      display: flex;
      align-items: center;
      transition: background-color 400ms ease;
      background-color: ${(props) =>
        props.fixed && !props.mylist ? "rgb(20, 20, 20)" : "transparent"};

      .main-header-logo {
        text-decoration: none;

        &::before {
          font-size: 1.5625rem;
          font-family: "Netflix Icon";
          content: "\\e5d0";
          color: #e50914;
          margin-right: 25px;
        }
      }

      .first-nav {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;

        .nav-menu {
          display: none;
        }

        .nav-tab {
          margin-left: 20px;
          list-style-type: none;
          color: #e5e5e5;

          a {
            color: #e5e5e5;
            text-decoration: none;
            position: relative;
            transition: color 400ms;
            display: flex;
            align-items: center;
            height: 100%;
            cursor: pointer;
          }

          a:hover {
            color: #b3b3b3;
          }
        }
      }

      .secondary-nav {
        position: absolute;
        top: 0;
        right: 60px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-grow: 1;
        height: 100%;

        .nav-element {
          margin-right: 20px;

          .search-box {
            display: inline-block;
            vertical-align: middle;

            .search-tab {
              display: inline-block;
              cursor: pointer;
              border: none;
              background: 0 0;
              padding: 1px 6px;

              .search-icon {
                font-size: 1.3em;
                margin-right: 0;
                vertical-align: middle;
                line-height: 1;
                color: white;
                text-shadow: 0 1px 1px rgb(0 0 0 / 30%);
                font-family: "Netflix Icon";

                &::before {
                  content: "\\e636";
                }
              }
            }
          }

          .notifications {
            position: relative;
            white-space: normal;

            .notifications-menu {
              background-color: transparent;
              border: none;
              font-size: 1.5em;
              line-height: 1;
              margin-top: 0.2em;
              padding: 2px 6px 3px;
              position: relative;
              cursor: pointer;

              .notifications-icon {
                font-family: "Netflix Icon";

                &::before {
                  content: "\\e663";
                  color: white;
                }
              }
            }
          }

          .account-menu-item {
            position: relative;
            font-size: 0.75rem;
            z-index: 0;

            .account-dropdown-button {
              display: flex;
              align-items: center;
              width: 100%;
              cursor: pointer;

              .callout-arrow {
                position: absolute;
                bottom: -19px;
                left: 50%;
                border-width: 7px;
                margin-left: -7px;
                border-color: transparent transparent #e5e5e5;
                border-style: solid;
                height: 0;
                width: 0;
                transition: opacity 150ms;
              }

              .profile {
                z-index: -1;
                position: relative;

                .profile-link {
                  display: flex;
                  align-items: center;
                  cursor: pointer;
                  color: white;

                  .profile-icon {
                    vertical-align: middle;
                    width: 32px;
                    height: 32px;
                    border-radius: 4px;
                  }
                }
              }

              .caret {
                margin-left: 10px;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 5px 5px 0 5px;
                border-color: white transparent transparent transparent;
                transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1),
                  -webkit-transform 367ms cubic-bezier(0.21, 0, 0.07, 1),
                  -moz-transform 367ms cubic-bezier(0.21, 0, 0.07, 1),
                  -o-transform 367ms cubic-bezier(0.21, 0, 0.07, 1);
              }

              .caret.open {
                transform: rotate(180deg);
              }
            }

            .account-dropdown {
              position: absolute;
              right: 0;
              top: 52px;
              width: 181px;
              margin-left: 0;
              padding: 0;

              a {
                color: white;
                text-decoration: none;

                &:hover {
                  text-decoration: underline;
                }
              }

              .submenu-list {
                display: block;
                width: 100%;
                margin: 0;
                padding: 0;
                height: auto;
              }

              .account-links {
                padding: 10px 0;
                border-top: 1px solid rgba(255, 255, 255, 0.25);
              }

              .profiles {
                height: auto;
                padding: 10px 0 5px 0;
                overflow: hidden;

                .submenu-item {
                  line-height: 32px;

                  & > div {
                    display: flex;
                    align-items: center;

                    .avatar-wrapper {
                      display: inline;

                      .profile-icon {
                        margin-right: 10px;
                        vertical-align: middle;
                        height: 32px;
                        width: 32px;
                        border-radius: 4px;
                      }
                    }
                  }
                }

                .profile-link {
                  span {
                    line-height: 32px;
                  }
                }

                .profile-name {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  width: 100px;
                  font-size: 0.8125rem;
                  line-height: 1.3846153846;
                  vertical-align: middle;
                  display: inline-block;
                  white-space: pre;
                  color: white;

                  &:hover {
                    text-decoration: underline;
                  }
                }
              }

              .submenu-item {
                padding: 5px 10px;
                display: block;
                font-size: 0.8125rem;
                line-height: 1.2307692308;

                .submenu-link-icon {
                  display: flex;
                  align-items: center;

                  svg {
                    color: #b3b3b3;
                    padding: 0 13px 0 5px;
                    box-sizing: content-box;
                  }
                }
              }

              .sign-out-links {
                .submenu-link {
                  text-align: center;
                  width: 100%;
                  display: block;
                }
              }
            }

            .submenu.theme-lakira {
              background-color: rgba(0, 0, 0, 0.9);
              color: white;
              font-size: 0.8125rem;
              line-height: 1.3125;
              border: 1px solid rgba(255, 255, 255, 0.15);
            }
          }
        }

        .nav-element:last-child {
          margin-right: 0;
        }
      }
    }

    .sub-header {
      position: relative;
      height: 68px;
      z-index: 1;

      .sub-header-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        padding: 0 60px;
        height: 68px;

        .gallery-header {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin: 0;
          min-height: 0;
          padding: 0;
          flex-grow: 1;

          .title {
            font-size: 2.1875rem;
            display: inline-block;
            /* margin-right: 20px; */
            line-height: 1.0285714286;
          }

          .genre-title {
            font-size: 2.375rem;
            line-height: 1;
            font-weight: 600;
            margin-right: 15px;
          }

          .sub-genres {
            display: inline-block;
            vertical-align: top;
            margin: 0 30px;
          }
        }
      }
    }

    .arrow-genre-details {
      display: flex;
      flex-grow: 1;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }

    .nfDropDown.theme-lakira {
      position: relative;
      text-align: left;

      .label {
        height: 2.1875rem;
        padding-left: 10px;
        line-height: 2.1875rem;
        letter-spacing: 1px;
        font-size: 1.09375rem;
        font-weight: 600;
        border: 1px solid rgba(255, 255, 255, 0.9);
        display: inline-block;
        color: white;
        background-color: black;
        appearance: none;
        border-radius: 0;
        position: relative;
        padding-right: 50px;
        cursor: pointer;

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
          cursor: pointer;
          outline: 0;
        }

        .arrow {
          border-color: white transparent transparent;
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
  }

  .sub-menu.theme-lakira {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    line-height: 21px;
    border: solid 1px rgba(255, 255, 255, 0.15);
    cursor: default;

    .sub-menu-list {
      height: auto;
      cursor: default;
    }

    .sub-menu-list.multi-column {
      display: table-cell;
    }

    .sub-menu-item {
      cursor: default;
      line-height: 24px;
      display: block;
    }

    .sub-menu-link {
      text-transform: none;
      display: inline-block;
      width: 100%;
      color: white;
    }
  }

  .nfDropDown.theme-lakira {
    .sub-menu {
      overflow-x: hidden;
      z-index: 2;
      padding: 0;
      margin: 0;
      top: 2.1875rem;
      left: 0;
      font-size: 0.875rem;

      .sub-menu-list {
        padding: 5px 0;
        margin: 0;
      }

      .sub-menu-item {
        a {
          padding: 1px 20px 1px 10px;
        }
      }

      .sub-menu-link {
        display: inline-block;
        width: 100%;
        padding: 1px 0;
      }
    }
  }

  .gallery-header .sub-genres .sub-menu .sub-menu-link {
    white-space: nowrap;
  }

  .bread-crumbs {
    font-size: 18px;
    color: grey;

    ul {
      padding: 0;
      margin: 0;

      li {
        list-style: none;
        display: inline;
        padding-right: 10px;
        z-index: 3;
        position: relative;

        &::after {
          padding-left: 10px;
          content: ">";
        }

        a {
          color: grey;
        }
      }
    }
  }
`;

export default function Header(props) {
  const navigate = useNavigate();
  const [fixed, setFixed] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [profiles, setProfiles] = useState();
  const [image, setImage] = useState();
  const [position, setPosition] = useState();
  const [height, setHeight] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const series = {
    first: [
      "세계 여성의 달",
      "한국 드라마",
      "미국 시리즈",
      "영국 드라마",
      "아시아 드라마",
      "버라이어티 / 예능",
    ],
    second: ["애니", "코미디", "로맨스", "드라마 장르", "액션", "스릴러"],
    third: ["SF & 판타지", "호러", "키즈", "청소년", "다큐시리즈"],
  };

  function handleScroll() {
    setScrollY(window.scrollY);
    if (window.scrollY == 0) {
      setFixed(false);
    } else {
      setFixed(true);
    }

    if (props.subheader) {
      if (window.scrollY == 0) {
        setPosition("relative");
      } else if (window.scrollY >= 68) {
        setPosition("fixed");
        setHeight(-68);
      } else {
        setPosition("absolute");
        setHeight((0 - window.scrollY) / 68);
      }
    } else {
      setHeight(0);
      if (window.scrollY == 0) {
        setPosition("relative");
      } else {
        setPosition("fixed");
      }
    }
  }

  useEffect(() => {
    setScrollY(scrollY);
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  function menuHandler() {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }

  const logout = () => {
    sessionStorage.clear();
    navigate(`/logout`);
  };

  const getProfilesInfo = async () => {
    if (sessionStorage.getItem("selectedProfile")) {
      const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
      const token = JSON.parse(sessionStorage.getItem("user")).jwt;
      const profileIdx = sessionStorage.getItem("selectedProfile");
      try {
        const allProfiles = await axios({
          method: "GET",
          url: `/profile?userIdx=${userIdx}`,
          baseURL: "https://rtflix.site",
          headers: {
            "X-ACCESS-TOKEN": token,
          },
        });
        const array = allProfiles.data.result;
        sessionStorage.setItem("profiles", JSON.stringify(array));
        const filteredArray = array.filter((p) => p.profileIdx == profileIdx);
        setImage(filteredArray[0].profileImageUrl);
        setProfiles(array.filter((p) => p.profileIdx != profileIdx));
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
  };

  store.subscribe(getProfilesInfo);

  useEffect(() => {
    if (sessionStorage.getItem("selectedProfile") != null) {
      getProfilesInfo();
    } else {
      return;
    }
  }, []);

  return (
    <FixedHeader fixed={fixed} menu={menu} mylist={props.mylist}>
      <div
        className="fixed-header-container"
        style={{
          position: `${position}`,
          background: `${
            window.scrollY == 0 ? "transparent" : "rgb(20, 20, 20)"
          }`,
          top: `${height}px`,
        }}
      >
        <div className="main-header">
          <Link to="/browse" className="main-header-logo" />
          {!isLoading && props.display != 0 && (
            <>
              <ul className="first-nav">
                <li className="nav-menu"></li>
                <li className="nav-tab">
                  <Link to="/browse">홈</Link>
                </li>
                <li className="nav-tab">
                  <Link to="/browse/series">시리즈</Link>
                </li>
                <li className="nav-tab">
                  <Link to="/browse/movies">영화</Link>
                </li>
                <li className="nav-tab">
                  <Link to="/latest">NEW! 요즘 대세 콘텐츠</Link>
                </li>
                <li className="nav-tab">
                  <Link to="/browse/my-list">내가 찜한 콘텐츠</Link>
                </li>
              </ul>
              <div className="secondary-nav">
                <div className="nav-element">
                  <div className="search-box">
                    <button className="search-tab">
                      <span className="search-icon"></span>
                    </button>
                  </div>
                </div>
                <div className="nav-element">
                  <span className="notifications">
                    <button className="notifications-menu">
                      <span className="notifications-icon"></span>
                    </button>
                  </span>
                </div>
                <div className="nav-element">
                  <div
                    className="account-menu-item"
                    onMouseEnter={menuHandler}
                    onClick={menuHandler}
                  >
                    <div className="account-dropdown-button">
                      <Link to="/YourAccount" className="profile">
                        <span className="profile-link">
                          <img className="profile-icon" src={image && image} />
                          {menu && <div className="callout-arrow"></div>}
                        </span>
                      </Link>
                      <span className="caret"></span>
                    </div>
                    {menu && (
                      <div className="account-dropdown submenu theme-lakira">
                        <div className="ptrack-content">
                          <div className="top-bar"></div>
                          <ul className="submenu-list profiles">
                            {profiles.length > 0 &&
                              profiles.map((p) => {
                                return (
                                  <li
                                    key={p.profileIdx}
                                    className="submenu-item profile"
                                  >
                                    <div>
                                      <div className="profile-link">
                                        <div className="avatar-wrapper">
                                          <img
                                            className="profile-icon"
                                            src={p.profileImageUrl}
                                          />
                                        </div>
                                        <span className="profile-name">
                                          {p.profileName}
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                );
                              })}
                            <li className="submenu-item profile-link">
                              <Link
                                to="/ManageProfiles"
                                className="submenu-link submenu-link-icon"
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="Hawkins-Icon Hawkins-Icon-Standard"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                                <span className="profile-name">
                                  프로필 관리
                                </span>
                              </Link>
                            </li>
                          </ul>
                          <ul className="submenu-list account-links">
                            <li className="submenu-item">
                              <a
                                className="submenu-link submenu-link-icon"
                                href="/YourAccount"
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="Hawkins-Icon Hawkins-Icon-Standard"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.00011 8C9.00011 6.34315 10.3433 5 12.0001 5C13.657 5 15.0001 6.34315 15.0001 8C15.0001 9.65685 13.657 11 12.0001 11C10.3433 11 9.00011 9.65685 9.00011 8ZM12.0001 3C9.23869 3 7.00011 5.23858 7.00011 8C7.00011 10.7614 9.23869 13 12.0001 13C14.7615 13 17.0001 10.7614 17.0001 8C17.0001 5.23858 14.7615 3 12.0001 3ZM5.98069 21.1961C6.46867 18.7563 8.61095 17 11.0991 17H12.9011C15.3893 17 17.5316 18.7563 18.0195 21.1961L19.9807 20.8039C19.3057 17.4292 16.3426 15 12.9011 15H11.0991C7.65759 15 4.69447 17.4292 4.01953 20.8039L5.98069 21.1961Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                                <span>계정</span>
                              </a>
                            </li>
                            <li className="submenu-item">
                              <a
                                className="submenu-link submenu-link-icon"
                                href="https://help.netflix.com/"
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="Hawkins-Icon Hawkins-Icon-Standard"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 8.5C10.6831 8.5 10 9.24303 10 10H8C8 7.75697 10.0032 6.5 12 6.5C13.9968 6.5 16 7.75697 16 10C16 11.3487 14.9191 12.2679 13.8217 12.68C13.5572 12.7793 13.3322 12.9295 13.1858 13.0913C13.0452 13.2467 13 13.383 13 13.5V14H11V13.5C11 12.0649 12.1677 11.1647 13.1186 10.8076C13.8476 10.5339 14 10.1482 14 10C14 9.24303 13.3169 8.5 12 8.5ZM13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                                <span>고객 센터</span>
                              </a>
                            </li>
                          </ul>
                          <ul className="account-links submenu-list sign-out-links">
                            <li className="submenu-item">
                              <Link
                                to="/logout"
                                className="submenu-link"
                                onClick={logout}
                              >
                                넷플릭스에서 로그아웃
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {props.subheader && (
          <div className="sub-header">
            <div>
              <div className="sub-header-wrapper">
                <div className="gallery-header">
                  {props.mylist && (
                    <div className="title">내가 찜한 콘텐츠</div>
                  )}
                  {(props.series || props.movies) && (
                    <>
                      {props.genre && (
                        <div className="title">
                          <div className="bread-crumbs">
                            <ul>
                              <li>
                                <Link
                                  to={`/browse/${
                                    props.series ? "series" : "movies"
                                  }`}
                                >
                                  {props.series ? "시리즈" : "영화"}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                      <div className="arrow-genre-details">
                        <span className="genre-title">
                          {props.genre ? props.genre : "시리즈"}
                        </span>
                        {!props.genre && (
                          <div className="sub-genres">
                            <div className="ptrack-container">
                              <div className="ptrack-content">
                                <div
                                  className={`nfDropDown theme-lakira ${
                                    subMenu ? "open" : ""
                                  }`}
                                >
                                  <div
                                    className="label"
                                    onClick={() => setSubMenu((prev) => !prev)}
                                  >
                                    장르
                                    <span className="arrow"></span>
                                  </div>
                                  {subMenu && (
                                    <div
                                      className="sub-menu theme-lakira"
                                      style={{
                                        opacity: "1",
                                        transitionDuration: "150ms",
                                      }}
                                    >
                                      <ul className="sub-menu-list multi-column">
                                        {series.first.map((genre) => {
                                          return (
                                            <li className="sub-menu-item">
                                              <Link
                                                to={`/browse/series/${genre}`}
                                                className="sub-menu-link"
                                                onClick={() =>
                                                  setSubMenu(false)
                                                }
                                              >
                                                {genre}
                                              </Link>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                      <ul className="sub-menu-list multi-column">
                                        {series.second.map((genre) => {
                                          return (
                                            <li className="sub-menu-item">
                                              <Link
                                                to={`/browse/series/${genre}`}
                                                className="sub-menu-link"
                                                onClick={() =>
                                                  setSubMenu(false)
                                                }
                                              >
                                                {genre}
                                              </Link>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                      <ul className="sub-menu-list multi-column">
                                        {series.third.map((genre) => {
                                          return (
                                            <li className="sub-menu-item">
                                              <Link
                                                to={`/browse/series/${genre}`}
                                                className="sub-menu-link"
                                                onClick={() =>
                                                  setSubMenu(false)
                                                }
                                              >
                                                {genre}
                                              </Link>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </FixedHeader>
  );
}
