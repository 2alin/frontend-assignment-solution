import type { MouseEventHandler } from "react";

interface IconButtonProps {
  iconType: IconType;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

type IconType = "arrowDown" | "arrowUp";

const icons: Record<IconType, string> = {
  arrowDown: "/src/assets/arrow-down.svg",
  arrowUp: "/src/assets/arrow-up.svg",
};

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
        className={`mask-[url(${icons[iconType]})] bg-white size-full mask-size-[100%]`}
      ></span>
    </button>
  );
}
