import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiCpu, FiLayers, FiServer, FiTool, FiMonitor } from "react-icons/fi";
import "./Skills.css";

const skillGroups = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", value: 90 },
      { name: "Python", value: 85 },
      { name: "JavaScript", value: 80 },
      { name: "C", value: 70 },
    ],
  },
  {
    title: "Frontend Technologies",
    items: [
      { name: "React", value: 85 },
      { name: "HTML5", value: 95 },
      { name: "CSS3", value: 90 },
      { name: "Bootstrap", value: 85},
      { name: "Tailwind CSS", value: 80 },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { name: "SQL", value: 85 },
      { name: "PL/SQL", value: 80 },
      { name: "Node.js", value: 70 },
      { name: "MongoDB", value: 65 },
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      { name: "Git & GitHub", value: 90 },
      { name: "VS Code", value: 95 },
      { name: "Docker", value: 60 },
      { name: "Jenkins", value: 55 },
      { name: "Linux", value: 70 },
    ],
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <header className="skills-header">
        <h2 className="skills-title">
          Technical <span>Skills</span>
        </h2>
        <p className="skills-sub">
          Here are the technologies and tools I work with to bring ideas to life.
        </p>
      </header>

      <motion.div
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* left / right groups: display two columns */}
        <div className="skills-column">
          {/* left column: first two groups */}
          {skillGroups.slice(0, 2).map((group, idx) => (
            <SkillCard key={group.title} group={group} variant={cardVariant} />
          ))}
        </div>

        <div className="skills-column">
          {/* right column: last two groups */}
          {skillGroups.slice(2, 4).map((group) => (
            <SkillCard key={group.title} group={group} variant={cardVariant} />
          ))}
        </div>
      </motion.div>

      {/* feature cards row */}
      <div className="features-row">
        <FeatureCard icon={<FiCpu />} title="AI & Machine Learning" text="Developing intelligent solutions with modern ML frameworks" />
        <FeatureCard icon={<FiTool />} title="RPA Development" text="Automating business processes with robotic process automation" />
        <FeatureCard icon={<FiMonitor />} title="Full Stack Development" text="End-to-end web application development with modern technologies" />
      </div>
    </section>
  );
}

/* SkillCard component */
function SkillCard({ group, variant }) {
  // set mouse variables on card for glow
  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mx", `${x}px`);
    e.currentTarget.style.setProperty("--my", `${y}px`);
  }
  function handleLeave(e) {
    e.currentTarget.style.setProperty("--mx", `50%`);
    e.currentTarget.style.setProperty("--my", `50%`);
  }

  return (
    <motion.article
      className="skill-card"
      variants={variant}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="skill-card-head">
        <h3>{group.title}</h3>
      </div>

      <div className="skill-list">
        {group.items.map((it) => (
          <SkillRow key={it.name} name={it.name} value={it.value} />
        ))}
      </div>
    </motion.article>
  );
}

/* SkillRow: label + progress bar (animated) */
function SkillRow({ name, value }) {
  return (
    <div className="skill-row">
      <div className="skill-left">
        <span className="skill-name">{name}</span>
      </div>

      <div className="skill-right">
        <div className="progress-wrap" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
          <div className="progress-track" />
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${value}%` }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
        <div className="skill-value">{value}%</div>
      </div>
    </div>
  );
}

/* Feature card (bottom row) */
function FeatureCard({ icon, title, text }) {
  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mx", `${x}px`);
    e.currentTarget.style.setProperty("--my", `${y}px`);
  }
  function handleLeave(e) {
    e.currentTarget.style.setProperty("--mx", `50%`);
    e.currentTarget.style.setProperty("--my", `50%`);
  }

  return (
    <motion.div
      className="feature-card"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      <div className="feature-icon">{icon}</div>
      <h4 className="feature-title">{title}</h4>
      <p className="feature-text">{text}</p>
    </motion.div>
  );
}
