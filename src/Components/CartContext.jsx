import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [prod, setProd] = useState([]);

  const addToCart = (product) => {
    setProd([...prod, product]);
  };

  return (
    <CartContext.Provider value={{ prod, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
