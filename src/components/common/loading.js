import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { store } from "index";
import { spinAnimation } from "./styled";

const LoadingStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background-color: #141414;
  z-index: 0;
  line-height: 1.4;
  font-size: 14px;

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
  }

  .centered-div.loading-wrapper {
    opacity: 1;
  }

  .loading-profile-wrapper {
    transform: scale(0.4);
    opacity: 1;
    transition-duration: 450ms;

    .akira-spinner {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 480px;
      margin-left: -240px;
      margin-top: -240px;
    }
  }

  .akira-spinner {
    color: #e50914;
    display: inline-block;
    animation: ${spinAnimation} 750ms infinite;
    animation-timing-function: linear;

    &::before {
      font-family: "Netflix Icon";
      content: "\\e765";
    }
  }

  .profile-icon {
    height: 10vw;
    width: 10vw;
    max-height: 200px;
    max-width: 200px;
    min-height: 84px;
    min-height: 84px;
    position: relative;
    text-decoration: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #333;
    border-radius: 4px;
    border: none;

    &::after {
      content: "";
      display: block;
      border-radius: 4px;
      border: 0.3em solid transparent;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
  ul {
    padding: 0;
    margin: 1em 0;
  }

  li {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
`;

export default function Loading() {
  const [image, setImage] = useState();
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const profileIdx = sessionStorage.getItem("selectedProfile");

  const getProfileImage = async () => {
    try {
      const profile = await axios({
        method: "GET",
        url: `/profile/info?userIdx=${userIdx}&profileIdx=${profileIdx}`,
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      setImage(profile.data.result.profileImageUrl);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (profileIdx) {
      getProfileImage();
    } else {
      return;
    }
  }, []);

  function getImage() {
    if (sessionStorage.getItem("selectedProfile")) {
      getProfileImage();
    } else {
      return;
    }
  }

  store.subscribe(getImage);

  return (
    <LoadingStyle>
      {image && (
        <div className="centered-div loading-wrapper">
          <div>
            <div className="loading-profile-wrapper">
              <ul>
                <li className="profile-link">
                  <div
                    className="profile-icon"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  ></div>
                  <span className="icon-spinner akira-spinner"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </LoadingStyle>
  );
}
