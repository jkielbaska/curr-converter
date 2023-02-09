import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeContext } from "../theme/ColorModeContext";

export const ButtonMode = () => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  return (
    <IconButton
      onClick={toggleColorMode}
      disableRipple={true}
      size="large"
      sx={{ paddingRight: "3%" }}
    >
      {mode === "dark" ? <ToggleOnOutlinedIcon /> : <ToggleOffOutlinedIcon />}
    </IconButton>
  );
};
