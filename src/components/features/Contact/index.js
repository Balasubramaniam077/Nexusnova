import React, { useState } from "react";
import styles from "./contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = "dev.nexusnova@gmail.com";
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    );
    window.open(`mailto:${email}?subject=${subject}&body=${body}`);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      <p className="fs-1">
        <strong>How can we help you?</strong>
      </p>
      <p className={`secondary_txt fs-5 ${styles.justify_txt}`}>
        We have custom plans to power your business. Tell us your needs, and
        we'll contact you shortly.
      </p>
      <div className="d-flex justify-content-center">
        <div className="my-5 w-75">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md mb-3">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  className={`form-control ${styles.form_input}`}
                  placeholder="Enter your first name"
                  onChange={handleChange}
                  value={formData.firstName}
                  required
                />
              </div>
              <div className="col-md mb-3">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  className={`form-control ${styles.form_input}`}
                  placeholder="Enter your last name"
                  onChange={handleChange}
                  value={formData.lastName}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                className={`form-control ${styles.form_input}`}
                placeholder="Enter your email address"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                name="subject"
                placeholder="How can we help you?"
                className={`form-control ${styles.form_input}`}
                onChange={handleChange}
                value={formData.subject}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                style={{ maxHeight: "200px" }}
                placeholder="write your message"
                className={`form-control ${styles.form_input}`}
                onChange={handleChange}
                value={formData.message}
                required
              ></textarea>
            </div>
            <button
              className={`my-3 btn ${styles.form_btn}`}
              style={{ width: "100%" }}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div>
        <p className="fs-3 mb-5 primary_txt">
          <strong>More methods</strong>
        </p>
        <div className="d-flex flex-row gap-5 flex-wrap justify-content-around">
          <div className={`card mb-3 ${styles.card}`} style={{ minWidth: 300 }}>
            <div className="card-body">
              <h5 className="card-title text-center">Email</h5>
              <p className="card-text mt-3 text-center">
                <span className="bi bi-envelope"></span>
                <br />
                <a
                  href="dev.nexusnova@gmail.com"
                  className="secondary_txt ms-3"
                >
                  dev.nexusnova@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className={`card mb-3 ${styles.card}`} style={{ minWidth: 300 }}>
            <div className="card-body">
              <h5 className="card-title text-center">Location</h5>
              <div className="card-text mt-3 text-center">
                <span className="bi bi-geo-alt "></span>
                <address>
                  <span className="secondary_txt">
                    1/117 A6 1 st street, <br />
                    Ramakrishna Nagar, <br />
                    Kanniyampoondi , Avinashi,
                    <br /> Tirupur - 641663
                  </span>
                  <br />
                </address>
              </div>
            </div>
          </div>
          <div className={`card mb-3 ${styles.card}`} style={{ minWidth: 300 }}>
            <div className="card-body">
              <h5 className="card-title text-center">Phone</h5>
              <p className="card-text mt-3 text-center">
                <span className="bi bi-telephone"></span>
                <span className="d-flex flex-column justify-content-center align-items-center">
                  <a href="tel:++ 91 97512-21518" className="secondary_txt">
                    + 91 97512-21518
                  </a>
                  <a href="tel:+ 91 84281-77829" className="secondary_txt">
                    + 91 84281-77829
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
