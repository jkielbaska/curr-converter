import { useQuery } from "@tanstack/react-query";
import { CurrenciesServices } from "../services/CurrenciesServices";

export const currenciesQuery = () => ({
  queryKey: ["currenciesList"],
  queryFn: CurrenciesServices.getCurrencies,
});

export const useGetCurrencies = () => {
  const query = useQuery({
    ...currenciesQuery(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  return query;
};
