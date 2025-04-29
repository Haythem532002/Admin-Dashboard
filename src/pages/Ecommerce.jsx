import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

import { GoDotFill } from "react-icons/go";

import { Button } from "../components";

import { earningData } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-white dark:text-gray-200
                    dark:bg-secondary-dark-bg 
                    h-44 rounded-xl w-full 
                    lg:w-80 p-8 pt-9 m-3 
                    bg-hero-pattern bg-no-repeat bg-cover bg-center"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448,78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              size="md"
              text="Download"
              borderRadius="10px"
            ></Button>
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-xl"
            >
              <button
                type="button"
                className="p-4
              rounded-full text-2xl mb-2 opacity-0.9
              hover:drop-shadow-xl"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
              >
                {item.icon}
              </button>
              <div className="mb-2">
                <span className="mr-2 text-lg font-semibold">
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor}`}>
                  {item.percentage}
                </span>
              </div>
              <p className="text-sm mt-1 text-gray-400">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white text-gray-600 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expenses</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl rounded-full cursor-pointer text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,487</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-6">
                <Button
                  color="white"
                  bgColor={currentColor}
                  size="md"
                  text="Download Report"
                  borderRadius="10px"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
