import React from "react";

import { useStateContext } from "../contexts/ContextProvider";
import { MdOutlineCancel } from "react-icons/md";

import CartItem from "./CartItem";

import { cartData } from "../data/dummy";
const Cart = () => {
  const { isClicked,setIsClicked } = useStateContext();
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400">
        <div className="text-2xl flex justify-between items-center m-4 p-4">
          <p className="font-semibold">Shopping Cart</p>
          <button
            type="button"
            onClick={() => setIsClicked({...isClicked,cart:false})}
            className="text-2xl Radius-full
            p-3 hover:drop-shadow-xl
            hover:bg-light-gray"
            style={{ color: "rgb (153,171,180)", borderRadius: "50%" }}
          >
            <MdOutlineCancel />
          </button>
        </div>
        {cartData.map((item,index)=>(
          <CartItem key={index} item={item} />
        ))}

      </div>
    </div>
  );
};

export default Cart;
