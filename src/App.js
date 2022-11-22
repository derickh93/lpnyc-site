import "./App.css";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Schedule from "./components/Schedule";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import ServiceArea from "./components/ServiceArea";
import ScrollToTop from "react-scroll-to-top";
import Container from "react-bootstrap/Container";
// import TrustPilot from "./components/TrustPilot";

function Fade(props) {
  return <div className="my-fade">{props.children}</div>;
}

function App() {
  return (
    <Container fluid>
      <Fade>
        <Header />
      </Fade>
      <Fade>
        <Schedule />
      </Fade>
      <Fade>
        <HowItWorks />
      </Fade>
      <Fade>
        <Pricing />
      </Fade>
      <Fade>
        <ServiceArea />
      </Fade>
      <Fade>
        <FAQ />
      </Fade>
      <Fade>
        {" "}
        <About />
      </Fade>
 
      <Fade>
        {" "}
        <Clients />
      </Fade>
      <Fade>
        {" "}
        <Footer />
      </Fade>
      <ScrollToTop color="#1c2f74" />
    </Container>
  );
}

export default App;
