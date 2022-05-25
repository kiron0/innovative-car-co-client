import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import auth from "../../Firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../hooks/useToken";
import useFirebase from "../../../hooks/useFirebase";

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { user } = useFirebase();
  const [createUserWithEmailAndPassword, userEmail, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(userEmail || user || gUser);
  const navigate = useNavigate();

  let signInError;

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  if (error || gError || updateError) {
    signInError = (
      <p className="text-red-500">
        <small>
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }

  if (token) {
    navigate("/", { replace: true });
    toast.success("User created successfully");
  }

  // create a new user
  const handleCreateUser = async (event) => {
    event.preventDefault();
    const displayName = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(auth?.currentUser, { displayName: displayName }).then(
          () => {
            toast.success(`Creating & SignIn successfully done.`);
          }
        );
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message?.split(":")[1]);
      });
  };

  return (
    <div className="flex h-screen justify-center items-center px-4 lg:px-12">
      <div className="card w-full max-w-md bg-base-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Create an account</h2>
          <form onSubmit={handleCreateUser}>
            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-sm"
                name="username"
                required
              />
            </div>

            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-sm"
                name="email"
                required
              />
            </div>
            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-sm"
                name="password"
                required
              />
            </div>

            {signInError}
            <input
              className="btn w-full max-w-sm text-white btn-primary"
              type="submit"
              value="Sign Up"
            />
          </form>
          <p className="text-center font-semibold">
            <small>
              Already have an account?{" "}
              <Link className="text-primary" to="/login">
                Login
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline border-primary flex items-center content-center rounded-full hover:btn-primary"
          >
            <FcGoogle className="text-2xl mr-2"></FcGoogle>Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
