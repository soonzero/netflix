import React, { useState, useEffect } from "react";
import Header from "components/common/header";
import { useParams } from "react-router-dom";
import axios from "axios";
import RowContainer from "components/common/rowcontainer";
import Footer from "components/common/footer";
import styled from "styled-components";

const SearchStyle = styled.div`
  background-color: #141414;

  .main-view {
    position: relative;
    min-height: 1000px;
    z-index: 0;
  }

  .gallery.search {
    padding-top: 3vw;
    margin-top: 0;
  }

  .gallery {
    margin: 0;
    overflow: hidden;
    min-height: 1000px;
  }

  .search-title-header {
    min-height: 65px;
  }

  .rail {
    font-size: 0.9375vw;
    margin: 1em 0 0 0;
    display: inline-block;
    min-height: 10px;
    width: 100%;
  }

  .suggestions {
    margin: 10px 0 20px 60px;
    display: flex;
    line-height: 1.6;
  }

  .suggestion-rail-container {
    display: flex;
  }

  .suggestions {
    .suggestions-label {
      color: grey;
      box-flex: 0;
      flex: 0 auto;
      margin-right: 5px;
      white-space: nowrap;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;

      li {
        flex: 0 auto;
        border-right: 1px solid grey;
        list-style: none;
        padding: 0 0.5em;
        box-flex: 0;
        color: white;
      }
    }
  }
`;

export default function Search() {
  const { keyword } = useParams();
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const profileIdx = sessionStorage.getItem("selectedProfile");
  const [isLoading, setIsLoading] = useState(true);
  const [contents, setContents] = useState();

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

  useEffect(() => {
    searchContents(keyword);
  }, [keyword]);

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
