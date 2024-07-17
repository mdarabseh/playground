import React from "react";

const Customer = ({ NumberOfCartItems }) => {
  return (
    <div className="text-center content-center w-16 h-16 bg-violet-500 border rounded-full border-violet-800 text-3xl">
      {NumberOfCartItems}
    </div>
  );
};

export default Customer;
