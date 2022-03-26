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
import Browse from "./browse";
import ManageProfiles from "./manageprofile";
import Logout from "./logout";
import MyList from "./mylist";
import Latest from "./latest";
import Series from "pages/series";
import Movies from "pages/movies";
import YourAccount from "./youraccount";
import New from "components/common/new";

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
        <Route path="/logout" element={<Logout />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/browse/my-list" element={<MyList />} />
        <Route path="/ManageProfiles" element={<ManageProfiles />} />
        <Route path="/browse/genre/83" element={<Series />} />
        <Route path="/browse/genre/34399" element={<Movies />} />
        <Route path="/YourAccount" element={<YourAccount />} />
      </Routes>
    </Router>
  );
}
