import React, { useState } from "react";

const NewCustomer = ({ onAdd }) => {
  const [customer, setCustomer] = useState(0);
  return (
    <div className="flex flex-row gap-2">
      <input
        className=" border border-gray-300 rounded-lg"
        type="number"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
      />
      <input
        type="button"
        value={"Add"}
        className="p-2 bg-slate-400 rounded-lg "
        onClick={() => onAdd(customer)}
      />
    </div>
  );
};

export default NewCustomer;
