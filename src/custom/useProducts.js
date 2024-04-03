import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/Services";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../services/baseUrl";

export function useProducts() {
  const [searchParams] = useSearchParams();

  const filterBy = searchParams.get("category") || "all";

  // 1.
  const URL = `${BASE_URL}${
    filterBy === "all" ? "/products" : `/products/category/${filterBy}`
  }`;

  const { data: products } = useQuery({
    queryKey: ["products", filterBy],
    queryFn: () => getProducts(URL),
  });

  return { products };
}
