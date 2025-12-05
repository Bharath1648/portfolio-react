import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import profileImg from "../assets/profile.jpeg";
// Framer Motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h1 className="about-main">
          About <span>Me</span>
        </h1>
        <p className="about-sub">
          Get to know more about my background, education, and what drives my
          passion for technology.
        </p>
      </div>

      <div className="about-container">
        {/* LEFT: image placed lower like reference */}
        <div className="about-left">
            <div className="profile-wrap" onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--x", `${x}px`);
                e.currentTarget.style.setProperty("--y", `${y}px`);
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.setProperty("--x", `50%`);
                e.currentTarget.style.setProperty("--y", `50%`);
            }}>
                <img src={profileImg} alt="Babbulu" className="profile-image" />
            </div>
        </div>

        {/* RIGHT: stacked info cards with motion */}
        <motion.div
          className="about-right"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.15 }}
        >
          <motion.article className="card whoami" variants={cardVariant}>
            <h3 className="card-title"> 👨‍💻 Who Am I?</h3>
            <p className="card-text">
              I am a passionate fresher full stack developer from Hyderabad with a
              strong focus on AI, Machine Learning, and RPA technologies. I love
              creating innovative solutions that make a real difference. My
              journey in technology started with curiosity and has evolved into a
              deep commitment to building impactful digital experiences.
            </p>
          </motion.article>

<motion.article className="card contact" variants={cardVariant}>
  <h3 className="card-title"> ✉️ Contact Information</h3>

  <ul className="contact-list">
    <li>
      <span className="contact-icon">📞</span>
      <a href="tel:+916281906017" className="contact-link">+91 6281906017</a>
    </li>

    <li>
      <span className="contact-icon">📬</span>
      <a href="mailto:marupakabharathkumar1648@gmail.com" className="contact-link">
        marupakabharathkumar1648@gmail.com
      </a>
    </li>

    <li>
      <span className="contact-icon">📌</span>
      <a 
        href="https://www.google.com/maps/search/?api=1&query=Hyderabad,India"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        Hyderabad, India
      </a>
    </li>
  </ul>
</motion.article>


        <motion.article className="card education old-edu-style" variants={cardVariant}>
  <h3 className="card-title"> 🎓 Education</h3>

  <div className="edu-list old-style-list">
    <div className="edu-item old-style-item">
      <div className="edu-left">
        <strong>MVSR Engineering College</strong>
        <div className="edu-sub">B.Tech in Information Technology</div>
        <div className="edu-date">2021 – 2025</div>
      </div>
      <div className="edu-right">GPA 8.54</div>
    </div>

    <div className="edu-item old-style-item">
      <div className="edu-left">
        <strong>Narayana Junior College</strong>
        <div className="edu-sub">Intermediate</div>
        <div className="edu-date">2019 – 2021</div>
      </div>
      <div className="edu-right">GPA 9.3</div>
    </div>

    <div className="edu-item old-style-item">
      <div className="edu-left">
        <strong>Orbit E Techno School</strong>
        <div className="edu-sub">High School</div>
        <div className="edu-date">2018 – 2019</div>
      </div>
      <div className="edu-right">GPA 9.8</div>
    </div>
  </div>
</motion.article>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
