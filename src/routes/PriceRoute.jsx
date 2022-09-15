import React,{useState} from 'react';
import PriceNavBar from './PriceNavBar';
import Bulky from "../routes/Bulky";
import DryClean from "../routes/DryClean";
import Wash from "../routes/Wash";
import WashPress from "../routes/WashPress";
import ScrollToTop from "react-scroll-to-top";


function PriceRoute() {
  const [showWash,setShowWash] = useState(true);
  const [showPress,setShowPress] = useState(false);
  const [showDry,setShowDry] = useState(false);
  const [showBulky,setShowBulky] = useState(false);

  return (
    <div>
      <PriceNavBar/>
      {showWash && <Wash/>}
      {showPress && <WashPress/>}
      {showDry && <DryClean/>}
      {showBulky && <Bulky/>}
      <ScrollToTop color="#1c2f74" />
      </div>
  )
}

export default PriceRoute