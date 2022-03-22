import Header from "components/common/header";
import Footer from "components/common/footer";
import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import MainView from "components/common/mainview";

const HomeStyle = styled.div`
  background-color: #141414;

  .main-view {
    position: relative;
    min-height: 1000px;
    z-index: 0;

    .main-view-container {
      margin-top: -70px;
      padding: 0 0 50px;
      z-index: 0;
      overflow: hidden;
    }
  }
`;

export default function Browse() {
  return (
    <HomeStyle>
      <Header />
      <div className="main-view">
        <div className="main-view-container">
          <MainView />
        </div>
      </div>
      <Footer home center dark />
    </HomeStyle>
  );
}
