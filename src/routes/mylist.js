import Header from "components/common/header";
import Loading from "components/common/loading";
import Footer from "components/common/footer";
import React, { useEffect, useState } from "react";
import RowContainer from "components/common/rowcontainer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MyListStyle } from "components/common/styled";

export default function MyList() {
  // Module
  const navigate = useNavigate();

  // Local Variables
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const selectedProfile = JSON.parse(sessionStorage.getItem("selectedProfile"));

  // Local States
  const [isLoading, setIsLoading] = useState(true);
  const [myList, setMyList] = useState();

  // Life Cycle
  useEffect(() => {
    getMyList();
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("user") == null) {
      navigate(`/login`);
    }
  }, []);

  // Functions
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
