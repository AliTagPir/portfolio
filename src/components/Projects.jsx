import React, { useState } from "react";
import "./Projects.css";
import alphrid1 from "../assets/img/alphrid1.jpg";
import alphrid2 from "../assets/img/alphrid2.jpg";
import alphrid3 from "../assets/img/alphrid3.png";
import mlProject1 from "../assets/img/ml-project1.png";
import mlProject2 from "../assets/img/ml-project2.jpg";
import mlProject3 from "../assets/img/ml-project3.jpg";
import githubIcon from "../assets/img/github-icon.svg";
import pythonIcon from "../assets/img/python-icon.svg";
import frontjsIcon from "../assets/img/javascript-icon.svg";
import awsIcon from "../assets/img/aws-icon.svg";
import airflowIcon from "../assets/img/airflow-icon.svg";

function Projects() {
  const alphridProjects = [
    {
      projectName: "ALPHRID 1.0",
      img: alphrid1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      technologies: [pythonIcon, awsIcon, airflowIcon],
      github: "https://github.com/your-profile/alphrid-1",
    },
    {
      projectName: "ALPHRID 2.0",
      img: alphrid2,
      description: "The second iteration, introducing performance improvements and new tools.",
      technologies: [pythonIcon, frontjsIcon],
      github: "https://github.com/your-profile/alphrid-2",
    },
    {
      projectName: "ALPHRID 3.0",
      img: alphrid3,
      description: "The latest version, featuring advanced features and AI integration.",
      technologies: [],
      github: "https://github.com/your-profile/alphrid-3",
    },
  ];

  const mlProjects = [
    {
      projectName: "ML Project 1",
      img: mlProject1,
      description: "A predictive analysis tool using neural networks.",
      technologies: [pythonIcon, awsIcon],
      github: "https://github.com/your-profile/ml-project-1",
    },
    {
      projectName: "ML Project 2",
      img: mlProject2,
      description: "An AI-powered recommendation engine.",
      technologies: [pythonIcon, airflowIcon],
      github: "https://github.com/your-profile/ml-project-2",
    },
    {
      projectName: "ML Project 3",
      img: mlProject3,
      description: "A computer vision system for object detection.",
      technologies: [pythonIcon, awsIcon, frontjsIcon],
      github: "https://github.com/your-profile/ml-project-3",
    },
  ];

  const [activeAlphridTab, setActiveAlphridTab] = useState(0);
  const [isAlphridTransitioning, setIsAlphridTransitioning] = useState(false);

  const [activeMLTab, setActiveMLTab] = useState(0);
  const [isMLTransitioning, setIsMLTransitioning] = useState(false);

  const handleAlphridTabClick = (index) => {
    if (index === activeAlphridTab) return;
    setIsAlphridTransitioning(true);
    setTimeout(() => {
      setActiveAlphridTab(index);
      setIsAlphridTransitioning(false);
    }, 300); // Match CSS transition duration
  };

  const handleMLTabClick = (index) => {
    if (index === activeMLTab) return;
    setIsMLTransitioning(true);
    setTimeout(() => {
      setActiveMLTab(index);
      setIsMLTransitioning(false);
    }, 300); // Match CSS transition duration
  };

  return (
    <div className="projects">
      <h2>Projects</h2>

      {/* ALPHRID Section */}
      <h3>ALPHRID</h3>
      <div className="project-overview"><p >ALPHRID stands for Automated Life Plexus for Home and Roaming with Intergrated Dags. This project was fsdfskjdfhjsdhjsdhfdshfjk dfsdjfjh dfhsdjf sfsdfsdf dsdfsdf ghfey fgdhdfhg dfjskfjkdskfjksdjfkdj </p></div>
      <div className="tabs">
        {alphridProjects.map((project, index) => (
          <button
            key={index}
            className={`tab ${index === activeAlphridTab ? "active" : ""}`}
            onClick={() => handleAlphridTabClick(index)}
          >
            {project.projectName}
          </button>
        ))}
      </div>
      <div className={`tab-content ${isAlphridTransitioning ? "fade-out" : "fade-in"}`}>
        <img src={alphridProjects[activeAlphridTab].img} alt={alphridProjects[activeAlphridTab].projectName} />
        <div className="content">
          <p>{alphridProjects[activeAlphridTab].description}</p>
          <div className="technologies">
            {alphridProjects[activeAlphridTab].technologies.map((tech, index) => (
              <img key={index} src={tech} alt="technology" className="tech-icon" />
            ))}
          </div>
          <a href={alphridProjects[activeAlphridTab].github} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </div>
      </div>

      {/* Machine Learning Section */}
      <h3>Machine Learning</h3>
      <div className="tabs">
        {mlProjects.map((project, index) => (
          <button
            key={index}
            className={`tab ${index === activeMLTab ? "active" : ""}`}
            onClick={() => handleMLTabClick(index)}
          >
            {project.projectName}
          </button>
        ))}
      </div>
      <div className={`tab-content ${isMLTransitioning ? "fade-out" : "fade-in"}`}>
        <img src={mlProjects[activeMLTab].img} alt={mlProjects[activeMLTab].projectName} />
        <div className="content">
          <p>{mlProjects[activeMLTab].description}</p>
          <div className="technologies">
            {mlProjects[activeMLTab].technologies.map((tech, index) => (
              <img key={index} src={tech} alt="technology" className="tech-icon" />
            ))}
          </div>
          <a href={mlProjects[activeMLTab].github} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;