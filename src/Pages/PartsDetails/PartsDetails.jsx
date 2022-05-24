import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import { BiLeftArrowAlt } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.init";
import "./PartsDetails.css";

const PartsDetails = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [part, setPart] = useState({});
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(100);
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    const url = `http://localhost:5000/parts/${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [id, isReload]);
  if (!part.img) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  const { _id, title, img, price, available, description, minimum } = part;

  const handleAddToCart = () => {
    if (Number(available) < Number(inputValue)) {
      return toast.error("Product not available!");
    }
    const totalProduct = Number(available) - Number(inputValue);

    const booking = {
      Id: _id,
      title,
      price,
      img,
      minimum: inputValue,
      user: user?.email,
    };
    fetch(`http://localhost:5000/order`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Product added to cart!");
        } else {
          toast.error("Product already in cart!");
        }
        setIsReload(!isReload);
      });

    const updateParts = {
      img,
      description,
      title,
      price,
      minimum: Number(minimum),
      available: totalProduct,
    };

    fetch(`http://localhost:5000/parts/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateParts),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return toast.error(data.error);
        }
        setIsReload(!isReload);
      });
  };

  const up = () => {
    const quantity = Number(inputValue) + 1;
    if (quantity > Number(part.available)) {
      return toast.error("sorry product not available");
    }
    setInputValue(quantity);
  };
  const down = () => {
    const downQuantity = Number(inputValue) - 1;
    if (downQuantity < Number(part.minimum)) {
      return toast.error(`sorry minimum order ${part.minimum}`);
    }
    setInputValue(downQuantity);
  };

  return (
    <div className="px-4 lg:px-72 py-16 mx-auto bg-base-100">
      <button
        className="btn btn-primary flex justify-center items-center text-white rounded px-4 gap-2 mb-[2.5rem]"
        onClick={() => navigate(-1)}
      >
        <BiLeftArrowAlt className="text-2xl"></BiLeftArrowAlt>
        Back
      </button>
      <div className="card lg:card-side w-full bg-base-100 shadow-xl py-2">
        <figure>
          <img
            src={part.img}
            alt="Album"
            className="lg:w-3/4 w-full lg:h-auto h-full object-cover object-center rounded-lg"
          />
        </figure>
        <div className="card-body lg:w-3/4 w-full lg:py-20 mb-6 lg:mb-0">
          <h2 className="card-title text-3xl pb-4">{part.title}</h2>
          <p className="card-text font-bold text-xl pb-2">
            Price: <span className="text-primary">${part.price}</span>
          </p>
          <p className="card-text leading-relaxed pb-4">{part.description}</p>
          <p className="card-text font-bold pb-2">
            Minimum: <span className="text-primary">{part.minimum} parts</span>
          </p>
          <p className="card-text font-bold">
            Available:{" "}
            <span className="text-primary">{part.available} parts</span>
          </p>
          <div class="action-top d-sm-flex mt-8">
            <div class="pro-qty mr-3 mb-4 mb-sm-0">
              <label for="quantity" class="sr-only">
                Quantity
              </label>
              <input
                onChange={(e) => {
                  if (
                    Number(e.target.value) > Number(part.available) ||
                    Number(e.target.value) < 0
                  ) {
                    return toast.error("Sorry, Product not available!");
                  } else {
                    return setInputValue(e.target.value);
                  }
                }}
                type="number"
                min={part.minimum}
                max={part.available}
                id="quantity"
                title="Quantity"
                value={inputValue}
              />
              <button
                onClick={up}
                class="inc qty-btn bts flex justify-center items-center"
              >
                +
              </button>
              <button
                onClick={down}
                class="dec qty-btn bts flex justify-center items-center"
              >
                -
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              class="btn btn-primary text-white rounded-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate("/manageAll")}
        style={{ marginTop: "5rem", marginBottom: "5rem" }}
        className="btn btn-primary mx-auto block text-white"
      >
        Manage All Parts
      </button>
    </div>
  );
};

export default PartsDetails;
