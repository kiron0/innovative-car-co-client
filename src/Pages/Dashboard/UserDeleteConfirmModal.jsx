import React from "react";
import { toast } from "react-hot-toast";

const UserDeleteConfirmModal = ({ deletingUser, refetch, setDeletingUser }) => {
  const { email } = deletingUser;
  const handleUserDelete = () => {
    fetch(`http://localhost:5000/user/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`User: ${email} is deleted.`);
          setDeletingUser(null);
          // refresh the page
          refetch();
        } else {
          toast.error(`User: ${email} is not deleted.`);
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="user-delete-confirm-modal"
        class="modal-toggle"
      />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete {email}?
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <button
              onClick={() => handleUserDelete()}
              class="btn btn-xs btn-error"
            >
              Delete
            </button>
            <label for="user-delete-confirm-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDeleteConfirmModal;
