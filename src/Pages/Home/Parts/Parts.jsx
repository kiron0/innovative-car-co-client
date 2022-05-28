import { useNavigate } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
import TItle from "../../Shared/Title/Title";
import { useQuery } from "react-query";

const Parts = () => {
  const navigate = useNavigate();

  const { data: parts, isLoading } = useQuery("allParts", async () => {
    const res = await fetch(
      "https://innovative-cars-co.herokuapp.com/parts?sort=1",
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    const data = await res.json();
    return data;
  });

  if (isLoading || !parts || parts?.length === 0 || parts === undefined) {
    return <Loader />;
  }

  return (
    <div className="py-28 lg:px-12">
      <TItle title="Our Awesome Parts" subTitle="What Parts we can provide?" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto px-6 md:px-10 lg:px-16 py-8">
        {parts
          ?.slice(0, 4)
          ?.map(
            ({
              _id,
              image,
              productName,
              productDescription,
              price,
              orderQty,
              availableQty,
            }) => (
              <div className="card bg-base-100 shadow-xl" key={_id}>
                <figure>
                  <img src={image} className="h-52" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {productName}
                    <div className="badge badge-secondary text-white">NEW</div>
                  </h2>
                  <p>{productDescription?.slice(0, 60)}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-ghost bg-base-300">
                      <span title="Minimum Order Quantity">MOQ</span>-{" "}
                      {orderQty}pcs
                    </div>
                    <div className="badge badge-ghost bg-base-300">
                      Available- {availableQty}pcs
                    </div>
                    <div className="badge badge-ghost bg-base-300">
                      {price}$
                    </div>
                  </div>
                  <div className="card-actions justify-end mt-2">
                    <button
                      onClick={() => navigate(`/purchase/${_id}`)}
                      className="btn btn-primary text-white mt-4"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Parts;
