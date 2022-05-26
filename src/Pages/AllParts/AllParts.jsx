import React from "react";
import Fade from "react-reveal/Fade";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Loading from "../Shared/Loading/Loading";
import TItle from "../Shared/Title/Title";
import Part from "./Part";

const AllParts = () => {
  useTitle("Shop");
  const { data: parts, isLoading } = useQuery("allParts", async () => {
    const res = await fetch("http://localhost:5000/parts", {
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

  return (
    <div className="breadcrumb pb-24">
      <div className="container mx-auto w-full py-28 bg-base-300">
        <h2 className="text-3xl text-center mb-4">Shop Page</h2>
        <div className="text-md breadcrumbs">
          <ul className="justify-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Shop </li>
          </ul>
        </div>
      </div>
      <TItle title="Our Awesome Parts" subTitle="What Parts we can provide?" />
      <Fade bottom distance="30px">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 mx-auto px-6 md:px-10 lg:px-36">
          {parts.map((part) => (
            <Part key={part._id} part={part}></Part>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default AllParts;
