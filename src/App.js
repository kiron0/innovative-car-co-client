import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import ResetPassword from "./Pages/Login/ResetPassword";
import preloader from "./Assets/preloader.gif";
import AllParts from "./Pages/AllParts/AllParts";
import PartsDetails from "./Pages/PartsDetails/PartsDetails";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  const [theme, setTheme] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };

  return (
    <div data-theme={theme && "night"} className="App">
      {loading ? (
        <div className="preloader">
          <img src={preloader} alt="" loading={loading} />
        </div>
      ) : (
        <Navbar handleThemeChange={handleThemeChange} theme={theme} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/allParts" element={<AllParts />} />
        <Route path="/allParts/:id" element={<PartsDetails />} />
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
