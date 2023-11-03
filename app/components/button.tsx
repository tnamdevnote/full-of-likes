"use client";

import React, { useEffect, useState } from "react";
import LikeIcon from "./likeIcon";

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
    if (count === 3) {
      setCountDirection("down");
    }
    if (count === 0) {
      setCountDirection("up");
    }
  }, [count]);
  console.log(count);
  return (
    <div className="flex gap-6">
      <button className="h-20 w-20" type="button" onClick={handleClick}>
        <LikeIcon likes={count} />
      </button>

      <span className="self-end text-xl text-white">{count}</span>
    </div>
  );
}

export default Button;
