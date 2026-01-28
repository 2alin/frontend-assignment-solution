import type { ReferenceRange } from "../api";
import type { StatusType } from "./biomarkerStatus.types";

/**
 * Gets the biomarker health status
 *
 * @param value Clinical result value
 * @param range Reference range for biomarker
 * @returns The biomarker health status
 */
export function getStatus(value: number, range: ReferenceRange): StatusType {
  let status: StatusType;

  if (value < range.low) {
    status = "low";
  } else if (value > range.high) {
    status = "high";
  } else {
    status = "normal";
  }

  return status;
}
