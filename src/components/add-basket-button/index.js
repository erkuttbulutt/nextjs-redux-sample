"use client";
import { useDispatch } from "react-redux";
import { actions } from "@/store/basket-store";

const AddBasketButton = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddBasket = () => {
    dispatch(actions.addToBasket(product));
  };

  return <button onClick={handleAddBasket}>Add to basket</button>;
};

export default AddBasketButton;
