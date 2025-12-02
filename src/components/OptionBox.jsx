import React from "react";
import { Check } from "lucide-react";

const OptionBox = ({ text, tickValue, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`border p-2 rounded-md cursor-pointer flex justify-between items-center
        transition-all duration-150 w-full
        ${tickValue ? " border-indigo-900" : "hover:bg-indigo-900 hover:translate-x-2.5"}`}
    >
      <span>{text}</span>

      {/* Tick mark */}
      <span className="text-lg font-bold text-indigo-900 border-[2px] w-[20px] h-[20px] shrink-0 rounded-[4px]">
        {tickValue && <Check className="w-full h-full text-indigo-600"/>}
      </span>
    </div>
  );
};

export default OptionBox;
