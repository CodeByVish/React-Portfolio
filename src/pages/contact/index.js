// src/pages/contact/index.js
import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // npm i @emailjs/browser
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // IMPORTANT: don't wipe other fields; merge state
    setFormdata((prev) => ({ ...prev, loading: true, show: false }));

    // Match these keys to your EmailJS template variables exactly.
    // Most templates use from_name + reply_to (or from_email) + message.
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,     // if your template uses {{reply_to}}
      from_email: formData.email,   // if your template uses {{from_email}}
      message: formData.message,
      // Optional extras (safe to include; ignored if not in template):
      to_name: "Vishakha Maheshwari",
      to_email: contactConfig.YOUR_EMAIL,
    };

    try {
      // Helpful to confirm you’re using fresh IDs
      console.log("EmailJS IDs:", {
        service: contactConfig.YOUR_SERVICE_ID,
        template: contactConfig.YOUR_TEMPLATE_ID,
        publicKey: (contactConfig.YOUR_USER_ID || "").slice(0, 6) + "…",
      });

      const result = await emailjs.send(
        contactConfig.YOUR_SERVICE_ID,   // 
        contactConfig.YOUR_TEMPLATE_ID,  // "template_uz8avrh"
        templateParams,
        contactConfig.YOUR_USER_ID       // "Yj5ojzhdk8jHrR9mG" (Public Key)
      );

      console.log("EmailJS success:", result?.text || result);
      setFormdata((prev) => ({
        ...prev,
        loading: false,
        alertmessage: "SUCCESS! Thank you for your message.",
        variant: "success",
        show: true,
        // optional: clear inputs
        email: "",
        name: "",
        message: "",
      }));
    } catch (error) {
      console.error("EmailJS error:", error, error?.text);

      const raw = String(error?.text || error?.message || error);
      const friendly =
        raw.includes("Invalid grant") || raw.includes("Gmail_API")
          ? "Email service needs reconnection or updated IDs. Please try again later."
          : "Failed to send. Please try again.";

      setFormdata((prev) => ({
        ...prev,
        loading: false,
        alertmessage: `Failed to send! ${friendly}`,
        variant: "danger",
        show: true,
      }));

      // Ensure the alert scrolls into view without breaking layout
      const el = document.querySelector(".co_alert");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              variant={formData.variant}
              className={`rounded-0 co_alert ${formData.show ? "d-block" : "d-none"}`}
              onClose={() => setFormdata((prev) => ({ ...prev, show: false }))}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>

          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {"YOUR_FONE" in contactConfig && contactConfig.YOUR_FONE ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : null}
            </address>
            <p>{contactConfig.description}</p>
          </Col>

          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit" disabled={formData.loading}>
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>

      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
