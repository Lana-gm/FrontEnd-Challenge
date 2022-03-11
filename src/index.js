import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/Router";
import Providers from "./context";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Providers>
          <GlobalStyle />
          <Router />
        </Providers>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
