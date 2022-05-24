import React from "react";
import { Link } from "react-router-dom";

const AlertModal = () => {
  return (
    <div>
      <label for="buy-modal" class="btn modal-button">
        open modal
      </label>

      <input type="checkbox" id="buy-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="buy-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            <Link to="/login">✕</Link>
          </label>
          <h3 class="text-lg font-bold">Please Login First!</h3>
          <p class="py-4">We want you to login first then take our service.</p>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
