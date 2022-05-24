import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const Parts = () => {
  const navigate = useNavigate();
  const { data: parts, isLoading } = useQuery("allParts", async () => {
    const res = await fetch("http://localhost:5000/parts?sort=1", {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    const data = await res.json();
    return data;
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const navigateToPartsDetail = (id) => {
    navigate(`/all-Parts/${id}`);
  };
  return (
    <div className="py-28 lg:px-12">
      <h1 className="text-3xl lg:text-4xl text-center font-bold pb-16">
        Our Awesome <span className="text-primary">Services</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 mx-auto px-6 md:px-10 lg:px-28">
        {parts
          .slice(0, 3)
          .map(
            ({ _id, img, title, description, price, minimum, available }) => (
              <div className="card w-full bg-base-100 px-4 shadow-lg" key={_id}>
                <span class="indicator-item badge badge-primary text-white">
                  new
                </span>
                <figure>
                  <img src={img} alt="" className="rounded-xl w-60" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{title}</h2>
                  <p className="card-text font-bold">
                    Price: <span className="text-primary">${price}</span>
                  </p>
                  <p className="card-text font-bold">
                    Minimum: <span className="text-primary">{minimum}</span>
                  </p>
                  <p className="card-text font-bold">
                    Available: <span className="text-primary">{available}</span>
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
            )
          )}
      </div>
      <Link to="/allParts">
        <button className="btn btn-primary flex mx-auto mt-16 text-white rounded px-10">
          Explore More
        </button>
      </Link>
    </div>
  );
};

export default Parts;
