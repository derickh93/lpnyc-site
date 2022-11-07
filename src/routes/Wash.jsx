import "../App.css";
import Container from "react-bootstrap/Container";
import { ListGroup,Button } from "react-bootstrap";
import washProds from "../product-wash-prod.json"
import { useEffect } from "react";
function Wash() {

  useEffect(() => {
    console.log('hello?')
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <Container>
      <h3>Wash</h3>
      <p>For everyday laundry, bedsheets and towels.</p>
      <h6>WASH + TUMBLE-DRY</h6>
      {washProds.map((item, idx) => (
        <div key={idx}>
      <ListGroup variant="flush">
        <ListGroup.Item>
          {item.description}
          <p>{item.price}</p>
        </ListGroup.Item>
      </ListGroup>
      <hr/>
      </div>
      ))}
      
      <div>
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

        <div>
          Not sure how much you have? One load of 15lb is about: 7 shirts + 3
          trousers + 7 underwear + 7 pairs of socks
        </div>
      </div>
    </Container>
  );
}

export default Wash;
