import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavHeader from "./layout/NavHeader";
import Colors from "./pages/Colors";
import ContextProvider from "./utilities/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path=":color" element={<Colors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ContextProvider>
);
