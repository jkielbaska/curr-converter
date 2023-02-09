import * as React from "react";
import { css } from "@emotion/react";
import { GlobalStyles } from "@mui/material";

export const GlobalStyle = () => {
  const styles = css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-size: 20px;
    }
  `;
  return <GlobalStyles styles={styles} />;
};
