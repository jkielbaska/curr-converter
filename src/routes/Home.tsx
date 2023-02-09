import React from "react";
import { useTheme } from "@mui/material/styles";
import { Header } from "../components/molecules/Header";
import { Button, Box } from "@mui/material";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Routes } from "./Routes";
import { Tost } from "../components/atoms/Tost";
import { PulsingDiv } from "../components/atoms/PulsingDiv";
import { MakeItRainBackround } from "../components/molecules/MakeItRainBackround";
// import { useVirtualAssistant } from "@halvardm/virtual-assistant";
// import data from "../assets/clippyConfig/clippyIndex";

export const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  // const va = useVirtualAssistant(data);
  // const chooseClick = () => {
  //   va.current.animate();
  //   navigate(Routes.CHOOSE_CURRENCIES);
  //   setTimeout(() => {
  //     va.current.hide();
  //   }, 7000);
  // };
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
            {/* <button onClick={() => va.current.animate(true)}>Say Hello</button> */}
          </PulsingDiv>
        </Box>
      )}
      <Outlet />
    </>
  );
};
