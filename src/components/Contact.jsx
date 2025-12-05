// Contact.jsx (fixed phone & location links)
import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./contact.css";

const contactItems = [
  {
    id: "email",
    title: "Email",
    value: "marupakabharathkumar1648@gmail.com",
    href: "mailto:marupakabharathkumar1648@gmail.com",
    icon: <FiMail />,
    accent: false,
  },
  {
    id: "phone",
    title: "Phone",
    value: "+91 6281906017",
    href: "tel:+916281906017",
    icon: <FiPhone />,
    accent: false,
  },
  {
    id: "location",
    title: "Location",
    value: "Kummarigudem, Mallikuderla, Hanamkonda, India",
    // decimal coordinates are URL-safe and reliable:
    href: "https://www.google.com/maps?q=17.947777,79.353417",
    icon: <GoLocation />,
    accent: false,
  },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <header className="contact-header">
          <h2 className="title">
            Get In <span className="title-accent">Touch</span>
          </h2>
          <p className="subtitle">
            Ready to collaborate on your next project? Let's connect and create something amazing together.
          </p>
        </header>

        <div className="contact-grid">
          {/* ONLY: Contact information card (form removed) */}
          <div className="card info-column full-width">
            <h3 className="card-title">Contact Information</h3>

            <div className="info-list">
              {contactItems.map((item) => {
                const isPhone = item.id === "phone";
                const isLocation = item.id === "location";

                return (
                  <div key={item.id} className={`info-item ${item.accent ? "highlighted" : ""}`}>
                    <div className={`icon-wrap ${item.accent ? "big" : ""}`}>{item.icon}</div>

                    <div className="info-text">
                      <h4 className="info-title">{item.title}</h4>

                      {/* phone: no target; email: mailto (ok to open); location: open in new tab */}
                      {isPhone ? (
                        <a
                          className={`info-value ${item.accent ? "accent" : ""}`}
                          href={item.href}
                          aria-label={`Call ${item.value}`}
                        >
                          {item.value}
                        </a>
                      ) : isLocation ? (
                        <a
                          className={`info-value ${item.accent ? "accent" : ""}`}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open location of ${item.value} in Google Maps`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <a
                          className={`info-value ${item.accent ? "accent" : ""}`}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Email ${item.value}`}
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="follow">
              <h4 className="follow-title">Follow Me</h4>
              <div className="socials">
                <a aria-label="LinkedIn" href="https://www.linkedin.com/in/marupaka-bharath-kumar-216b53257" target="_blank" rel="noreferrer" className="social-btn">
                  <FaLinkedin />
                </a>
                <a aria-label="GitHub" href="https://github.com/Bharath1648" target="_blank" rel="noreferrer" className="social-btn">
                  <FaGithub />
                </a>
                <a aria-label="Portfolio" href="#home" className="social-btn">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-footer" />
      </div>
    </section>
  );
}
