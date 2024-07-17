import React from "react";
import Checkout from "./Checkout.js";
import CustomerQueue from "./CustomerQueue.js";

const CheckoutList = ({ checkouts }) => {
  return (
    <div className="flex flex-row gap-20">
      {checkouts.map((checkout) => {
        const totalItems =
          checkout.customers.length === 0
            ? 0
            : checkout.customers.reduce((a, v) => Number(a) + Number(v));

        return (
          <div key={checkout.id}>
            <Checkout number={checkout.id} totalItems={totalItems} />
            <CustomerQueue queue={checkout.customers} />
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutList;
