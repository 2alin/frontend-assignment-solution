import type { MouseEventHandler } from "react";

interface IconButtonProps {
  iconType: IconType;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

type IconType = "arrowDown" | "arrowUp";

export default function IconButton({
  iconType,
  label,
  onClick,
}: IconButtonProps) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className="flex rounded-full size-6 bg-secondary-500 cursor-pointer"
    >
      <span
        className={` bg-white size-full mask-size-[100%]
          ${iconType === "arrowDown" ? "mask-[url(./assets/arrow-down.svg)]" : "mask-[url(./assets/arrow-up.svg)]"}
          `}
      ></span>
    </button>
  );
}
