import React, { useEffect, useState } from "react";
import CheckoutList from "./CheckoutList.js";
import NewCustomer from "./NewCustomer.js";

const initialCheckouts = [
  { id: 1, customers: [3, 3, 6, 4] },
  { id: 2, customers: [5, 2] },
  { id: 3, customers: [] },
  { id: 4, customers: [6, 2, 8] },
];

const Supermarket = () => {
  const [checkouts, setCheckouts] = useState(initialCheckouts);

  useEffect(() => {
    const serveCustomers = () => {
      setCheckouts((prevCheckouts) => {
        return prevCheckouts.map((checkout) => {
          const serveQueue = checkout.customers.map((item, index) => {
            if (index === 0) return item - 1;
            return item;
          });
          const updatedQueue = serveQueue.filter((item) => item > 0);
          return {
            ...checkout,
            customers: updatedQueue,
          };
        });
      });
    };

    const intervalId = setInterval(serveCustomers, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleAddNewCustomer = (customer) => {
    if (customer === 0) return;

    setCheckouts((prevCheckouts) => {
      let lowestValue = Number.MAX_SAFE_INTEGER;
      let checkoutId = 1;

      prevCheckouts.forEach((checkout) => {
        const totalItems = checkout.customers.reduce(
          (a, v) => Number(a) + Number(v),
          0
        );

        if (totalItems < lowestValue) {
          lowestValue = totalItems;
          checkoutId = checkout.id;
        }
      });

      const updatedCheckouts = prevCheckouts.map((checkout) => {
        if (checkout.id === checkoutId) {
          return {
            ...checkout,
            customers: [...checkout.customers, customer],
          };
        }
        return checkout;
      });

      return updatedCheckouts;
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <NewCustomer onAdd={handleAddNewCustomer} />
      <CheckoutList checkouts={checkouts} />
    </div>
  );
};

export default Supermarket;
