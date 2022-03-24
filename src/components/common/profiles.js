import { store } from "index";
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
  }

  li.profile:not(:last-child) {
    margin: 0 2vw 0 0;
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
    letter-spacing: 2px;
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
`;

export default function Profiles(props) {
  const profiles = useSelector((state) => state.profiles);
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(true);

  const selectProfile = (event) => {
    const name = event.currentTarget.getAttribute("name");
    dispatch({ type: "SELECT", data: { name: name } });
    setDisplay(false);
  };

  return (
    <>
      {display && (
        <MainStyle edit>
          <div className="centered-div list-profiles-container">
            <div className="list-profiles">
              <h1 className="profile-gate-label">
                {props.manage
                  ? "프로필 관리"
                  : "넷플릭스를 시청할 프로필을 선택하세요."}
              </h1>
              <ul className="choose-profile">
                {profiles.map((p) => {
                  return (
                    <li
                      className="profile"
                      name={p.name}
                      onClick={selectProfile}
                    >
                      <a className="profile-link">
                        <div className="avatar-wrapper">
                          <div
                            className="profile-icon"
                            style={{ backgroundImage: `url(${p.image})` }}
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
                        <span className="profile-name">{p.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <span>
              <Link
                to={`${props.manage ? "/browse" : "/ManageProfiles"}`}
                className={`profile-button ${
                  props.manage && "preferred-action"
                }`}
              >
                {props.manage ? "완료" : "프로필 관리"}
              </Link>
            </span>
          </div>
        </MainStyle>
      )}
    </>
  );
}
