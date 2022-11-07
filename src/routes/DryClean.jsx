import "../App.css";
import Container from "react-bootstrap/Container";
import { ListGroup,Button} from "react-bootstrap";
import dryCleanProd from "../products-prod.json";
import { useEffect } from "react";

function DryClean() {
  useEffect(() => {
    console.log('hello?')
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <Container>
      <h3>Dry Cleaning</h3>
      <p>For delicate items and fabrics.</p>
      <h6>DRY CLEANING + IRONING + ON HANGERS</h6>
      {dryCleanProd.map((item, idx) => (
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

export default DryClean;
