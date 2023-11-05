"use client";

import React, { useEffect, useState } from "react";
import LikeIcon from "../likeIcon";

function ButtonArchived() {
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
      <button
        className="relative rounded-full bg-zinc-200 p-4"
        type="button"
        onClick={handleClick}
      >
        <div
          className={` left-1/2 h-14 w-14 -translate-x-1/2 rounded-xl bg-red-400 drop-shadow-xl transition-all
          ${count === 0 ? "translate-y-12" : ""}
          ${count === 1 ? "translate-y-8" : ""}
          ${count === 2 ? "translate-y-4" : ""}
          ${count === 3 ? "translate-y-0" : ""}
        `}
        ></div>
        <LikeIcon likes={count} />
      </button>

      <span className="self-end text-xl text-white">{count}</span>
    </div>
  );
}

export default ButtonArchived;
