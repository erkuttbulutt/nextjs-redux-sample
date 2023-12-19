"use client";
import { useSelector } from "react-redux";

const Basket = () => {
  const basket = useSelector((state) => state.basket.basket);
  
  const totalAmount = basket.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  return <div>Basket: {totalAmount.toFixed(2)}</div>;
};

export default Basket;
