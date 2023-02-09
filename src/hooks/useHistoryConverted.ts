import React, { useCallback } from "react";
import { Routes } from "../routes/Routes";
import { useIsRestoring, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ConvertCurrResponse } from "../types/ConvertCurrResponse";
import { useNavigate } from "react-router-dom";

export const useHistoryConverted = () => {
  const navigate = useNavigate();
  const client = useQueryClient();
  const isRestoring = useIsRestoring();
  const [history, setHistory] = useState<ConvertCurrResponse[]>([]);

  const latest = history[history?.length - 1];

  useEffect(() => {
    const queries = client?.getQueriesData<ConvertCurrResponse>(["convert"]);
    const historicData = queries?.map((el) => el[1]!);
    setHistory(historicData);
    console.log(historicData);
  }, [isRestoring]);

  const remove = useCallback(() => {
    client.clear();
    navigate(-1);
  }, [navigate, client]);

  return { history, latest, client, remove };
};
