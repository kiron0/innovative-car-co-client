import React from "react";

const UserRow = ({ user, setDeletingUser, index }) => {
  const { email, role } = user;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{role}</td>
      <td>
        <label
          onClick={() => setDeletingUser(user)}
          htmlFor="user-delete-confirm-modal"
          className="btn btn-xs btn-primary text-white"
        >
          Delete User
        </label>
      </td>
    </tr>
  );
};

export default UserRow;
