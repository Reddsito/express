import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api";
import { useSearchParams } from "react-router-dom";

const useProducts = () => {
  const [search] = useSearchParams();
  return useQuery(
    ['products', search.toString()],
    () =>
      apiClient
        .get('products', {
          params: search,
        })
        .then((res) => res.data),
    {
      staleTime: 120000,
    },
  );
}
 
export default useProducts;