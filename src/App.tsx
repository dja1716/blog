import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PortalProvider } from "./providers/PortalProvider";
import { HelmetProvider } from "react-helmet-async";
import { AppContainer, GlobalStyles } from "./styles/styles";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <PortalProvider>
      <HelmetProvider>
        <GlobalStyles />
        <AppContainer>
          <Routes>
            <Route path={routes.root} element={<Home />} />
            <Route path={"*"} element={<NotFoundPage />} />
          </Routes>
        </AppContainer>
      </HelmetProvider>
    </PortalProvider>
  );
}

export default App;
