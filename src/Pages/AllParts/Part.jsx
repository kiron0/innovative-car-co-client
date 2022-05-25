import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const { _id, title, price, description, minimum, available, img } = part;

  const navigate = useNavigate();
  const navigateToPartsDetail = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
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
          Available: <span className="text-primary">{available} parts</span>
        </p>
        <p className="card-text">
          {description?.slice(0, 80)}
          {description?.length > 100 && (
            <span title={`${description}`}>...read more</span>
          )}
        </p>
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => navigateToPartsDetail(_id)}
            className="btn btn-primary flex mx-auto mt-4 text-white rounded px-6"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;
