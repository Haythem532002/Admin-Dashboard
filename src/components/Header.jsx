import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400  text-lg ">{category}</p>
      <p className="text-3xl tracking-tight text-slate-900 font-extrabold">
        {title}
      </p>
    </div>
  );
};

export default Header;
