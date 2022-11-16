import React from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const sendEmail = (event) => {
    event.preventDevault();

    emailjs
      .sendForm(
        "service_ms1rfug",
        "template_cx19ku3",
        event.target,
        "SW8dBtC3PDgIBjCfr"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <div className="footer__form" id="footer__form">
      <div className="footer__div--form">
        <h1 className="footer__h1">Contact</h1>
        <form
          className="form-mail"
          encType="text/plain"
          action="mailto:jhancaweb@gmail.com"
          method="post"
        >
          <button type="submit">Get in touch</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
