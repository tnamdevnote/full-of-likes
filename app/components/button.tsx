"use client";

import React, { useState } from "react";
import LikeIcon from "./likeIcon";
import { useLikes } from "@/app/hooks/useLikes";
import { Howl } from "howler";
import LoadingDots from "./loadingDots";

function Button() {
  const [isCountUp, setIsCountUp] = useState(true);
  const { totalLikes, currentLikes, isLoading, increment, decrement } =
    useLikes();

  const handleIncrement = () => {
    // Initializing Howl within the handler.
    // Audio object must be initialized after user-gesture (e.g. clicks)
    const sound1 = new Howl({ src: ["./shooting-sound.mp3"] });
    const sound2 = new Howl({ src: ["./pick.m4a"] });
    !isCountUp && setIsCountUp(true);
    increment();
    sound1.play();
    sound1.rate((currentLikes + 1) / 3);
    currentLikes === 9 && sound2.play();
  };

  const handleDecrement = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const sound1 = new Howl({ src: ["./shooting-sound.mp3"] });
    isCountUp && setIsCountUp(false);
    decrement();
    sound1.play();
    sound1.rate((currentLikes + 1) / 3);
  };

  return (
    <div className="flex items-center space-x-3 p-8">
      <div className="relative">
        <span
          key={currentLikes}
          className="absolute w-full -translate-y-4 animate-counter text-center text-zinc-600 opacity-0"
        >
          {currentLikes > 0 && (isCountUp ? "+1" : "-1")}
        </span>
        <button
          className="relative h-24 w-24 origin-center rounded-full p-2 transition-all duration-300 hover:scale-[1.2] focus-visible:scale-[1.2] active:scale-[1.4]"
          type="button"
          onClick={() => currentLikes < 10 && handleIncrement()}
          onContextMenu={(e) => currentLikes > 0 && handleDecrement(e)}
        >
          <LikeIcon likes={currentLikes || 0} />
        </button>
      </div>
      <div className="self-center">
        <span className="text-2xl leading-none text-zinc-600">
          {isLoading ? <LoadingDots /> : <span>{totalLikes}</span>}
        </span>
      </div>
    </div>
  );
}

export default Button;
