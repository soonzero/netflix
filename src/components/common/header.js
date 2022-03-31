import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as EditSVG } from "images/pencil.svg";
import { FixedHeaderStyle } from "./styled";

export default function Header(props) {
  // Module
  const navigate = useNavigate();

  // Local Variables
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const seriesGenres = {
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
  const moviesGenres = {
    first: [
      "세계 여성의 달",
      "한국",
      "미국 영화",
      "해외",
      "어워드 수상",
      "인디",
      "어린이 & 가족",
    ],
    second: ["애니메이션", "액션", "코미디", "로맨스", "스릴러", "호러", "SF"],
    third: [
      "판타지",
      "드라마 장르",
      "범죄",
      "다큐멘터리",
      "음악 / 뮤지컬",
      "고전",
    ],
  };

  // Local States
  const [fixed, setFixed] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [profiles, setProfiles] = useState();
  const [profileLoading, setProfileLoading] = useState(true);
  const [image, setImage] = useState();
  const [position, setPosition] = useState();
  const [height, setHeight] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState(false);
  const [keyword, setKeyword] = useState();
  const searchInputRef = useRef(null);
  const dropDownRef = useRef(null);

  // Life Cycle
  useEffect(() => {
    if (sessionStorage.getItem("selectedProfile") != null) {
      getProfilesInfo();
    } else {
      return;
    }
  }, []);

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

  useEffect(() => {
    setKeyword(keyword);
  }, [keyword]);

  useEffect(() => {
    const pageClickEvent = (event) => {
      if (
        searchInputRef.current !== null &&
        !searchInputRef.current.contains(event.target)
      ) {
        setSearch(!search);
      }
    };
    if (search) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [search]);

  useEffect(() => {
    const pageClickEvent = (event) => {
      if (
        dropDownRef.current !== null &&
        !dropDownRef.current.contains(event.target)
      ) {
        setSubMenu(!subMenu);
      }
    };
    if (subMenu) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [subMenu]);

  // Functions
  const logout = () => {
    sessionStorage.clear();
    navigate(`/logout`);
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

  const getProfilesInfo = async () => {
    if (sessionStorage.getItem("selectedProfile")) {
      setProfileLoading(true);
      const profileIdx = sessionStorage.getItem("selectedProfile");
      console.log(profileIdx);
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
        setProfileLoading(false);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const inputHandler = (event) => {
    setKeyword(event.target.value);
  };

  const goToSearch = async () => {
    if (keyword.length > 0) {
      navigate(`/search/${keyword}`);
    }
  };

  const selectProfile = (event) => {
    sessionStorage.setItem(
      "selectedProfile",
      event.currentTarget.getAttribute("name")
    );
    getProfilesInfo();
  };

  return (
    <FixedHeaderStyle fixed={fixed} menu={menu} mylist={props.mylist}>
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
                  <div className="search-box" onClick={() => setSearch(true)}>
                    {search || props.keyword ? (
                      <div className="search-input">
                        <span
                          className="icon-search"
                          onClick={goToSearch}
                        ></span>
                        <input
                          ref={searchInputRef}
                          type="text"
                          id="search-input"
                          name="search-input"
                          placeholder="제목, 사람, 장르"
                          style={{ opacity: "1", transitionDuration: "300ms" }}
                          value={keyword}
                          onChange={inputHandler}
                        />
                        <span
                          className="icon-close"
                          onClick={() => setKeyword()}
                        ></span>
                      </div>
                    ) : (
                      <button className="search-tab">
                        <span className="search-icon"></span>
                      </button>
                    )}
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
                    onClick={() => setMenu(true)}
                  >
                    <div className="account-dropdown-button">
                      <Link to="/YourAccount" className="profile">
                        <span className="profile-link">
                          <img className="profile-icon" src={image && image} />
                          {menu && <div className="callout-arrow"></div>}
                        </span>
                      </Link>
                      <span className={`caret ${menu ? "open" : null}`}></span>
                    </div>
                    {menu && (
                      <div
                        className="account-dropdown submenu theme-lakira"
                        onMouseOver={() => setMenu(true)}
                        onMouseLeave={() => setMenu(false)}
                      >
                        <div className="ptrack-content">
                          <div className="top-bar"></div>
                          <ul className="submenu-list profiles">
                            {!profileLoading &&
                              profiles.length > 0 &&
                              profiles.map((p) => {
                                return (
                                  <li
                                    key={p.profileIdx}
                                    name={p.profileIdx}
                                    className="submenu-item profile"
                                    onClick={selectProfile}
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
                                <EditSVG />
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
        {!isLoading && props.subheader && (
          <div className="sub-header">
            <div>
              <div className="sub-header-wrapper">
                <div className="gallery-header">
                  {props.mylist && (
                    <div className="title">내가 찜한 콘텐츠</div>
                  )}
                  {props.category && (
                    <>
                      {props.genre && (
                        <div className="title">
                          <div className="bread-crumbs">
                            <ul>
                              <li>
                                <Link
                                  to={`/browse/${
                                    props.category == "series"
                                      ? "series"
                                      : "movies"
                                  }`}
                                >
                                  {props.category == "series"
                                    ? "시리즈"
                                    : "영화"}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                      <div className="arrow-genre-details">
                        <span className="genre-title">
                          {props.genre
                            ? props.genre
                            : props.category == "series"
                            ? "시리즈"
                            : "영화"}
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
                                      ref={dropDownRef}
                                    >
                                      <ul className="sub-menu-list multi-column">
                                        {props.category == "series"
                                          ? seriesGenres.first.map((genre) => {
                                              return (
                                                <li
                                                  key={genre}
                                                  className="sub-menu-item"
                                                >
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
                                            })
                                          : moviesGenres.first.map((genre) => {
                                              return (
                                                <li
                                                  key={genre}
                                                  className="sub-menu-item"
                                                >
                                                  <Link
                                                    to={`/browse/movies/${genre}`}
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
                                        {props.category == "series"
                                          ? seriesGenres.second.map((genre) => {
                                              return (
                                                <li
                                                  key={genre}
                                                  className="sub-menu-item"
                                                >
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
                                            })
                                          : moviesGenres.second.map((genre) => {
                                              return (
                                                <li
                                                  key={genre}
                                                  className="sub-menu-item"
                                                >
                                                  <Link
                                                    to={`/browse/movies/${genre}`}
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
                                        {props.category == "series"
                                          ? seriesGenres.third.map((genre) => {
                                              return (
                                                <li
                                                  key={genre}
                                                  className="sub-menu-item"
                                                >
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
                                            })
                                          : moviesGenres.third.map((genre) => {
                                              return (
                                                <li
                                                  key={genre}
                                                  className="sub-menu-item"
                                                >
                                                  <Link
                                                    to={`/browse/movies/${genre}`}
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
    </FixedHeaderStyle>
  );
}
