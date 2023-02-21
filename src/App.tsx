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
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const isPC = useMediaQuery({
    query: "(min-width : 600px)",
  });
  return (
    <PortalProvider>
      <HelmetProvider>
        {/* <GlobalStyles />
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
        </AppContainer> */}
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
      </HelmetProvider>
    </PortalProvider>
  );
}

export default App;
