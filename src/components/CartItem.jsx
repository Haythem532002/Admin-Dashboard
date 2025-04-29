import React from "react";
const CartItem = ({ image, name, category, price }) => {
  return (
    <div className="p-5 border-b-black flex justify-between items-center">
      <img src={`../data/${image}.jpg`} alt="im" />
    </div>
  );
};

export default CartItem;
