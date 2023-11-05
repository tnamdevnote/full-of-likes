"use client";

import React, { useEffect, useState } from "react";
import LikeIcon from "./likeIcon";
import LikeIconSkeleton from "./likeIconSkeleton";
import LikeIconTwo from "./likeIconTwo";
import { Heart } from "react-feather";

function Button() {
  const [count, setCount] = useState(0); //temporary clientside state
  const [countDirection, setCountDirection] = useState("up");

  const handleClick = () => {
    if (countDirection === "up") {
      setCount((count) => count + 1);
    } else {
      setCount((count) => count - 1);
    }
  };

  useEffect(() => {
    if (count === 5) {
      setCountDirection("down");
    }
    if (count === 0) {
      setCountDirection("up");
    }
  }, [count]);

  return (
    <div className="flex w-60 gap-6 p-8">
      <button
        className="relative h-20 w-20 rounded-full p-3 transition-transform hover:scale-[1.1] hover:bg-zinc-400/10 hover:shadow-md active:scale-[1]"
        type="button"
        onClick={handleClick}
      >
        <LikeIcon likes={count} />
      </button>

      <span className="self-end text-xl text-white">{count}</span>
    </div>
  );
}

export default Button;
