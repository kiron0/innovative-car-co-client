import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import { BiLeftArrowAlt } from "react-icons/bi";

const PartsDetails = () => {
  const { id } = useParams();
  const [part, setPart] = useState({});
  const [isReload, setIsReload] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const url = `http://localhost:5000/parts/${id}`;
    fetch(url)
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
  return (
    <div className="px-4 lg:px-72 py-16 mx-auto bg-base-100">
      <button
        className="btn btn-primary flex justify-center items-center text-white rounded px-4 gap-2"
        onClick={() => navigate(-1)}
        style={{ margin: "0 auto", marginBottom: "2rem" }}
      >
        <BiLeftArrowAlt className="text-2xl"></BiLeftArrowAlt>
        Back
      </button>
      <div className="card lg:card-side w-full bg-base-100 shadow-xl py-2">
        <figure>
          <img
            src={part.img}
            alt="Album"
            className="lg:w-1/2 w-full lg:h-auto h-full object-cover object-center rounded-lg"
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
          <div className="card-actions justify-center py-4">
            <button className="btn btn-primary text-white">Buy Now</button>
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
