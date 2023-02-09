import React from "react";
import styled from "@emotion/styled";
import logo2 from "../../assets/logo2.png";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";
// import { useVirtualAssistant } from "@halvardm/virtual-assistant";
// import data from "../../assets/clippyConfig/clippyIndex";

const StyledLogo = styled.img({
  minWidth: "40px",
  minHeight: "40px",
  maxWidth: "100px",
  maxHeight: "100px",
});

export const Logo = () => {
  const navigate = useNavigate();
  // const va = useVirtualAssistant(data);
  //   const onClick = () => {
  //     va.current.existsInDom();
  //     navigate("/");
  //   };
  return (
    <IconButton
      disableRipple={true}
      size="small"
      onClick={() => navigate("/")}
      sx={{ paddingLeft: "2%" }}
    >
      <StyledLogo
        src={logo2}
        alt="currency converter logo Illustration by delesign from Ouch!"
      />
    </IconButton>
  );
};
