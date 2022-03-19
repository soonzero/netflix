import React from "react";
import Header from "components/signup/Header";
import styled from "styled-components";
import Footer from "components/common/footer";
import MainContainer from "components/signup/MainContainer";

const ScreenStyle = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  word-break: keep-all;
`;

export default function Registration() {
  return (
    <ScreenStyle>
      <Header />
      <MainContainer indicator={1} />
      <Footer registration />
    </ScreenStyle>
  );
}
