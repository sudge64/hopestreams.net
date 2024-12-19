import { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactForm.css";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const handleMailTo = () => {
    const subject = encodeURIComponent(`New Message from ${fullName} through the Contact Form`);
    const body = encodeURIComponent(
      `${message}`,
    );
    return `mailto:contact@hopestreams.net?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="contactForm">
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              className="field"
              placeholder="Enter your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <label>Email</label>
            <input
              type="email"
              className="field"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-box">
            <label>Message</label>
            <textarea
              className="field message"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Link
            to={handleMailTo()}
            onClick={(e) => (fullName && message ? null : e.preventDefault())}
          >
            <button type="button">Send Message</button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
