import React from "react";
import { Link } from "react-router-dom";

const AlertModal = () => {
  return (
    <div>
      <label for="buy-modal" className="btn modal-button">
        open modal
      </label>

      <input type="checkbox" id="buy-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            for="buy-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            <Link to="/login">✕</Link>
          </label>
          <h3 className="text-lg font-bold">Please Login First!</h3>
          <p className="py-4">
            We want you to login first then take our service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
