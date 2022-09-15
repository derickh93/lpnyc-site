import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import PriceNavBar from "./routes/PriceNavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pricing" element={<PriceNavBar/>} />

        {/* <Route path="/pricing/wash" element={<Wash />} />
        <Route path="/pricing/press" element={<WashPress />} />
        <Route path="/pricing/dry" element={<DryClean />} />
        <Route path="/pricing/bulky" element={<Bulky />} /> */}

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
