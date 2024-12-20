import React from "react";
import { observer } from "mobx-react-lite";
import { cartStore } from "../stores/cartStore";
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";

const Cart = ({ setOpenCart }: any) => {
  return (
    <div className="fixed left-0 top-0 z-20 overflow-y-scroll bg-[#0000007d] w-full min-h-screen">
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
        <div
          onClick={() => setOpenCart(false)}
          className="absolute right-0 top-0 m-6 text-2xl cursor-pointer text-gray-500 hover:text-red-500"
        >
          <RxCross1 />
        </div>
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          Your Cart
        </h3>
        <div className="text-black">
          {cartStore.products.map((item) => (
            <CartProduct
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div className="flex justify-between items-center font-medium text-xl text-black py-4">
          <p>Total</p>
          <p>${cartStore.totalPrice}.00</p>
        </div>
        <div>
          <button className="bg-red-500 text-white text-center w-full rounded-md py-2 hover:bg-red-600 my-4">
            View Cart
          </button>
          <button className="bg-red-500 text-white text-center w-full rounded-md py-2 hover:bg-red-600">
            Check Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default observer(Cart);
