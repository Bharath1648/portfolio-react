import React, { useRef } from "react";
import "./Home.css";
import profileImg from "../assets/profile.jpeg"; // adjust path if needed

const Home = () => {
  const imgWrapRef = useRef(null);

  // small helper to update CSS vars for tilt
  const handleMouseMove = (e) => {
    const el = imgWrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0..1
    const py = (e.clientY - rect.top) / rect.height;  // 0..1

    // map to -1..1 and scale to degrees
    const rotateY = (px - 0.5) * 18;  // horizontal tilt
    const rotateX = (0.5 - py) * 14;  // vertical tilt

    el.style.setProperty("--rx", `${rotateX}deg`);
    el.style.setProperty("--ry", `${rotateY}deg`);
    el.style.setProperty("--scale", "1.04");
    el.style.setProperty("--glow-opacity", "1");
  };

  const handleMouseLeave = () => {
    const el = imgWrapRef.current;
    if (!el) return;
    // reset
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--scale", "1");
    el.style.setProperty("--glow-opacity", "0.85");
  };

  return (
    <section id="home" className="home">
      <div className="home-content">
        <h3 className="welcome">Welcome to my Portfolio</h3>

        <h1 className="title">
          Hi, I'm <span>Bharath kumar</span>
        </h1>

        <h2 className="subtitle">Full Stack Developer</h2>

        <p className="description">
          I build modern, fast, and visually stunning web applications with React,
          Node.js, AI integrations, and cloud technologies.
        </p>

        <div className="cta-row">
          <a href="#projects" className="cta-btn">
            View Projects 🚀
          </a>
          <a href="https://drive.google.com/file/d/1NN1MPJOPantEXorSJDcFGRrnprBOKV_4/view?usp=sharing" className="cta-btn alt" target="_blank" rel="noopener noreferrer">
            View Resume 📝
          </a>
        </div>
      </div>

      {/* Profile image wrapper with tilt handlers */}
      <div
        className="home-image"
        ref={imgWrapRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onFocus={() => imgWrapRef.current && imgWrapRef.current.classList.add("focused")}
        onBlur={() => imgWrapRef.current && imgWrapRef.current.classList.remove("focused")}
        tabIndex={0} /* keyboard focusable for accessibility */
        aria-label="Profile image of Bharath kumar"
      >
        <img src={profileImg} alt="Bharath kumar" draggable="false" />
      </div>
    </section>
  );
};

export default Home;
