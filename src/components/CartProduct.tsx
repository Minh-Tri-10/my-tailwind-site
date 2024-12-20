import React from "react";
import { RxCross1 } from "react-icons/rx";
import { cartStore } from "../stores/cartStore";

interface propsType {
  id: number;
  img: string;
  title: string;
  price: number;
  quantity: number;
}

const CartProduct: React.FC<propsType> = ({
  id,
  img,
  title,
  price,
  quantity,
}) => {
  const newPrice = Math.ceil(price * 0.9);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img src={img} className="h-[80px]" alt="" />
        <div className="space-y-2">
          <h2 className="font-medium">{title}</h2>
          <p className="text-gray-600 text-sm">
            {quantity} x ${newPrice}
          </p>
        </div>
      </div>
      <div
        onClick={() => cartStore.removeFromCart(id)}
        className="cursor-pointer"
      >
        <RxCross1 />
      </div>
    </div>
  );
};

export default CartProduct;
