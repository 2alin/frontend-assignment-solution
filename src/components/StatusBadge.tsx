import type { ReferenceRange } from "../api";
import { getStatus } from "../utilities/biomarkerStatus";
import type { StatusType } from "../utilities/biomarkerStatus.types";

interface StatusBadgeProps {
  value: number;
  range: ReferenceRange;
}


export default function StatusBadge({ value, range }: StatusBadgeProps) {

  const status = getStatus(value, range);

  const bgVariant: Record<StatusType, string> = {
    low: "bg-orange-600",
    high: "bg-red-600",
    normal: "bg-secondary-600",
  };

  return (
    <span
      className={`flex justify-center items-center gap-2 rounded-full px-4 py-1 text-white
                  ${bgVariant[status]}
                `}
    >
      <span
        className={`bg-white size-4 mask-size-[100%]
            ${
              status === "low"
                ? "mask-[url(./assets/down.svg)]"
                : status === "high"
                  ? "mask-[url(./assets/up.svg)]"
                  : "mask-[url(./assets/check.svg)]"
            }
          `}
      ></span>
      <span className="capitalize font-semibold text-sm">{status}</span>
    </span>
  );
}
