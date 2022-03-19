import React from "react";
import Header from "components/signup/Header";
import Footer from "components/common/footer";
import styled from "styled-components";
import MainContainer from "components/signup/MainContainer";

const ScreenStyle = styled.div``;

export default function RegForm() {
  return (
    <ScreenStyle>
      <Header />
      <MainContainer indicator={2} />
      <Footer registration />
    </ScreenStyle>
  );
}
