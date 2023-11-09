"use client";

import React, { useEffect, useState } from "react";
import LikeIcon from "./likeIcon";
import LikeIconSkeleton from "./likeIconSkeleton";
import LikeIconTwo from "./likeIconTwo";
import { Heart } from "react-feather";

function Button() {
  const [count, setCount] = useState(0); //temporary clientside state
  const [isCountUp, setIsCountUp] = useState(true);
  const audio = new Audio("./shooting-sound.mp3");
  const audioTwo = new Audio("./pick.m4a");

  const handleIncrement = () => {
    setCount((count) => count + 1);
    setIsCountUp(true);
    audio.preservesPitch = false;
    audio.playbackRate = (count + 1) / 3; // divide by 3 to start from the lower pitch
    audio.play();
    count === 9 && audioTwo.play();
  };

  const handleDecrement = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setCount((count) => count - 1);
    setIsCountUp(false);
    audio.preservesPitch = false;
    audio.playbackRate = (count + 1) / 3;
    audio.play();
  };

  return (
    <div className="flex w-60 gap-6 p-8">
      <button
        className="relative h-16 w-16 origin-center rounded-xl transition-transform duration-300 hover:scale-[1.2] focus-visible:scale-[1.2] active:scale-[1.4]"
        type="button"
        onClick={() => count < 10 && handleIncrement()}
        onContextMenu={(e) => count > 0 && handleDecrement(e)}
      >
        <LikeIcon likes={count} />
      </button>
      <div className="relative self-end">
        <span
          key={count}
          className="absolute -translate-y-8 animate-counter text-zinc-600 opacity-0"
        >
          {isCountUp ? "+1" : "-1"}
        </span>
        <span className="text-xl text-zinc-600">{count}</span>
      </div>
    </div>
  );
}

export default Button;
