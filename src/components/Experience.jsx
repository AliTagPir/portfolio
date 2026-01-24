import React, { useEffect, useRef, useState } from "react";
import "./Experience.css";
import pythonIcon from "../assets/img/python-icon.svg";
import frontjsIcon from "../assets/img/javascript-icon.svg";
import awsIcon from "../assets/img/aws-icon.svg";
import airflowIcon from "../assets/img/airflow-icon.svg";

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const jobs = [
    {
      title: "Self Development and Travelling",
      company: "",
      blurb: "Taking time for personal growth and exploration.",
      description: [
        "Developed scalable web applications using React and Node.js.",
        "Additional paragraph about your self-development journey goes here."
      ],
      date: "Jan 2024 - Present",
      icons: [],
    },
    {
      title: "Data/Software Engineer Apprentice",
      company: "Omnicom Media Group",
      blurb: "Built ETL pipelines and Vue.js applications in an agile environment.",
      description: [
        "Completed a software engineering apprenticeship through Multiverse, gaining hands-on experience across data and web development. Designed, built and deployed ETL pipelines using Python, Airflow DAGs and AWS to support business-critical data workflows.",
        "Also contributed to internal Vue.js web applications used by agencies to track and manage Meta advertising campaigns.",
        "Worked closely with engineers, analysts and stakeholders in an agile environment, developing strong communication and collaboration skills."
      ],
      date: "Apr 2022 - Jan 2024",
      icons: [pythonIcon, awsIcon, airflowIcon],
    },
    {
      title: "Software Support Consultant",
      company: "H.A.N.D Technology",
      blurb: "Provided client-facing support whilst developing internal systems",
      description: [
        "I supported clients in their day-to-day use of the platform, delivering training sessions, handling product and technical queries, and producing customised onboarding contracts using HTML-based documents tailored to client requirements.",
        "Alongside client support, I built a simple internal ticketing bot using JavaScript and Slack APIs to help the team log and manage support requests before a formal ticketing system was introduced."
      ],
      date: "Nov 2021 - Apr 2022",
      icons: [frontjsIcon],
    },
  ];

  const timelineRef = useRef(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    const timelineItems =
      timelineRef.current.querySelectorAll(".timeline-item");

    const handleScroll = () => {
      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        // Don't hide expanded items
        if (isInViewport || expandedIndex === index) {
          item.classList.add("visible");
          item.classList.remove("hidden");
        } else {
          item.classList.remove("visible");
          item.classList.add("hidden");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [expandedIndex]); // Add expandedIndex as dependency

  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="timeline" ref={timelineRef}>
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`timeline-item ${
              expandedIndex === index ? "expanded" : ""
            }`}
          >
            <span className="timeline-date">{job.date}</span>
            <div
              className="timeline-content"
              onClick={() => toggleExpand(index)}
            >
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
              <div className="timeline-description">
                {expandedIndex === index ? (
                  // Render multiple paragraphs when expanded
                  job.description.map((paragraph, i) => (
                    <p key={`${index}-${i}`}>{paragraph}</p>
                  ))
                ) : (
                  // Render single blurb when collapsed
                  <p key={`${index}-blurb`}>{job.blurb}</p>
                )}
              </div>
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
              <span className="expand-indicator">
                {expandedIndex === index ? "Click to collapse" : "Click to expand"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;