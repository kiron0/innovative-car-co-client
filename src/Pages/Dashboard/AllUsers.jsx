import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import UserDeleteConfirmModal from "./UserDeleteConfirmModal";
import UserRow from "./UserRow";

const AllUsers = () => {
  const [deletingUser, setDeletingUser] = useState(null);
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-10 py-10 bg-base-300 h-screen rounded-md">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UserRow
                index={index}
                key={user._id}
                user={user}
                refetch={refetch}
                setDeletingUser={setDeletingUser}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingUser && (
        <UserDeleteConfirmModal
          deletingUser={deletingUser}
          setDeletingUser={setDeletingUser}
        ></UserDeleteConfirmModal>
      )}
    </div>
  );
};

export default AllUsers;
