import Header from "components/common/header";
import Profiles from "components/common/selectprofiles.js";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ManageProfiles() {
  return (
    <>
      <Header display={0} />
      <Profiles manage />
    </>
  );
}
