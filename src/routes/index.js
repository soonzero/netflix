import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "routes/main";
import Registration from "routes/registration";
import RegForm from "./regform";

export default function RootRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup/registration" element={<Registration />} />
        <Route path="/signup/regform" element={<RegForm />} />
      </Routes>
    </Router>
  );
}
