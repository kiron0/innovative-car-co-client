import { useState } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { useQuery } from "react-query";
import auth from "../Firebase/firebase.init";
import Loading from "../Shared/Loading/Loading";

const MyProfile = () => {
  const [isShow, setIsShow] = useState(false);

  const handleUpdateProfile = async (event) => {
    event.preventDefault();
    const education = event.target.education.value;
    const number = event.target.number.value;
    const address = event.target.address.value;
    const linkedin = event.target.linkedin.value;
    const facebook = event.target.facebook.value;
    const data = { education, number, address, linkedin, facebook };
    await fetch(`http://localhost:5000/users?uid=${auth?.currentUser?.uid}`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.success) {
          toast.success(result?.message);
          event.target.reset();
          refetch();
          setIsShow(false);
        }
      });
  };

  const {
    data: result,
    isLoading,
    refetch,
  } = useQuery(["profileData", auth?.currentUser?.uid], () =>
    fetch(`http://localhost:5000/users?uid=${auth?.currentUser?.uid}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading)
    return (
      <div className="md:p-80">
        <Loading />
      </div>
    );

  const { address, education, number, linkedin, facebook } = result?.result;

  return (
    <div className="grid place-items-center py-20 px-5">
      <div className="profile-card w-full md:w-1/3 text-center shadow-lg rounded-lg bg-base-200 p-7">
        <div className="avatar w-40 h-40 rounded-full border-8 text-7xl font-semibold overflow-hidden mt-[-5rem] z-10 grid place-items-center mx-auto bg-base-200">
          {auth?.currentUser?.photoURL ? (
            <img
              src={auth?.currentUser?.photoURL}
              alt={auth?.currentUser?.displayName}
            />
          ) : (
            auth?.currentUser?.displayName.slice(0, 1)
          )}
        </div>
        <div className="info my-2">
          <h3 className="text-lg font-semibold">
            {auth?.currentUser?.displayName}
          </h3>
          <small>{auth?.currentUser?.email}</small>
        </div>
        <hr />
        <div className="details py-5">
          <ul className="flex flex-col gap-3 items-start justify-start">
            <li className="flex justify-between w-full items-center">
              Education -{" "}
              <strong>{education ? education : "Not available"}</strong>
            </li>
            <li className="flex justify-between w-full items-center">
              Phone - <strong>{number ? number : `Not available`}</strong>
            </li>
            <li className="flex w-full justify-between items-center">
              Address - <strong>{address ? address : "Not available"}</strong>
            </li>
            <li className="flex justify-between w-full items-center">
              Social -{" "}
              {facebook || linkedin ? (
                <div className="flex items-center gap-2">
                  <a target={"_blank"} href={linkedin} rel="noreferrer">
                    <FaLinkedin />
                  </a>
                  <a target={"_blank"} href={facebook} rel="noreferrer">
                    <FaFacebook />
                  </a>
                </div>
              ) : (
                "Not available"
              )}
            </li>
          </ul>
          <button
            onClick={() => setIsShow((prev) => !prev)}
            className="btn btn-link"
          >
            Edit
          </button>
        </div>
        {isShow && (
          <form
            onSubmit={handleUpdateProfile}
            className="another-info flex items-center justify-center  flex-col gap-2 my-3"
          >
            <input
              type="text"
              placeholder="Education"
              name="education"
              className="input input-bordered w-full"
              required
              defaultValue={education}
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="number"
              className="input input-bordered w-full"
              required
              defaultValue={number}
            />
            <input
              type="text"
              placeholder="City/State"
              name="address"
              className="input input-bordered w-full"
              required
              defaultValue={address}
            />
            <input
              type="text"
              placeholder="LinkedIn Account Link"
              name="linkedin"
              className="input input-bordered w-full"
              required
              defaultValue={linkedin}
            />
            <input
              type="text"
              placeholder="Facebook Account Link"
              name="facebook"
              className="input input-bordered w-full"
              required
              defaultValue={facebook}
            />
            <div className="text-center mt-3">
              <button className="btn btn-primary">Update Profile</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
