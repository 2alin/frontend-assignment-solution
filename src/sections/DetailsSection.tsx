import type { Dispatch, SetStateAction } from "react";

interface DetailsSectionProps {
  selectedResultId: string | null;
  setSelectedResultId: Dispatch<SetStateAction<string | null>>;
}

export default function DetailsSection({
  selectedResultId,
  setSelectedResultId,
}: DetailsSectionProps) {
  if (!selectedResultId) {
    return null;
  }

  function handleClose() {
    setSelectedResultId(null);
  }

  return (
    <section className="bg-blue-300 h-full w-full sm:w-80">
      <button onClick={handleClose} className="bg-red-400">
        Close X
      </button>
      <p>Details Section</p>
      <p>Selected ID: {selectedResultId}</p>
    </section>
  );
}
