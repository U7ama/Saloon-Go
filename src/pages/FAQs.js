import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import AnimationTitles from "../components/functions/AnimationTitles";

function FAQs() {
  return (
    <Container className="my-5">
      <AnimationTitles
        title="Frequently Asked Questions"
        className="title mx-auto"
      />
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header">
            What services does Saloon Go offer?
          </Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            Saloon Go offers a comprehensive range of hair and beauty services,
            including haircuts, styling, coloring, and various beauty
            treatments. Our app makes it easy to find and book appointments with
            top-rated salons in your area.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="custom-accordion-header">
            How do I book an appointment?
          </Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            You can book an appointment by selecting your preferred service,
            choosing a salon, and picking a convenient date and time. Once you
            confirm your booking, you will receive a confirmation notification.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="custom-accordion-header">
            Can I cancel or reschedule my appointment?
          </Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            Yes, you can cancel or reschedule your appointment through the app.
            Please note that any changes should be made at least 24 hours before
            the scheduled appointment time to avoid any cancellation fees.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default FAQs;
