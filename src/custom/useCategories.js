import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/Services";

export function useCategories() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  return { categories, isLoading };
}
