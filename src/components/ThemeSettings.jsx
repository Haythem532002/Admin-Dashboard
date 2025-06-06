import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400">
        <div className="flex justify-between items-center ml-4 p-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            className="text-2xl
            p-3 hover:drop-shadow-xl
            hover:bg-light-gray"
            onClick={() => {
              setThemeSettings(false);
            }}
            style={{ color: "rgb (153,171,180)", borderRadius: "50%" }}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl">Theme Options</p>
          <div className="mt-4 ">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label className="ml-2 text-md cursor-pointer" htmlFor="light">
              Light
            </label>
            <div className="mt-4 ">
              <input
                type="radio"
                id="dark"
                name="theme"
                value="Dark"
                className="cursor-pointer"
                onChange={setMode}
                checked={currentMode === "Dark"}
              />
              <label className="ml-2 text-md cursor-pointer" htmlFor="dark">
                Dark
              </label>
            </div>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl">Theme Colors</p>
          <div className="flex gap-3 ">
            {themeColors.map((item, index) => (
              <TooltipComponent
                content={item.name}
                position="TopCenter"
                key={index}
              >
                <div
                  style={{ color: item.color }}
                  className="relative mt-2 cursor-pointer flex items-center gap-5 "
                >
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
