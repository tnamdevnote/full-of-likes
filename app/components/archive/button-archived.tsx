"use client";

import React, { useEffect, useState } from "react";
import LikeIcon from "../likeIcon";
import LikeIconTwo from "./likeIconTwo";
import LikeIconSkeleton from "./likeIconSkeleton";

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
    <div className="flex max-w-md justify-center gap-6 rounded-2xl bg-white p-12">
      <button
        className="relative flex gap-8"
        type="button"
        onClick={handleClick}
      >
        <LikeIconSkeleton likes={count} />
        <LikeIconTwo likes={count} />
      </button>

      <span className="text-xl text-zinc-700">{count}</span>
    </div>
  );
}

export default ButtonArchived;
