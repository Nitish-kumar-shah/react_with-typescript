import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="bg-teal-300 h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl flex items-center justify-center w-full text-center">
        <span className="mr-5 mb-2">Count:</span> <IoIosArrowDroprightCircle />
        <IoIosArrowDroprightCircle className="mr-5" />
        {count}
      </h1>
      <div className="mt-8 flex gap-8 text-[16px]">
        <button
          onClick={handleIncrease}
          className="border-[1px] px-2 hover:scale-125  transition duration-300 select-none cursor-pointer"
        >
          Increase
        </button>
        <button
          onClick={handleDecrease}
          className="border-[1px] px-2 hover:scale-125  transition duration-300 select-none cursor-pointer"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(0)}
          className="border-[1px] px-2 hover:scale-125  transition duration-300 select-none cursor-pointer"
        >
          Reset
        </button>
      </div>
      <p className="mt-7 text-sm sm:text-base">created by @nitish</p>
    </div>
  );
};

export default Counter;
