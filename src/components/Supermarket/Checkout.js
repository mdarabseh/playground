import React from "react";

const Checkout = ({ number, totalItems }) => {
  return (
    <div className="text-center content-center w-32 h-32 bg-green-600 border rounded border-green-800 text-5xl">
      {number}
      <div className="text-lg">{totalItems}</div>
    </div>
  );
};

export default Checkout;
