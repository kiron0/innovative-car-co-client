import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import auth from "../Firebase/firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="navbar-start w-20 mt-12">
          <label
            tabIndex="1"
            htmlFor="dashboard-sidebar"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <h2 className="text-2xl font-bold text-purple-500 py-12 px-2">
          Welcome back, {user?.displayName}
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content py-20">
          {/* <!-- Sidebar content here --> */}
          {user ? (
            <>
              <li className="py-2">
                <NavLink to="/dashboard">My Orders</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/dashboard/review">My Reviews</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/dashboard/history">My Profile</NavLink>
              </li>
            </>
          ) : (
            <></>
          )}
          {admin ? (
            <>
              <li>
                <NavLink to="/dashboard/allUsers">Manage All Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addDoctor">Add a Product</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/make-admin">Make A Admin</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageDoctor">Manage Products</NavLink>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
