"use client";

import React, { useEffect, useRef, useState } from "react";
import LikeIcon from "./likeIcon";
import LikeIconSkeleton from "./likeIconSkeleton";
import LikeIconTwo from "./likeIconTwo";
import { Heart } from "react-feather";
import { useLikes } from "@/app/hooks/useLikes";
import { Howl } from "howler";

const sounds = [
  { id: "sound1", src: "./shooting-sound.mp3" },
  { id: "sound2", src: "./pick.m4a" },
];

function Button() {
  const [isCountUp, setIsCountUp] = useState(true);
  const { totalLikes, currentLikes, isLoading, increment, decrement } =
    useLikes();
  const soundMap = useRef<Map<string, Howl>>(new Map());

  const handleIncrement = () => {
    const sound1 = soundMap.current.get("sound1");
    const sound2 = soundMap.current.get("sound2");
    setIsCountUp(true);
    increment();
    if (sound1 && sound2) {
      sound1.play();
      sound1.rate((currentLikes + 1) / 3);
      currentLikes === 9 && sound2.play();
    }
  };

  const handleDecrement = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setIsCountUp(false);
    decrement();
    const sound1 = soundMap.current.get("sound1");
    if (sound1) {
      sound1.play();
      sound1.rate((currentLikes + 1) / 3);
    }
  };

  useEffect(() => {
    sounds.forEach((sound) => {
      soundMap.current.set(sound.id, new Howl({ src: [sound.src] }));
    });
  }, [sounds]);
  console.log("render");
  return (
    <div className="flex w-60 gap-6 p-8">
      <button
        className="relative h-16 w-16 origin-center rounded-xl transition-transform duration-300 hover:scale-[1.2] focus-visible:scale-[1.2] active:scale-[1.4]"
        type="button"
        onClick={() => currentLikes < 10 && handleIncrement()}
        onContextMenu={(e) => currentLikes > 0 && handleDecrement(e)}
      >
        <LikeIcon likes={currentLikes || 0} />
      </button>
      <div className="relative self-end">
        <span
          key={currentLikes}
          className="absolute -translate-y-8 animate-counter text-zinc-600 opacity-0"
        >
          {currentLikes > 0 && (isCountUp ? "+1" : "-1")}
        </span>
        <span className="text-xl text-zinc-600">
          {isLoading ? "loading..." : totalLikes}
        </span>
      </div>
    </div>
  );
}

export default Button;
