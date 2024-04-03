import { useQuery } from "@tanstack/react-query";
import { getNewArrival } from "../services/Services";

export function useNewArrival() {
  const { data: newArrival, isLoading : newArrivalLoading } = useQuery({
    queryKey: ["category"],
    queryFn: getNewArrival,
  });

  return { newArrival, newArrivalLoading };
}
