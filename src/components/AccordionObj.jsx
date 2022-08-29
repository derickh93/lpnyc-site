import React from "react";
import Accordion from "react-bootstrap/Accordion";

function AccordionObj(props) {
  return (
    <div>
      {props.faq.map((item) => {
        return (
          <div key={item.id}>
            <Accordion className="rounded shadow-lg bg-white text-break">
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body>{item.answer}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
}

export default AccordionObj;
