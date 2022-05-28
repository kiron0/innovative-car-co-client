import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import useTitle from "../../../hooks/useTitle";
import Loader from "../../Shared/Loader/Loader";
import ProductsRow from "./ProductsRow";
const ManageProducts = () => {
  useTitle("Manage Product");
  const [modalProduct, setModalProduct] = useState({});
  const { data, isLoading, refetch } = useQuery(["products"], () =>
    fetch(`http://localhost:5000/parts`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const productData = data;
  //   const totalStock =
  //     Number(modalProduct.availableQty);

  /* Handle Update Stock Product */
  const [stock, setStock] = useState("");

  const handleUpdateStock = async (event) => {
    event.preventDefault();

    if (stock === "") {
      toast.error("Please Enter Stock!");
      return;
    }
    if (stock < 0) {
      toast.error("Stock can't be negative!");
      return;
    }

    await fetch(
      `http://localhost:5000/parts/update-stock/${modalProduct._id}`,
      {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          availableQty: Number(stock),
        }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          toast.success(
            `${modalProduct?.productName} product updated successfully`
          );
          refetch();
          setModalProduct(null);
          setStock("");
        }
      });
  };

  return (
    <div className="p-4">
      <div className="title my-2 mb-6">
        <h3 className="text-2xl font-semibold">Manage Products</h3>
        <span>You can manage all the product which one ordered users</span>
      </div>
      <div className="overflow-x-auto">
        {isLoading ? (
          <Loader />
        ) : productData.length > 0 ? (
          <>
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Creator</th>
                  <th>Available Quantity</th>
                  <th>Maximum Order Quantity</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Stock Manage</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((product, ind) => (
                  <ProductsRow
                    key={product._id}
                    {...product}
                    serialize={ind}
                    refetch={refetch}
                    setModalProduct={setModalProduct}
                  />
                ))}
              </tbody>
            </table>
          </>
        ) : (
          "No product available yet."
        )}
      </div>
      {modalProduct && (
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">{modalProduct?.productName}</h3>
              <p>Update Your Product Quantity From Here</p>
              <form onSubmit={handleUpdateStock} action="" className="my-2">
                <div className="my-4">
                  <label htmlFor="stock">Update Available Quantity</label>
                  <input
                    type="number"
                    placeholder="Put Your Quantity"
                    className="input input-bordered w-full my-3"
                    id="stock"
                    value={stock}
                    onChange={(event) => setStock(event.target.value)}
                  />
                </div>
                <div className="text-right">
                  <button className="btn text-white">Update Stock</button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageProducts;
