"use client";

import React, { useState } from "react";
import LikeIcon from "./likeIcon";
import { useLikes } from "@/app/hooks/useLikes";
import { Howl } from "howler";
import LoadingDots from "./loadingDots";
import LikeIconSplash from "./likeIconSplash";

function Button() {
  const [isCountUp, setIsCountUp] = useState(true);
  const { totalLikes, currentLikes, isLoading, increment, decrement } =
    useLikes();

  const playSoundOne = () => {
    // Initializing Howl within the handler.
    // Audio object must be initialized after user-gesture (e.g. clicks)
    const sound1 = new Howl({ src: ["./shooting-sound.mp3"] });
    sound1.play();
    sound1.rate((currentLikes + 1) / 3);
  };

  const playSoundTwo = () => {
    const sound2 = new Howl({ src: ["./pick.m4a"] });
    sound2.play();
  };

  const handleIncrement = () => {
    !isCountUp && setIsCountUp(true);
    increment();
    playSoundOne();
    currentLikes === 9 && playSoundTwo();
  };

  const handleDecrement = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    isCountUp && setIsCountUp(false);
    decrement();
    playSoundOne();
  };

  return (
    <div className="flex items-center gap-6 p-8">
      <button
        className="relative h-24 w-24 origin-center rounded-full bg-white p-4 shadow-lg shadow-red-800/40 transition-all duration-300 hover:scale-[1.1] hover:cursor-pointer focus-visible:scale-[1.2] active:scale-[0.8]"
        type="button"
        disabled={isLoading}
        onClick={() => currentLikes < 10 && handleIncrement()}
        onContextMenu={(e) => currentLikes > 0 && handleDecrement(e)}
      >
        {currentLikes === 10 && <LikeIconSplash />}
        <LikeIcon likes={currentLikes || 0} />
      </button>

      <div className="relative flex w-10 flex-col items-center self-center">
        <span
          key={currentLikes}
          className="absolute -translate-y-4 animate-counter text-zinc-600 opacity-0"
        >
          {currentLikes > 0 && (isCountUp ? "+1" : "-1")}
        </span>
        <span className="text-2xl leading-none text-zinc-600">
          {isLoading ? <LoadingDots /> : <span>{totalLikes}</span>}
        </span>
      </div>
    </div>
  );
}

export default Button;
