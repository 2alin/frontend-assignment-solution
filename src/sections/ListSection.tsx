import { useContext } from "react";
import { DetailedResultsContext } from "../contexts/DetailedResultsContext";

export default function ListSection() {
  const detailedResultsMap = useContext(DetailedResultsContext);
  console.log("detailedResultsMap", detailedResultsMap);

  return (
    <section>
      <p>List Section</p>
    </section>
  );
}
