import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PortalProvider } from "./providers/PortalProvider";
import { HelmetProvider } from "react-helmet-async";
import { AppContainer, GlobalStyles } from "./styles/styles";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Home from "./pages/PC/Home";
import NotFoundPage from "./pages/PC/NotFoundPage";
import { useMediaQuery } from "react-responsive";
import MHome from "./pages/Mobile/MHome";
import MNotFoundPage from "./pages/Mobile/MNotFoundPage";

function App() {
  const isPC = useMediaQuery({
    query: "(min-width : 1024px)",
  });
  return (
    <PortalProvider>
      <HelmetProvider>
        <GlobalStyles />
        <AppContainer>
          {isPC ? (
            <Routes>
              <Route path={routes.root} element={<Home />} />
              <Route path={"*"} element={<NotFoundPage />} />
            </Routes>
          ) : (
            <Routes>
              <Route path={routes.root} element={<MHome />} />
              <Route path={"*"} element={<MNotFoundPage />} />
            </Routes>
          )}
        </AppContainer>
      </HelmetProvider>
    </PortalProvider>
  );
}

export default App;
