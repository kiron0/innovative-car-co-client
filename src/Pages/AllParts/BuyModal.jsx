import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import auth from "../Firebase/firebase.init";

const BuyModal = ({ allParts, setAllParts, refetch }) => {
  const { _id, img, title, price, description, available, minimum } = allParts;
  const [user] = useAuthState(auth);

  const handleBuying = (event) => {
    event.preventDefault();
    const booking = {
      Id: _id,
      title,
      price,
      img,
      available,
      description,
      minimum,
      user: user.email,
      userName: user.displayName,
    };
    fetch("http://localhost:5000/buying", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Booking Successful`);
        } else {
          toast.error(
            `Booking Failed. You have already booked this slot. Please try another slot.`
          );
        }
        setAllParts(null);
        refetch();
      });
  };

  return (
    <div>
      <input type="checkbox" id="buy-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="buy-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary py-3">
            Buying for: {title}
          </h3>
          <form
            onSubmit={handleBuying}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-sm"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-sm"
            />
            <input
              type="number"
              name="title"
              placeholder="Available"
              className="input input-bordered w-full max-w-sm"
              defaultValue={available}
              required
            />
            <input
              type="number"
              name="title"
              placeholder="Minimum"
              className="input input-bordered w-full max-w-sm"
              defaultValue={minimum}
              required
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary w-full max-w-sm text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyModal;
