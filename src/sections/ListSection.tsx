import {
  useContext,
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";
import { DetailedResultsContext } from "../contexts/DetailedResultsContext";
import type {
  DetailedResult,
  DetailedResultMap,
} from "../contexts/DetailedResultsContext.types";
import type { CategorySelectorData } from "../components/CategorySelectorList.types";
import CategorySelectorList from "../components/CategorySelectorList";
import { ResultList } from "../components/ResultList";

interface ListSectionProps {
  selectedResultId: string | null;
  setSelectedResultId: Dispatch<SetStateAction<string | null>>;
}

export default function ListSection({
  selectedResultId,
  setSelectedResultId,
}: ListSectionProps) {
  const detailedResultsMap = useContext(DetailedResultsContext);

  const detailedResults = detailedResultsMap
    ? [...detailedResultsMap.values()]
    : [];
  const [filteredDetails, setFilteredDetails] =
    useState<DetailedResult[]>(detailedResults);

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  if (!detailedResultsMap) {
    return;
  }

  const categorySelectorDataList =
    getCategorySelectorDataList(detailedResultsMap);

  function handleCategoryChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedResultId(null);

    const newSelectedCategory = event.target.value;
    setSelectedCategory(newSelectedCategory);

    if (newSelectedCategory === "all") {
      setFilteredDetails(detailedResults);
      return;
    }

    const newFilteredDetails = detailedResults.filter(({ biomarker }) => {
      if (!biomarker) {
        return false;
      }

      const category = biomarker.category.trim().toLowerCase();
      return category === newSelectedCategory;
    });

    setFilteredDetails(newFilteredDetails);
  }

  return (
    <section className="flex flex-1 flex-col bg-pink-300 overflow-auto">
      <form className="shrink-0 overflow-auto">
        <CategorySelectorList
          name="category"
          selectedCategory={selectedCategory}
          selectorDataList={categorySelectorDataList}
          onChange={handleCategoryChange}
        ></CategorySelectorList>
      </form>

      {!filteredDetails.length ? (
        <p>No results found</p>
      ) : (
        <ResultList
          detailedResults={filteredDetails}
          {...{ selectedResultId, setSelectedResultId }}
        />
      )}
    </section>
  );
}

/**
 * Gets the required data to create a list of category selectors
 *
 * @param detailedResultsMap Map with detailed data per clinical result
 * @returns A list of required data to create a category selector
 */
function getCategorySelectorDataList(
  detailedResultsMap: DetailedResultMap,
): CategorySelectorData[] {
  const categories = new Set<string>();

  detailedResultsMap.forEach(({ biomarker }) => {
    if (biomarker) {
      const category = biomarker.category.trim().toLowerCase();
      categories.add(category);
    }
  });

  // "all" categories selector should be the first in the list
  const selectorDataList: CategorySelectorData[] = [
    {
      text: "all",
      value: "all",
    },
  ];

  for (const category of categories) {
    selectorDataList.push({
      text: category,
      value: category,
    });
  }

  return selectorDataList;
}
