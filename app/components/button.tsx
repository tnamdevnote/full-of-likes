"use client";

import React, { useEffect, useState } from "react";
import LikeIcon from "./likeIcon";
import LikeIconSkeleton from "./likeIconSkeleton";
import LikeIconTwo from "./likeIconTwo";
import { Heart } from "react-feather";
import { useLikes } from "@/lib/useLikes";

function Button() {
  // const [audio, setAudio] = useState<HTMLAudioElement>();
  // const [audioTwo, setAudioTwo] = useState<HTMLAudioElement>();
  const { total, currentLikes, isLoading, increment, decrement } = useLikes();

  const handleIncrement = () => {
    console.log("clicked");
    increment();
    // if (audio && audioTwo) {
    //   audio.preservesPitch = false;
    //   audio.playbackRate = (count + 1) / 3; // divide by 3 to start from the lower pitch
    //   audio.play();
    //   count === 9 && audioTwo.play();
    // }
  };

  const handleDecrement = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    decrement();
    // if (audio) {
    //   audio.preservesPitch = false;
    //   audio.playbackRate = (count + 1) / 3;
    //   audio.play();
    // }
  };

  // useEffect(() => {
  //   // This is causing rerenders
  //   setAudio(new Audio("./shooting-sound.mp3"));
  //   setAudioTwo(new Audio("./pick.m4a"));
  // }, []);

  console.log(total, currentLikes);
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
          {/* {currentLikes > 0 && (isCountUp ? "+1" : "-1")} */}
        </span>
        <span className="text-xl text-zinc-600">
          {isLoading ? "loading..." : total}
        </span>
      </div>
    </div>
  );
}

export default Button;
