import "../App.css";
import Container from "react-bootstrap/Container";
import { ListGroup } from "react-bootstrap";
function Wash() {
  return (
    <Container>
      <h3>Wash</h3>
      <p>For everyday laundry, bedsheets and towels.</p>
      <h6>WASH + TUMBLE-DRY</h6>
      <ListGroup variant="flush">
        <ListGroup.Item>
          Mixed wash (up to 15 lbs)
          <p style={{ fontSize: 12 }}>
            Light and dark clothes washed together at 90°F. You can request
            110°F instead.
          </p>
          <p>$32.85</p>
        </ListGroup.Item>
        <ListGroup.Item>
          Separate wash (up to 30 lbs of light and dark clothes)
          <p style={{ fontSize: 12 }}>
            We'll separate the items for you and wash at 90°F. Starts with two
            loads. You can request 110°F instead.
          </p>
          <p>$65.70</p>
        </ListGroup.Item>
        <ListGroup.Item>
          Additional washes (up to 15 lbs each)
          <p>$32.85</p>
        </ListGroup.Item>
      </ListGroup>
      
      <div>
        <div>Can’t find your item? Ask our team. </div>

        <div>
          Not sure how much you have? One load of 6kg is about: 7 shirts + 3
          trousers + 7 underwear + 7 pairs of socks
        </div>
      </div>

      <div>
        Curious which clothes are suitable for washing? Check service details
      </div>
    </Container>
  );
}

export default Wash;
