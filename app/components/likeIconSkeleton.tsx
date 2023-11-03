import React from "react";

type LikeIconSkeletonProps = {
  likes: number;
};

const HEART_PATH =
  "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z";

function LikeIconSkeleton({ likes }: LikeIconSkeletonProps) {
  return (
    // <div className="relative rounded-xl bg-zinc-200">
    <svg className="" viewBox="0 0 24 48">
      <mask id="mask" mask-type="alpha">
        <rect
          className={`h-6 w-6 fill-current text-red-400 transition-transform
          ${likes === 0 ? "translate-y-6" : ""}
          ${likes === 1 ? "translate-y-4" : ""}
          ${likes === 2 ? "translate-y-2" : ""}
          ${likes === 3 ? "translate-y-0" : ""}
        `}
        />
        <path d={HEART_PATH} />
      </mask>

      <g mask="url(#mask)">
        <rect
          className={`h-6 w-6 fill-current text-red-400 transition-transform
          ${likes === 0 ? "translate-y-6" : ""}
          ${likes === 1 ? "translate-y-4" : ""}
          ${likes === 2 ? "translate-y-2" : ""}
          ${likes === 3 ? "translate-y-0" : ""}
        `}
        />
      </g>
      <path
        d={HEART_PATH}
        className="fill-transparent stroke-black"
        strokeOpacity={1}
        strokeWidth={0.4}
      />
    </svg>
    // </div>
  );
}

export default LikeIconSkeleton;
