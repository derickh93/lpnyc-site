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
import NavBar from "./components/NavBar";
import { Fade } from "react-reveal";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container fluid>
      <Fade duration={5000}>
        <NavBar />
      </Fade>
      <Fade duration={5000}>
        <Header />
      </Fade>
      <Fade duration={5000}>
        <Schedule />
      </Fade>
      <Fade duration={5000}>
        <HowItWorks />
      </Fade>
      <Fade duration={5000}>
        <Pricing />
      </Fade>
      <Fade duration={5000}>
        <ServiceArea />
      </Fade>
      <Fade>
        <FAQ />
      </Fade>
      <Fade duration={5000}>
        {" "}
        <About />
      </Fade>
      <Fade duration={5000}>
        {" "}
        <Clients />
      </Fade>
      <Fade duration={5000}>
        {" "}
        <Footer />
      </Fade>
      <ScrollToTop color="#1c2f74" />
    </Container>
  );
}

export default App;
