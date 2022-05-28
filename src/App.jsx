import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import ResetPassword from "./Pages/Login/ResetPassword";
import AllParts from "./Pages/AllParts/AllParts";
import PartsDetails from "./Pages/PartsDetails/PartsDetails";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import AllUsers from "./Pages/Dashboard/AllUsers";
import MyOrders from "./Pages/Dashboard/MyOrders";
import RequireAdmin from "./Pages/Login/RequireAdmin/RequireAdmin";
import AddProduct from "./Pages/Dashboard/AddProduct";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import AddReview from "./Pages/Dashboard/AddReview";
import WelcomeDashboard from "./Pages/Dashboard/WelcomeDashboard";
import Payment from "./Pages/Dashboard/Payment/Payment";
import ManageOrder from "./Pages/Dashboard/ManageOrder/ManageOrder";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import BlogDetails from "./Pages/Blogs/BlogDetails";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import ManageReviews from "./Pages/Dashboard/ManageReviews/ManageReviews";
import ScrollButton from "./Pages/Shared/ScrollButton/ScrollButton";

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
        <div id="preloader">
          <div id="loader"></div>
        </div>
      ) : (
        <Navbar handleThemeChange={handleThemeChange} theme={theme} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/allParts" element={<AllParts />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <PartsDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<WelcomeDashboard></WelcomeDashboard>}></Route>
          <Route path="my-orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route
            path="payment/:paymentId"
            element={
              <RequireAuth>
                <Payment></Payment>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="allUsers"
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageOrder"
            element={
              <RequireAdmin>
                <ManageOrder></ManageOrder>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageReviews"
            element={
              <RequireAdmin>
                <ManageReviews></ManageReviews>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollButton></ScrollButton>
      <Toaster />
    </div>
  );
}

export default App;
