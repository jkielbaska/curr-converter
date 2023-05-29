import { ResultHandler } from "../types/ResultHandler";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CurrenciesServices } from "../services/CurrenciesServices";
import { ConvertCurrResponse } from "../types/ConvertCurrResponse";

const ConvertSchema = z.object({
  from: z.string().min(1),
  to: z.string().min(1),
  amount: z.string().min(1),
});

type ConvertData = z.infer<typeof ConvertSchema>;

export const useConvertCurrencies = ({ onError, onSuccess }: ResultHandler) => {
  const { handleSubmit, watch, ...form } = useForm<ConvertData>({
    resolver: zodResolver(ConvertSchema),
  });
  const { from, to, amount } = watch();

  const { refetch, ...restQuery } = useQuery<ConvertCurrResponse>(
    ["convert", from, to, amount],
    () => CurrenciesServices.convertCurrencies({ from, to, amount }),
    {
      enabled: false,
      onSuccess: () => {
        onSuccess?.();
      },
      onError: (err) => {
        onError?.(err as Error);
      },
    }
  );

  const handleConversion = () => {
    refetch();
  };
  return {
    query: {
      ...restQuery,
    },
    form: {
      handleConversion: handleSubmit(handleConversion),
      ...form,
    },
  };
};
