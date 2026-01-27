import { type ChangeEventHandler, type PropsWithChildren } from "react";
import type { OptionSelectorVariant } from "./OptionSelector.types";

interface OptionSelectorProps {
  name: string;
  value: string;
  text: string;
  checked: boolean;
  variant: OptionSelectorVariant;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function OptionSelector({
  name,
  value,
  text,
  checked,
  variant,
  onChange,
}: PropsWithChildren<OptionSelectorProps>) {
  return (
    <div>
      <label
        className={
          variant === "primary"
            ? `
              inline-block cursor-pointer rounded-full px-4 py-2 font-medium capitalize shadow-md select-none
              has-focus-visible:outline-4  has-focus-visible:outline-green-400
              ${checked ? "bg-blue-800 text-white" : "bg-white outline-1 outline-gray-400"}
              `
            : variant === "secondary"
              ? `
                inline-block cursor-pointer border-b-2 px-1 py-0.5 font-normal capitalize select-none
                has-focus-visible:outline-4 has-focus-visible:outline-green-400
                ${checked ? "border-black" : "border-transparent"}
                `
              : ""
        }
      >
        <input
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          className={"appearance-none"}
        />
        {text}
      </label>
    </div>
  );
}
