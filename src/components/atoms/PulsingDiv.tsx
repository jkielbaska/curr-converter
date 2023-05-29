import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { pulse } from "react-animations";

const pulseAnimation = keyframes`${pulse}`;
const StyledPulsingDiv = styled.div`
  animation: 3s infinite ${pulseAnimation};
`;

export const PulsingDiv = ({ children }: { children: React.ReactNode }) => {
  return <StyledPulsingDiv>{children}</StyledPulsingDiv>;
};
