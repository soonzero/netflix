import { GlobalStyle } from "components/common/styled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "routes/main";
import SignUp from "./signup";
import Registration from "routes/registration";
import RegForm from "./regform";
import PlanForm from "./planform";
import Login from "./login";
import Payment from "./payment";
import CreditOption from "./creditoption";
import EditPlan from "./editplan";

export default function RootRoute() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/registration" element={<Registration />} />
        <Route path="/signup/regform" element={<RegForm />} />
        <Route path="/signup/planform" element={<PlanForm />} />
        <Route path="/signup/payment" element={<Payment />} />
        <Route path="/signup/creditoption" element={<CreditOption />} />
        <Route path="/signup/editplan" element={<EditPlan />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
