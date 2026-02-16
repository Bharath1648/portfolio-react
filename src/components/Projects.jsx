// Projects.jsx
import React, { useState } from 'react';
import './Projects.css';
import { FaMusic, FaUsers, FaLeaf, FaBrain, FaGithub } from 'react-icons/fa';

const normalizeTech = (arr) => Array.from(new Set(arr.map(t => String(t).trim())));

const projects = [
  {
    id: 1,
    title: 'Moodify',
    icon: <FaMusic />,
    color: '#ff4d8b',
    subtitle: 'An intelligent emotion-based music recommendation system that analyzes user mood and preferences to suggest personalized playlists.',
    features: ['Emotion detection', 'Playlist generation', 'Music recommendation', 'User analytics'],
    tech: normalizeTech(['Python', 'Machine Learning']),
    github: 'https://github.com/Sohailll004/Depression.Ai.git'
  },
  {
    id: 2,
    title: 'Depression.AI',
    icon: <FaBrain />,
    color: '#ff6b3d',
    subtitle: 'Advanced mental health detection system with 90% accuracy using machine learning to identify depression patterns.',
    features: ['90% accuracy', 'Privacy focused', 'Real-time analysis', 'Professional dashboard'],
    tech: normalizeTech(['Python', 'TensorFlow', 'NLP', 'Flask', 'React', 'JavaScript', 'HTML', 'CSS', 'Machine Learning']),
    github: 'https://github.com/Sohailll004/Depression.Ai.git'
  },
  {
    id: 3,
    title: "TRAITX – Personality Prediction System",
    icon: <FaUsers />,
    color: '#ff6bcd',
    subtitle:
      'ML system that predicts OCEAN personality traits from text and behavioural signals to power recruitment and recommendation engines.',
    features: [
      'OCEAN trait classification from textual behaviour',
      'NLP preprocessing & feature extraction pipeline',
      'Emotional classification for deeper profiling',
      'Exportable profiles for recruitment & recommendation'
    ],
    tech: normalizeTech([
      'Python',
      'Scikit-learn',
      'NLTK / spaCy',
      'HTML',
      'CSS',
      'JavaScript',
      'Flask'
    ]),
    github: 'https://github.com/Bharath1648/Personality_Prediction_System.git'
  },
  {
    id: 4,
    title: 'Virtual Herbal Garden',
    icon: <FaLeaf />,
    color: '#ff9f43',
    subtitle: 'Interactive 3D plant explorer built with React, offering immersive learning about medicinal plants and herbs.',
    features: ['3D visualization', 'Plant database', 'Interactive learning', 'Educational content'],
    tech: normalizeTech(['React', 'Three.js', 'GLTF', 'CSS', 'HTML', 'JavaScript', 'Node.js', 'Python', 'Flask']),
    github: 'https://github.com/Sohailll004/herbalviewai.git'
  }
];

const ProjectCard = ({ project, isActive, onSelect }) => {
  const handleKeyDown = (e) => {
    // Support Enter and Space (some browsers report ' ' or 'Spacebar')
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') onSelect(project.id);
  };

  return (
    <div
      className={`project-card ${isActive ? 'active' : ''}`}
      onClick={() => onSelect(project.id)}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onKeyDown={handleKeyDown}
    >
      <div className="card-top">
        <div className="project-header">
          <div
            className="icon-circle"
            style={{ background: project.color + '20', boxShadow: `0 6px 20px ${project.color}33` }}
          >
            <div className="icon-inner" style={{ color: project.color }}>{project.icon}</div>
          </div>
          <h3 className="project-title">{project.title}</h3>
        </div>
      </div>

      <p className="project-subtitle">{project.subtitle}</p>

      <div className="project-grid">
        <div className="project-left">
          <h4 className="section-title">Key Features:</h4>
          <ul className="features-list">
            {project.features.map((f, i) => (
              <li key={i}>• {f}</li>
            ))}
          </ul>
        </div>

        <div className="project-right">
          <h4 className="section-title">Tech Stack:</h4>
          <div className="tech-list">
            {project.tech.map((t, i) => (
              <span key={i} className="tech-pill">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="project-actions">
        {project.github && (
          <a
            className="btn btn-github"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { e.stopPropagation(); }}
            aria-label={`View ${project.title} on GitHub`}
          >
            <FaGithub style={{ marginRight: 8 }} /> View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default function Projects() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            isActive={activeId === p.id}
            onSelect={(id) => setActiveId((prev) => (prev === id ? null : id))}
          />
        ))}
      </div>
    </section>
  );
}
