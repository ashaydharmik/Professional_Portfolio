import React from "react";
import "./skills.scss";
import { FrontEnd } from "../../Data/SkillData";
import { BackEnd } from "../../Data/SkillData";
import { Others } from "../../Data/SkillData";
const Skills = () => {
  return (
    <>
      <div className="skill-container">
        <div className="heading">
          <h1>Skills</h1>
          <p>
            "Proficient in a range of technical, creative, and analytical
            skills, with a track record of delivering innovative projects while
            effectively communicating and collaborating within dynamic
            environments."
          </p>
        </div>
        <div className="skill-content">
          <div className="skill-left">
            <div className="box">
              {FrontEnd.map((skill) => (
                <div className="title">
                  <h2>{skill.title}</h2>
                  <div className="content">
                    {skill.skills.map((item) => (
                      <div className="skill-img">
                        <img
                          src={item.image}
                          alt=""
                          width="24px"
                          height="24px"
                        />
                       <span>{item.name}</span> 
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="box">
              {BackEnd.map((skill) => (
                <div className="title">
                  <h2>{skill.title}</h2>
                  <div className="content">
                    {skill.skills.map((item) => (
                      <div className="skill-img">
                        <img
                          src={item.image}
                          alt=""
                          width="24px"
                          height="24px"
                        />
                       <span>{item.name}</span> 
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="box">
              {Others.map((skill) => (
                <div className="title">
                  <h2>{skill.title}</h2>
                  <div className="content">
                    {skill.skills.map((item) => (
                      <div className="skill-img">
                        <img
                          src={item.image}
                          alt=""
                          width="24px"
                          height="24px"
                        />
                       <span>{item.name}</span> 
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="skill-right">
            <div className="box-2">
                <div className="heading">
                    <h2>Analytical skills</h2>
                </div>
                <div className="circle-content">
                    <div className="circle-1">
                        <div className="circle">
                            <p>90%</p>
                        </div>
                        <div id="desc"><p>communication</p></div>
                    </div>
                    <div className="circle-1"><div className="circle">
                            <p>90%</p>
                        </div></div>
                    <div className="circle-1"><div className="circle">
                            <p>90%</p>
                        </div></div>
                    <div className="circle-1">
                    <div className="circle">
                            <p>90%</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
