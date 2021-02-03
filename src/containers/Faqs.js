import React from "react";
import { Accordion, OptForm } from "../components";
import faqsData from "../data/faqs.json";

export default function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Get Started</OptForm.Button>
        <OptForm.Break />
      </OptForm>
    </Accordion>
  );
}
