import {
  Select as MUISelect,
  SelectProps as MUISelectProps,
  MenuItem,
} from "@mui/material";
import { forwardRef } from "react";
import { CurrenciesData } from "../../types/CurrenciesData";

interface CurrenciesSelectProps extends MUISelectProps {
  data?: CurrenciesData;
}

export const CurrenciesSelect = forwardRef(
  ({ data, ...restProps }: CurrenciesSelectProps, ref) => {
    return (
      <MUISelect {...restProps} ref={ref} defaultValue="">
        {data?.symbols &&
          Object.entries(data.symbols).map(([symbol, name]) => (
            <MenuItem value={symbol} key={symbol}>
              {symbol} - {name}
            </MenuItem>
          ))}
      </MUISelect>
    );
  }
);
// .sort((value) => value?.id.localeCompare(value?.id))
// defaultValue={(props: string) => props}
