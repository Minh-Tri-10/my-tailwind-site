import React from "react";
import { observer } from "mobx-react-lite";
import { cartStore } from "../stores/cartStore";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = ({ setOpenCart }: any) => {
  const { user, signOut } = useAuthenticator();

  return (
    <div className="pt-4 bg-dark top-0">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold cursor-pointer">Shopping</h1>
          <div className="flex gap4 md:gap-8 items-center">
            <ThemeToggle />
            <div className="md:flex items-center gap-3 hidden">
              <span className="text-gray-500">
                Welcome, {user?.signInDetails?.loginId}
              </span>
              <div className="rounded-full border-2 border-gray-300 text-gray-500 text-3xl w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all duration-200">
                <AiOutlineUser />
              </div>
              <div>
                <button
                  onClick={signOut}
                  className="text-gray-500 hover:underline"
                >
                  Sign out
                </button>
              </div>
            </div>
            <div
              onClick={() => setOpenCart(true)}
              className="text-gray-500 text-3xl relative cursor-pointer"
            >
              <FiShoppingCart />
              <div className="absolute -top-3 -right-2 bg-red-500 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center">
                {cartStore.totalQuantity}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200 pt-4"></div>
    </div>
  );
};

export default observer(Navbar);
