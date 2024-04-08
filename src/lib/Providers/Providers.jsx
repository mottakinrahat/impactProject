"use client";
import React from "react";
import { theme } from "../theme/theme";
import { ThemeProvider } from "@emotion/react";

const Providers = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
