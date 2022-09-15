import "../App.css";
import Container from "react-bootstrap/Container";
import { ListGroup } from "react-bootstrap";
function WashPress() {
  return (
    <Container>
      <h3>Wash & Press</h3>
      <p>For everyday laundry that requires ironing.

</p>
      <h6>WASH + TUMBLE-DRY + IRONING + ON HANGERS
</h6>
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
    </Container>
  );
}

export default WashPress;
