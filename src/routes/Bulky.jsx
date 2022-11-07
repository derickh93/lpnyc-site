import "../App.css";
import Container from "react-bootstrap/Container";
import { ListGroup,Button } from "react-bootstrap";
import bulkyProd from "../bulky-prod.json"
import { useEffect } from "react";

function Bulky() {
  useEffect(() => {
    console.log('hello?')
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <Container>
      <h3>Duvets & Bulky Items</h3>
      <p>For larger items that require extra care.</p>
      <h6>CUSTOM CLEANING</h6>
      {bulkyProd.map((item, idx) => (
        <div key={idx}>
        <ListGroup variant="flush">
            <ListGroup.Item>
              {item.description}
              <p>{item.price}</p>
            </ListGroup.Item>
          </ListGroup>
          <hr />
        </div>
      ))}

      
<div>
        <div>Can’t find your item?
        <Button
            style={{
              width: "20%",
              height: "20%",
              fontSize: "12px",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
            variant="link"
            onClick={(event) => {
              event.preventDefault();
              window.Tawk_API.toggle();
            }}
          ><u>Ask our team.</u>
          </Button>
          </div>
      </div>
    </Container>
  );
}

export default Bulky;
