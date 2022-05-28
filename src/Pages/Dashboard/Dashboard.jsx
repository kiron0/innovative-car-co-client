import React from "react";
import { toast } from "react-hot-toast";
import { BsGrid } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import auth from "../Firebase/firebase.init";
import useTitle from "../../hooks/useTitle";

const Dashboard = () => {
  useTitle("Dashboard");
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const handleLogOut = async () => {
    await signOut(auth).then(() => {
      toast.success(`Sign Out successfully.`);
      localStorage.removeItem("accessToken");
    });
  };
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-3 md:p-3">
        <div className="header z-50 sticky top-0 flex justify-between items-center bg-base-300 p-4 rounded">
          <label
            htmlFor="dashboard-sidebar"
            className="btn bg-base-300 text-black hover:text-white drawer-button lg:hidden "
          >
            <BsGrid className="text-2xl" />
          </label>
          <Link to="/" className="text-xl lg:text-2xl font-semibold">
            Innovative Cars Co.
          </Link>
          <div className="dropdown dropdown-end">
            <label
              tabIndex="0"
              className="btn btn-ghost btn-circle avatar online"
            >
              <div
                style={{ display: "grid" }}
                className="w-10 h-10  place-items-center rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
              >
                {auth?.currentUser?.photoURL ? (
                  <img
                    src={auth?.currentUser?.photoURL}
                    alt={auth?.currentUser?.displayName}
                  />
                ) : (
                  <span>{auth?.currentUser?.displayName?.slice(0, 1)}</span>
                )}
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
          <div className="flex flex-col items-center gap-3 text-2xl p-2 border-b pb-5">
            <Link
              to="/"
              className="logo font-semibold text-center flex items-center flex-col gap-2"
            >
              <AiFillCar className="text-3xl" />
              Innovative Cars Co.
            </Link>
            <button onClick={handleLogOut} className="btn btn-xs btn-outline">
              LogOut
            </button>
          </div>
          <li className="py-2 mt-4">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          {!admin && (
            <>
              <li className="py-2">
                <NavLink to="/dashboard/my-orders">My Orders</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/dashboard/addReview">Add a review</NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to="/dashboard/profile">Profile</NavLink>
          </li>
          {admin && (
            <>
              <li className="py-2">
                <NavLink to="/dashboard/addProduct">Add a Product</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/dashboard/makeAdmin">Make A Admin</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/dashboard/allUsers">Manage Users</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/dashboard/manageOrder">Manage Orders</NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/dashboard/manageProducts">
                  Manage Products
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink to="/dashboard/manageReviews">Manage Reviews</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
