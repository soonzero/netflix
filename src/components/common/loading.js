import axios from "axios";
import React, { useEffect, useState } from "react";
import { store } from "index";
import { LoadingStyle } from "./styled";

export default function Loading() {
  // Local Variables
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const profileIdx = sessionStorage.getItem("selectedProfile");
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Life Cycle
  useEffect(() => {
    if (profileIdx) {
      getProfileImage();
    }
    return () => {
      setImage();
      setIsLoading(true);
    };
  }, []);

  // Functions
  const getProfileImage = async () => {
    if (isLoading) {
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
    }
  };

  function getImage() {
    if (sessionStorage.getItem("selectedProfile")) {
      getProfileImage();
    } else {
      return;
    }
  }

  // Redux
  store.subscribe(getImage);

  return (
    <LoadingStyle>
      {!isLoading && (
        <>
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
        </>
      )}
    </LoadingStyle>
  );
}
