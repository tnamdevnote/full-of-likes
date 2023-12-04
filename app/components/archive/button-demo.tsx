"use client";

import React, { useEffect, useState } from "react";
import LikeIcon from "../likeIcon";
import LikeIconSkeleton from "./likeIconSkeleton";
import LikeIconTwo from "./likeIconTwo";

function ButtonDemo() {
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
    if (count === 3) {
      setCountDirection("down");
    }
    if (count === 0) {
      setCountDirection("up");
    }
  }, [count]);
  console.log(count);
  return (
    <div className="flex w-full justify-around">
      <button
        className="flex h-20 w-52 gap-4"
        type="button"
        onClick={handleClick}
      >
        <div>
          <LikeIcon likes={count} />
        </div>
        <div>
          <LikeIconSkeleton likes={count} />
        </div>
        <div>
          <LikeIconTwo likes={count} />
        </div>
      </button>

      <span className="self-end text-xl text-white">{count}</span>
    </div>
  );
}

export default ButtonDemo;
