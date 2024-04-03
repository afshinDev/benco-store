import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../services/Services";
import { useParams } from "react-router-dom";

export function useCategory() {
  const { categoryName } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["category", categoryName],
    queryFn: () => getCategory(categoryName),
  });

  return { data, isLoading, categoryName, isError };
}
