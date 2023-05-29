import React from "react";
import { useTheme } from "@mui/material/styles";
import { Header } from "../components/molecules/Header";
import { Button, Box } from "@mui/material";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Routes } from "./Routes";
import { Tost } from "../components/atoms/Tost";
import { PulsingDiv } from "../components/atoms/PulsingDiv";
import { MakeItRainBackround } from "../components/molecules/MakeItRainBackround";

export const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Header />
      <Tost />
      {location.pathname === Routes.HOME && (
        <Box
          width="100%"
          height="75vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <MakeItRainBackround />
          <PulsingDiv>
            <Button
              sx={{
                display: "flex",
                direction: "column",
                borderRadius: "100%",
                width: "150px",
                height: "150px",
                fontWeight: "600",
                backgroundColor: `${theme.palette.secondary.main}`,
                border: `3px solid ${theme.palette.primary.main}`,
              }}
              variant="text"
              onClick={() => navigate(Routes.CHOOSE_CURRENCIES)}
            >
              CHOOSE CURRENCIES
            </Button>
          </PulsingDiv>
        </Box>
      )}
      <Outlet />
    </>
  );
};
