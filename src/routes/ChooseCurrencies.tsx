import { CurrenciesSelect } from "../components/molecules/CurrenciesSelect";
import { useGetCurrencies } from "../hooks/useGetCurrencies";
import SendIcon from "@mui/icons-material/Send";
import { toast } from "react-toastify";
import { Routes } from "./Routes";
import {
  FormControl,
  InputLabel,
  Input,
  Container,
  Stack,
  Button,
  Box,
} from "@mui/material";
import { useConvertCurrencies } from "../hooks/useConvertCurrencies";
import { useNavigate } from "react-router";
import { currenciesQuery } from "../hooks/useGetCurrencies";
import { QueryClient } from "@tanstack/react-query";

export const currenciesLoader = async (queryClient: QueryClient) => {
  const query = currenciesQuery();
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export const ChooseCurrencies = () => {
  const navigate = useNavigate();
  const {
    form: {
      register,
      handleConversion,
      formState: { errors },
    },
    query: { fetchStatus },
  } = useConvertCurrencies({
    onSuccess: (data) => {
      navigate(Routes.CONVERTED);
    },
    onError: (error) => {
      if (typeof error !== "string") {
        toast.error(error.message);
      } else {
        toast.error(error);
      }
    },
  });

  const { data } = useGetCurrencies();
  // console.log(data);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      justifyContent="center"
      width="100%"
      height="75vh"
    >
      <form onSubmit={handleConversion}>
        <Container maxWidth="xs">
          <Stack spacing={3}>
            <FormControl>
              <InputLabel>FROM</InputLabel>
              <CurrenciesSelect {...register("from")} data={data} fullWidth />
            </FormControl>
            <FormControl>
              <InputLabel>TO</InputLabel>
              <CurrenciesSelect {...register("to")} data={data} fullWidth />
            </FormControl>
            <FormControl>
              <InputLabel>AMOUNT</InputLabel>
              <Input {...register("amount")} />
              <Button variant="outlined" endIcon={<SendIcon />} type="submit">
                {fetchStatus === "fetching" ? "THINKING..." : "CONVERT"}
              </Button>
            </FormControl>
          </Stack>
          <Button onClick={() => navigate(Routes.CONVERTED)}>
            See historical conversions
          </Button>
        </Container>
      </form>
    </Box>
  );
};
