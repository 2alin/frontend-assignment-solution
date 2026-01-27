import type { DetailedResult } from "../contexts/DetailedResultsContext.types";

interface ResultsListProps {
  detailedResults: DetailedResult[];
}

export function ResultList({ detailedResults }: ResultsListProps) {
  return (
    <ul className="grow">
      {detailedResults.map(({ result, biomarker }) => (
        <li key={result.id}>
          {`id: ${result.id} - bname: ${biomarker?.name} - bcat: ${biomarker?.category}`}
        </li>
      ))}
    </ul>
  );
}
