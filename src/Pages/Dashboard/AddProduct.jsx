import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imgStorageKey = "ac81f9b82ae1c3ee5d904b601a455c1d";

  const onSubmit = async (data) => {
    const img = data.img[0];
    const formData = new FormData();
    formData.append("img", img);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log("img-bb", result);
        // if (result.success) {
        //   const img = result.data.url;
        //   const part = {
        //     title: data.title,
        //     img: img,
        //     price: data.price,
        //     description: data.description,
        //     minimum: data.minimum,
        //     available: data.available,
        //   };
        //   // send to your database
        //   fetch("http://localhost:5000/parts", {
        //     method: "POST",
        //     headers: {
        //       "content-type": "application/json",
        //     },
        //     body: JSON.stringify(part),
        //   })
        //     .then((res) => res.json())
        //     .then((inserted) => {
        //       if (inserted.insertedId) {
        //         toast.success("Parts added successfully");
        //         reset();
        //       } else {
        //         toast.error("Failed to add parts");
        //       }
        //     });
        // }
      });
  };

  return (
    <div className="px-10 py-10 bg-base-300 h-screen rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control bg-base-100 pl-8 pb-28 py-8 rounded-xl">
          <label className="label">
            <span className="label-text">Parts Title</span>
          </label>
          <input
            type="text"
            placeholder="Enter Title"
            class="input input-bordered w-full max-w-sm"
            {...register("title", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.title?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.title.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text">Parts Price</span>
          </label>
          <input
            type="text"
            placeholder="Enter Price"
            class="input input-bordered w-full max-w-sm"
            {...register("price", {
              required: {
                value: true,
                message: "Price is Required",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text">Parts Description</span>
          </label>
          <textarea
            class="textarea textarea-bordered w-full pb-12 max-w-sm"
            placeholder="Enter Description"
            style={{ resize: "none", height: "7rem" }}
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          ></textarea>
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text">Minimum Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Enter Minimum Quantity"
            class="input input-bordered w-full max-w-sm"
            {...register("minimum", {
              required: {
                value: true,
                message: "Minimum Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.minimum?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.minimum.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Enter Available Quantity"
            class="input input-bordered w-full max-w-sm"
            {...register("available", {
              required: {
                value: true,
                message: "Available Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.available?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.available.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-sm"
            {...register("img", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <div>
            <input
              className="btn btn-primary mt-6 px-12 text-white"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
