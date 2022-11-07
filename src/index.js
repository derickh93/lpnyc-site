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
        <Route path="/pricing-wash" element={<PriceNavBar active={"wash"}/>} />
        <Route path="/pricing-dry-clean" element={<PriceNavBar active={"dry-clean"}/>} />
        <Route path="/pricing-bulky" element={<PriceNavBar active={"bulky"}/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
