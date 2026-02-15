import React from "react";

type AvatarProps = {
  src: string;
  size: "sm" | "md" | "lg";
  active?: boolean;
};

const sizes = {
  sm: "w-25 h-25",
  md: "w-30 h-30",
  lg: "w-40 h-40",
};

export default function Avatar({ src, size, active }: AvatarProps) {
  return (
    <div
      className={`rounded-full flex items-center justify-center ${active ? "ring-4 ring-blue-600" : "ring-2 ring-blue-400"}`}
    >
      <div className={`rounded-full overflow-hidden ${sizes[size]}`}>
        <img src={src} alt="Testimonial Avatar" className="object-cover w-full h-full" />
      </div>
    </div>
  );
}
