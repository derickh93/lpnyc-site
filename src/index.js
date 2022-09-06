import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import PriceRoute from "./routes/PriceRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pricing" element={<PriceRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
