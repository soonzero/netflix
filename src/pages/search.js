import React, { useState, useEffect } from "react";
import Header from "components/common/header";
import { useParams } from "react-router-dom";
import axios from "axios";
import RowContainer from "components/common/rowcontainer";
import Footer from "components/common/footer";
import { SearchStyle } from "components/common/styled";

export default function Search() {
  // Local Variables
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const profileIdx = sessionStorage.getItem("selectedProfile");

  // Local States
  const { keyword } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [contents, setContents] = useState();

  // Life Cycle
  useEffect(() => {
    searchContents(keyword);
  }, [keyword]);

  // Function
  const searchContents = async () => {
    setIsLoading(true);
    if (keyword.length > 0) {
      try {
        const searching = await axios({
          method: "GET",
          url: `/browse/search?userIdx=${userIdx}&profileIdx=${profileIdx}&search=${keyword}`,
          baseURL: "https://rtflix.site",
          headers: {
            "X-ACCESS-TOKEN": token,
          },
        });
        setContents(searching.data.result);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    } else {
      setContents();
    }
  };

  return (
    <SearchStyle>
      <Header
        display={sessionStorage.getItem("selectedProfile")}
        keyword={keyword}
      />
      {!isLoading && (
        <div className="main-view">
          <div>
            <div className="search">
              <div className="gallery row-with-x-columns search">
                <div className="search-title-header">
                  <div className="rail">
                    <div className="suggestions">
                      <div className="ptrack-container">
                        <div className="ptrack-content">
                          <div className="suggestion-rail-container">
                            <span className="suggestions-label">
                              다음과 관련된 콘텐츠:
                            </span>
                            <ul>
                              {contents
                                ? contents.slice(0, 6).map((c) => {
                                    return (
                                      <li key={c.profileIdx}>
                                        <div className="ptrack-content">
                                          <div>{c.title}</div>
                                        </div>
                                      </li>
                                    );
                                  })
                                : null}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gallery-content">
                  <div>
                    <div className="gallery-lockups">
                      <div className="row-container row-container-title-card">
                        <div className="ptrack-container">
                          <RowContainer mylist items={contents} />
                        </div>
                      </div>
                      <div className="row-container row-container-title-card"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer center home />
    </SearchStyle>
  );
}
