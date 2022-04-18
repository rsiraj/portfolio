import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_zjf7g3i",
      "template_ml3fwko",
      form.current,
      "mdX5XscbJIeluM9SR"
    );
    alert("Thank you for submitting a message.");
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>fake@email.com</h5>
            <a href="mailto:rehansiraj+site@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>fake@email.com</h5>
            <a href="mailto:rehansiraj+site@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>fake@email.com</h5>
            <a href="mailto:rehansiraj+site@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message..."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
