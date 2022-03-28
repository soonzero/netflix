import Header from "components/common/header";
import Profiles from "components/common/selectprofiles.js";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ManageProfiles() {
  return (
    <>
      <Header display={0} />
      <Profiles manage />
    </>
  );
}
