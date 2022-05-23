import React from "react";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useParts from "../../hooks/useParts";

const AllParts = () => {
  const [parts] = useParts();
  const navigate = useNavigate();
  const navigateToPartsDetail = (id) => {
    navigate(`/allParts/${id}`);
  };
  return (
    <div className="py-24 lg:px-12">
      <h1 className="text-3xl lg:text-4xl text-center font-bold pb-16">
        Our Awesome <span className="text-primary">Services</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 mx-auto px-6 md:px-10 lg:px-28">
        {parts.map(
          ({ _id, img, title, description, price, minimum, available }) => (
            <div className="card w-full bg-base-100 px-4 shadow-lg" key={_id}>
              <figure>
                <img src={img} alt="" className="rounded-xl w-60" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className="card-text font-bold">
                  Price: <span className="text-primary">${price}</span>
                </p>
                <p className="card-text font-bold">
                  Minimum: <span className="text-primary">{minimum} parts</span>
                </p>
                <p className="card-text font-bold">
                  Available:{" "}
                  <span className="text-primary">{available} parts</span>
                </p>
                <p className="card-text">
                  {description?.slice(0, 80)}
                  {description?.length > 100 && (
                    <span title={`${description}`}>...read more</span>
                  )}
                </p>
                <div className="flex justify-center items-center gap-4">
                  <button className="btn btn-primary flex mx-auto mt-4 text-white rounded px-6">
                    Buy Now
                  </button>
                  <FaRegEye
                    onClick={() => navigateToPartsDetail(_id)}
                    className="text-3xl text-primary mt-4 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AllParts;
