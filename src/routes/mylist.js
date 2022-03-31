import Header from "components/common/header";
import Loading from "components/common/loading";
import Footer from "components/common/footer";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RowContainer from "components/common/rowcontainer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyListStyle = styled.div`
  background-color: #141414;
  color: white;

  .main-view {
    position: relative;
    min-height: 1000px;
    z-index: 0;

    .gallery {
      margin: 0;
      margin-top: 3.5%;
      padding-top: 4.375rem;
      overflow: hidden;
      min-height: 1000px;

      .gallery-content {
        position: relative;
        z-index: 0;
      }
    }
  }
`;

export default function MyList() {
  const navigate = useNavigate();
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const selectedProfile = JSON.parse(sessionStorage.getItem("selectedProfile"));
  const [isLoading, setIsLoading] = useState(true);
  const [myList, setMyList] = useState();

  const getMyList = async () => {
    setIsLoading(true);
    try {
      const list = await axios({
        method: "GET",
        url: `/my-list?userIdx=${userIdx}&profileIdx=${selectedProfile}`,
        baseURL: "https://rtflix.site/",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      setMyList(list.data.result);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMyList();
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("user") == null) {
      navigate(`/login`);
    }
  }, []);

  return (
    <MyListStyle>
      {!isLoading ? (
        <>
          <Header
            display={selectedProfile}
            subheader="내가 찜한 콘텐츠"
            mylist
          />
          <div className="main-view">
            <div className="gallery row-with-x-columns">
              <div className="gallery-content">
                <div>
                  <div className="gallery-lockups">
                    {myList && <RowContainer items={myList} mylist />}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer center home />
        </>
      ) : (
        <Loading />
      )}
    </MyListStyle>
  );
}
