import axios from "axios";
import { apiClient } from "../lib/axios";
import { CurrenciesData } from "../types/CurrenciesData";
import { ConvertCurrResponse } from "../types/ConvertCurrResponse";

const getCurrencies = async () => {
  try {
    const response = await apiClient.get<CurrenciesData>("/symbols");
    return response.data;
  } catch (err) {
    console.error(err);
    alert("error");
  }
};

interface ConvertCurrenciesData {
  from: string;
  to: string;
  amount: string;
}

const convertCurrencies = async ({
  from,
  to,
  amount,
}: ConvertCurrenciesData) => {
  const response = await apiClient.get<ConvertCurrResponse>("/convert", {
    params: {
      amount,
      from,
      to,
    },
  });
  console.log(response.data);
  return response.data;
};

export const CurrenciesServices = {
  convertCurrencies,
  getCurrencies,
};
// https://free.currconv.com/api/v7/currencies?apiKey=8ed4a4fb6f4aece0eb04
// https://free.currconv.com/api/v7/convert?q=USD_PLN&compact=ultra&apiKey=8ed4a4fb6f4aece0eb04
