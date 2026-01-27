import type { Biomarker, Result } from "../api";

/**
 * Detailed data of a clinical result.
 */
export interface DetailedResult {
  /**
   * Data related to the clinical result
   */
  result: Result;
  /**
   * Data related to the biomarker linked to the clinical result.
   * If no biomarker is related, its value is null.
   */
  biomarker: Biomarker | null;
}

/**
 * Clinical result Id
 */
type ResultId = string;

/**
 * Map from a clinical result Id to its details object
 */
export type DetailedResultMap = Map<ResultId, DetailedResult>;
