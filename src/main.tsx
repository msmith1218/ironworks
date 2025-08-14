import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router";
import Home from "components/home/home";
import Services from "components/services/services";
import About from "components/about/about";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
