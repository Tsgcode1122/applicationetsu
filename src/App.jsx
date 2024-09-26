import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import { DarkModeProvider } from "./component/ DarkModeContext";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
const App = () => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/Portfolio"
            element={
              <Layout>
                <Portfolio />
              </Layout>
            }
          />
          <Route
            path="/Skills"
            element={
              <Layout>
                <Skills />
              </Layout>
            }
          />
          <Route
            path="/Contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
};

export default App;
