import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bulky from "./routes/Bulky";
import DryClean from "./routes/DryClean";
import Wash from "./routes/Wash";
import WashPress from "./routes/WashPress";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Bulky" element={<Bulky />} />
        <Route path="DryClean" element={<DryClean />} />
        <Route path="Wash" element={<Wash />} />
        <Route path="WashPress" element={<WashPress />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
