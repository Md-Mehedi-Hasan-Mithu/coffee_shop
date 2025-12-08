import React from 'react';
import { useLoaderData } from 'react-router-dom';
const CoffeeDetails = () => {
    const coffee  = useLoaderData();
  return (
    <div className="coffee-details">
      <h2>{coffee.name}</h2>
      <img src={coffee.photo} alt={coffee.name} />
      <p>Quantity: {coffee.quantity}</p>
      <p>Supplier: {coffee.supplier}</p>
      <p>Flavor: {coffee.taste}</p>
      <p>Price: ${coffee.price}</p>
      <p>Details: {coffee.details}</p>
    </div>
  );
};

export default CoffeeDetails;