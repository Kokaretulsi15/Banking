import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import AboutUs from "./components/AboutUs";
import PersonalNavbar from "./components/PersonalNavbar";
import PersonalBanking from "./components/PersonalBanking";
import SavingAccount from "./pages/SavingAccount";
import CurrentAccount from "./pages/CurrentAccount";
function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}

        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/PersonalNavbar" element={<PersonalNavbar />} />
        <Route path="/PersonalBanking" element={<PersonalBanking />} />
        <Route path="/SavingAccount" element={<SavingAccount />} />
        <Route path="/CurrentAccount" element={<CurrentAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
