import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/my-orders?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setOrders(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user, isReload, navigate]);

  const handleDelete = (id) => {
    Swal.fire({
      text: "Are you sure you want to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Deleted!", "Your order has been deleted.", "success");
        fetch(`http://localhost:5000/order/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setOrders(orders.filter((order) => order._id !== id));
            }
            setIsReload(!isReload);
          });
      }
    });
  };

  if (orders.length === 0) {
    return (
      <div className="text-center w-96 mx-auto">
        <div className="alert alert-warning shadow-lg" role="alert">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>You don't have any item in your cart</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center bg-base-300 rounded-lg">
      <h2 className="text-5xl">My Orders: {orders.length}</h2>
      {
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 mx-auto px-6 md:px-10 lg:px-28">
          {orders.map((order) => (
            <div key={order._id} className="flex flex-col">
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <h3 className="text-2xl">Order ID: {order._id}</h3>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(order._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default MyOrders;
