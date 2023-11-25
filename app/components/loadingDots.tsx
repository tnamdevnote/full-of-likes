import React from "react";

function LoadingDots() {
  return (
    <span>
      <span className="animate-[loading_1.4s_ease-in-out_infinite]">
        &bull;
      </span>
      <span className="animate-[loading_1.4s_ease-in-out_0.2s_infinite]">
        &bull;
      </span>
      <span className="animate-[loading_1.4s_ease-in-out_0.4s_infinite]">
        &bull;
      </span>
    </span>
  );
}

export default LoadingDots;
