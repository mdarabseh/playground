import React from "react";
import Customer from "./Customer.js";

const CustomerQueue = ({ queue }) => {
  return (
    <div className="flex flex-col items-center gap-5 mt-3">
      {queue.map((customer, index) => {
        return <Customer key={index} NumberOfCartItems={customer} />;
      })}
    </div>
  );
};

export default CustomerQueue;
