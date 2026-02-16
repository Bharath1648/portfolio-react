import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiCpu,
  FiLayers,
  FiServer,
  FiTool,
  FiMonitor,
} from "react-icons/fi";
import "./Skills.css";

/* ================= Skill Data ================= */

const skillGroups = [
  {
    title: "Programming Languages",
    icon: <FiCode />,
    items: [
      { name: "Java", value: 90 },
      { name: "Python", value: 85 },
      { name: "JavaScript", value: 80 },
      { name: "C", value: 70 },
    ],
  },
  {
    title: "Frontend Technologies",
    icon: <FiLayers />,
    items: [
      { name: "React", value: 85 },
      { name: "HTML5", value: 95 },
      { name: "CSS3", value: 90 },
      { name: "Bootstrap", value: 85 },
      { name: "Tailwind CSS", value: 80 },
    ],
  },
  {
    title: "Backend & Database",
    icon: <FiServer />,
    items: [
      { name: "SQL", value: 85 },
      { name: "PL/SQL", value: 80 },
      { name: "Node.js", value: 70 },
      { name: "MongoDB", value: 65 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <FiTool />,
    items: [
      { name: "Git & GitHub", value: 90 },
      { name: "VS Code", value: 95 },
      { name: "Docker", value: 60 },
      { name: "Jenkins", value: 55 },
      { name: "Linux", value: 70 },
    ],
  },
];

/* ================= Animations ================= */

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= Main Component ================= */

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="background-glow"></div>

      <header className="skills-header">
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical <span>Skills</span>
        </motion.h2>

        <p className="skills-sub">
          Technologies and tools I use to build scalable and intelligent applications.
        </p>
      </header>

      <motion.div
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillGroups.map((group) => (
          <SkillCard key={group.title} group={group} variant={cardVariant} />
        ))}
      </motion.div>

      <div className="features-row">
        <FeatureCard
          icon={<FiCpu />}
          title="AI & Machine Learning"
          text="Building intelligent systems using modern ML & AI technologies."
        />
        <FeatureCard
          icon={<FiTool />}
          title="RPA Development"
          text="Automating business workflows using robotic process automation."
        />
        <FeatureCard
          icon={<FiMonitor />}
          title="Full Stack Development"
          text="Creating high-performance frontend and backend applications."
        />
      </div>
    </section>
  );
}

/* ================= Skill Card ================= */

function SkillCard({ group, variant }) {
  return (
    <motion.article className="skill-card" variants={variant}>
      <div className="skill-card-head">
        <div className="skill-icon">{group.icon}</div>
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

/* ================= Skill Row ================= */

function SkillRow({ name, value }) {
  return (
    <div className="skill-row">
      <span className="skill-name">{name}</span>

      <div className="progress-wrap">
        <div className="progress-track"></div>

        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      <motion.span
        className="skill-value"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        {value}%
      </motion.span>
    </div>
  );
}

/* ================= Feature Card ================= */

function FeatureCard({ icon, title, text }) {
  return (
    <motion.div
      className="feature-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="feature-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{text}</p>
    </motion.div>
  );
}
