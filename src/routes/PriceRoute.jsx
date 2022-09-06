import React from 'react';
import PriceNavBar from './PriceNavBar';
import Bulky from "../routes/Bulky";
import DryClean from "../routes/DryClean";
import Wash from "../routes/Wash";
import WashPress from "../routes/WashPress";
import ScrollToTop from "react-scroll-to-top";


function PriceRoute() {
  return (
    <div>
      <PriceNavBar/>
      <Wash/>
      <WashPress/>
      <DryClean/>
      <Bulky/>
      <ScrollToTop color="#1c2f74" />
      </div>
  )
}

export default PriceRoute