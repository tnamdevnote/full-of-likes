"use client";

import React, { useEffect, useState } from "react";
import LikeIcon from "./likeIcon";
import LikeIconSkeleton from "./likeIconSkeleton";
import LikeIconTwo from "./likeIconTwo";
import { Heart } from "react-feather";

function Button() {
  const [count, setCount] = useState(0); //temporary clientside state
  const [isCountUp, setIsCountUp] = useState(true);

  const handleIncrement = () => {
    if (count < 5) {
      setCount((count) => count + 1);
      setIsCountUp(true);
    }
  };
  const handleDecrement = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (count > 0) {
      setCount((count) => count - 1);
      setIsCountUp(false);
    }
  };

  console.log(count, isCountUp);
  return (
    <div className="flex w-60 gap-6 p-8">
      <button
        className="relative h-16 w-16 origin-center rounded-xl antialiased transition-transform duration-300 hover:scale-[1.3] focus-visible:scale-[1.3] active:scale-[1.1]"
        type="button"
        onClick={handleIncrement}
        onContextMenu={handleDecrement}
      >
        <LikeIcon likes={count} />
      </button>
      <div className="relative self-end">
        <span
          key={count}
          className="animate-counter absolute -translate-y-8 text-zinc-600 opacity-0"
        >
          {isCountUp ? "+1" : "-1"}
        </span>
        <span className="text-xl text-zinc-600">{count}</span>
      </div>
    </div>
  );
}

export default Button;
