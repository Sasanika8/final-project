import logo from "./logo.svg";
import "./App.css";
import RoomReq from "./pages/RoomReq.jsx";
import Admin from "./pages/Admin.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import StudentViewPage from "./pages/StudentViewPage.jsx";
import StudentRegistrationPage from "./pages/StudentRegistrationPage.jsx";
import GoogleLogin from "./pages/GoogleLogin.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<RoomReq />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<StudentViewPage />} />
        <Route path="/login" element={<GoogleLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
