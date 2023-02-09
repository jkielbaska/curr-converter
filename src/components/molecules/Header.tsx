import React from "react";
import { useTheme } from "@mui/material/styles";
import { Stack, Box } from "@mui/material";
import { ButtonMode } from "../../theme/ButtonMode";
import { Logo } from "../atoms/Logo";

export const Header = () => {
  const theme = useTheme();
  return (
    <Box display="flex" alignContent="center" justifyContent="center" mt="8px">
      <Stack
        direction="row"
        width="98%"
        justifyContent="space-between"
        borderRadius="10px 10px 10px 10px"
        sx={{
          backgroundColor: `${theme.palette.secondary.main}`,
          border: `3px solid ${theme.palette.primary.main}`,
        }}
      >
        <Logo />
        <ButtonMode />
      </Stack>
    </Box>
  );
};
//Illustration by delesign from Ouch!
