import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { lightTheme, darkTheme } from "../styles/theme";
import { useDarkMode } from "../hooks/useDarkMode";

function MyApp({ Component, pageProps }) {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  if (window.location.pathname === "/") {
    pageProps = { ...pageProps, theme, themeToggler };
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
