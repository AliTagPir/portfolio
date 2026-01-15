import React, { useEffect, useRef } from "react";
import "./Experience.css";
import pythonIcon from "../assets/img/python-icon.svg";
import frontjsIcon from "../assets/img/javascript-icon.svg";
import awsIcon from "../assets/img/aws-icon.svg";
import airflowIcon from "../assets/img/airflow-icon.svg";

function Experience() {
  const jobs = [
    {
      title: "Self Devolopment and Travelling",
      company: "",
      description:
        "Developed scalable web applications using React and Node.js.",
      date: "Jan 2024 - Present",
      icons: [], // No icons for this job
    },
    {
      title: "Data/Software Engineer Apprentice",
      company: "Omnicom Media Group",
      description:
        "Designed and maintained ETL pipelines to process large datasets.",
      date: "Apr 2022 - Jan 2024",
      icons: [pythonIcon, awsIcon, airflowIcon], // SVG paths
    },
    {
      title: "Software Support Consultant",
      company: "H.A.N.D Technology",
      description: "Collaborated on building an MVP for a mobile app.",
      date: "Nov 2021 - Apr 2022",
      icons: [frontjsIcon], // JavaScript icon
    },
  ];

  // Reference to the timeline container
  const timelineRef = useRef(null);

  // Scroll observer logic
  useEffect(() => {
    const timelineItems =
      timelineRef.current.querySelectorAll(".timeline-item");

    const handleScroll = () => {
      timelineItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          item.classList.add("visible"); // Add `visible` class when in viewport
          item.classList.remove("hidden"); // Remove `hidden` class when in viewport
        } else {
          item.classList.remove("visible"); // Remove `visible` class
          item.classList.add("hidden"); // Add `hidden` class when out of viewport
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount to check already visible items

    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="timeline" ref={timelineRef}>
        {jobs.map((job, index) => (
          <div key={index} className="timeline-item">
            <span className="timeline-date">{job.date}</span>
            <div className="timeline-content">
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
              <p>{job.description}</p>
              {/* Render icons only if they exist */}
              {job.icons.length > 0 && (
                <div className="timeline-icons">
                  {job.icons.map((icon, i) => (
                    <img
                      key={i}
                      src={icon}
                      alt={`icon-${i}`}
                      className="icon"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;