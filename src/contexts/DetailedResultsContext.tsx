import { createContext } from "react";
import type { DetailedResultMap } from "./DetailedResultsContext.types";
import type { Biomarker, Result } from "../api";

export const DetailedResultsContext = createContext<DetailedResultMap | null>(
  null,
);

/**
 * Helper function to create a detailed results map from
 * clinical results biomarkers data.
 *
 * @param results Clinical results data
 * @param biomarkers Biomarkers data
 * @returns A map that can be used
 */
export function createDetailedResultsMap(
  results: Result[],
  biomarkers: Biomarker[],
): DetailedResultMap {
  const detailedResultsMap: DetailedResultMap = new Map();

  for (const result of results) {
    const { biomarkerId } = result;
    const matchedBiomarker = biomarkers.find(
      (biomarker) => biomarker.id === biomarkerId,
    );

    if (!matchedBiomarker) {
      // We could report here to our servers about a biomarker data not found
      detailedResultsMap.set(result.id, {
        result,
        biomarker: null,
      });
    } else {
      detailedResultsMap.set(result.id, {
        result,
        biomarker: matchedBiomarker,
      });
    }
  }

  return detailedResultsMap;
}
