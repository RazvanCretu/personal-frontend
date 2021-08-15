import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { lightTheme, darkTheme } from "../styles/theme";
import { useDarkMode } from "../hooks/useDarkMode";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div style={{ visibility: "hidden" }} />;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Layout theme={theme} toggleTheme={themeToggler}>
          <Component {...pageProps} />
        </Layout>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
