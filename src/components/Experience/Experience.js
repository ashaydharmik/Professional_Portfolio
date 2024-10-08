import React from "react";
import "./experience.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

const Experience = () => {
  return (
    <>
    
      <div className="exp-container">
        <div className="heading">
          <h1>Education & Experience</h1>
        </div>
        <VerticalTimeline lineColor="linear-gradient(135deg, #E2B0FF 10%, #9F44D3 100%);">
          
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017 - 2020"
            gap="5px"
            iconStyle={{background: "#9000ff", color: "white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              The Oxford Polytechnic College, Banglore, Karnataka
            </h3>
            <p>Diploma in Computer Science</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 - 2023"
            iconStyle={{background: "#9000ff", color: "white" }}
            icon={<FaUniversity />}
          >
            <h3 className="vertical-timeline-element-title">
              Jyothy Institute of Technology, Banglore, Karnataka
            </h3>
            <p>Bachelore of Engineering(BE) in Computer Science</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="26-Sept-2022  to  26-Mar-2023"
            iconStyle={{background: "#9000ff", color: "white"}}
            icon={< FaBuilding/>}
            
          >
            <h3 className="vertical-timeline-element-title">Tackle - D</h3>
            <p>
              Internship - Worked as a Junior Software Engineer-Intern
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="29-Mar-2023
            to  29-May-2023 "
            iconStyle={{background: "#9000ff", color: "white" }}
            icon={<FaBuilding />}
          >
            <h3 className="vertical-timeline-element-title">
              SHLR TECHNOSOFT PVT.LTD
            </h3>
            <p>Internship - Worked as Software Developer Intern</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="23-Nov-2023 onwards"
            iconStyle={{background: "#9000ff", color: "white" }}
            icon={<FaBuilding />}
          >
            <h3 className="vertical-timeline-element-title">
              Quantum IT Innovation
            </h3>
            <p>Internship - Working as Frontend Developer</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
