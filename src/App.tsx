import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PortalProvider } from "./providers/PortalProvider";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <PortalProvider>
      <HelmetProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </HelmetProvider>
    </PortalProvider>
  );
}

export default App;
