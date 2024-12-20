import React from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { cartStore } from "../stores/cartStore";

interface propsType {
  id: number;
  title: string;
  img: string;
  category: string;
  price: string;
}

const ProductCart = ({ id, title, img, category, price }: propsType) => {
  const addProductToCart = () => {
    const payload = {
      id,
      img,
      title,
      price: parseFloat(price),
      quantity: 1,
    };
    cartStore.addToCart(payload);
  };

  return (
    <div className="border border-gray-200">
      <div className="text-center border-b border-gray-200">
        <img src={img} className="inline-block" alt={title} />
      </div>
      <div className="px-8 py-4">
        <div className="flex justify-center items-center gap-x-8">
          <p className="text-gray-500 text-sm font-medium">{category}</p>
          <h2 className="font-medium">{title}</h2>
        </div>
        <div className="mt-3 w-[85%]">
          <div className="flex items-center justify-between text-[#ffb21d]">
            <div className="flex items-center gap-x-1">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-2">(3 Review)</p>
          <div className="flex justify-between mt-2">
            <h2 className="font-medium text-green-700 text-xl">${price}</h2>
          </div>
        </div>
        <button
          onClick={addProductToCart}
          className="flex w-full gap-x-3 justify-center rounded-lg items-center bg-red-500 text-white mt-2 px-4 py-2 cursor-pointer hover:bg-red-600"
        >
          <AiOutlineShoppingCart size={24} /> Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
