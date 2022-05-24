import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import BuyModal from "./BuyModal";
import Part from "./Part";

const AllParts = () => {
  const [allParts, setAllParts] = useState(null);

  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("allParts", async () => {
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
    <div className="py-24 lg:px-12">
      <h1 className="text-3xl lg:text-4xl text-center font-bold pb-16">
        Our Awesome <span className="text-primary">Services</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 mx-auto px-6 md:px-10 lg:px-28">
        {parts.map((part) => (
          <Part key={part._id} part={part} setAllParts={setAllParts}></Part>
        ))}
      </div>
      {allParts && (
        <BuyModal
          allParts={allParts}
          setAllParts={setAllParts}
          refetch={refetch}
        ></BuyModal>
      )}
    </div>
  );
};

export default AllParts;
