import React, { useState } from "react";

export default function NestedObjects() {
  const [customer, setCustomer] = useState({
    name: "john",
    address: {
      city: "Pokhara",
      zipCode: 44500,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 44501 },
    });
  };

  return (
    <div>
      <p>Zip Code: {customer.address.zipCode}</p>
      <button onClick={handleClick}>click to update zip code</button>
    </div>
  );
}
