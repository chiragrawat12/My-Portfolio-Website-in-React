import React, { useState } from "react";
import dotnet from "../assets/images/skills/dotnet.png";
import react from "../assets/images/skills/react.png";
import javascript from "../assets/images/skills/javascript.png";
import typeScript from "../assets/images/skills/typescript.png";
import html from "../assets/images/skills/html.png";
import css from "../assets/images/skills/css.png";
import tailwind from "../assets/images/skills/tailwind.png";
import bootstrap from "../assets/images/skills/bootstrap.png";
import python from "../assets/images/skills/python.png";
import java from "../assets/images/skills/java.png";
import rails from "../assets/images/skills/rails.png";
import django from "../assets/images/skills/django.png";
import springboot from "../assets/images/skills/springboot.png";
import node from "../assets/images/skills/node.png";
import sql from "../assets/images/skills/sql.png";
import mysql from "../assets/images/skills/mysql.png";
import postgresql from "../assets/images/skills/postgresql.png";
import sqlite from "../assets/images/skills/sqlite.png";
import azure from "../assets/images/skills/azure.png";
import aws from "../assets/images/skills/aws.png";
import databricks from "../assets/images/skills/databricks.png";
import apachespark from "../assets/images/skills/apachespark.png";
import pytorch from "../assets/images/skills/pytorch.png";
import scikitlearn from "../assets/images/skills/scikitlearn.png";
import selenium from "../assets/images/skills/selenium.png";
import tkinter from "../assets/images/skills/tkinter.png";
import microservices from "../assets/images/skills/microservices.png";
import restapi from "../assets/images/skills/restapi.png";
import lti from "../assets/images/skills/lti.png";
import brightspace from "../assets/images/skills/brightspace.png";
import eventhub from "../assets/images/skills/eventhub.png";
import servicebus from "../assets/images/skills/servicebus.png";
import stripe from "../assets/images/skills/stripe.png";
import googleapi from "../assets/images/skills/googleapi.png";
import git from "../assets/images/skills/git.png";
import github from "../assets/images/skills/github.png";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function Skills() {
    const [sectionRef, show] = useRevealOnScroll({ threshold: 0.2 });
    const [activeSkill, setActiveSkill] = useState(null);

    const skills = [
        { name: ".NET / C#", icon: dotnet },
        { name: "React.js", icon: react },
        { name: "JavaScript", icon: javascript },
        { name: "TypeScript", icon: typeScript },
        { name: "HTML5", icon: html },
        { name: "CSS3", icon: css },
        { name: "Tailwind CSS", icon: tailwind },
        { name: "Bootstrap", icon: bootstrap },
        { name: "Python", icon: python },
        { name: "Java", icon: java },
        { name: "Ruby on Rails", icon: rails },
        { name: "Django", icon: django },
        { name: "Spring Boot", icon: springboot },
        { name: "Node.js", icon: node },
        { name: "SQL", icon: sql },
        { name: "MySQL", icon: mysql },
        { name: "PostgreSQL", icon: postgresql },
        { name: "SQLite", icon: sqlite },
        { name: "Azure", icon: azure },
        { name: "AWS", icon: aws },
        { name: "Databricks", icon: databricks },
        { name: "Apache Spark", icon: apachespark },
        { name: "PyTorch", icon: pytorch },
        { name: "Scikit-learn", icon: scikitlearn },
        { name: "Selenium", icon: selenium },
        { name: "Tkinter", icon: tkinter },
        { name: "Microservices", icon: microservices },
        { name: "REST APIs", icon: restapi },
        { name: "LTI 1.3", icon: lti },
        { name: "Brightspace APIs", icon: brightspace },
        { name: "Event Hub", icon: eventhub },
        { name: "Service Bus", icon: servicebus },
        { name: "Stripe", icon: stripe },
        { name: "Google APIs", icon: googleapi },
        { name: "Git", icon: git },
        { name: "GitHub", icon: github },
    ];

    const handleToggle = (index) => {
        setActiveSkill(activeSkill === index ? null : index);
    };

    return (
        <section
            id="skills"
            className="min-h-screen lg:h-screen min-w-126 flex justify-center items-center bg-white px-4 py-16 md:px-8 lg:px-16 xl:px-20"
        >
            <div ref={sectionRef} className={`reveal-section ${show ? "show" : ""} mx-auto max-w-7xl w-full`}>
                <div className="mb-12 text-center">
                    <h2 className="pb-10 text-3xl md:text-4xl font-bold text-bg mb-3">
                        Skills & Tools
                    </h2>
                </div>
                <br />
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center justify-center"
                            onMouseEnter={() => setActiveSkill(index)}
                            onMouseLeave={() => setActiveSkill(null)}
                        >
                            <button
                                type="button"
                                onClick={() => handleToggle(index)}
                                className="w-[100px] h-[100px] transition-transform duration-300 group-hover:scale-105 flex items-center justify-center hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                aria-label={skill.name}
                            >
                                <div className="object-contain ">
                                    {/* {skill.icon} */}
                                    <img width={96} src={skill.icon} alt="" />
                                </div>
                            </button>

                            <div
                                className={`pointer-events-none absolute -top-12 left-1/2 z-20 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0b1a3a]/95 px-3 py-2 text-center shadow-xl transition-all duration-300 ${activeSkill === index
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-2"
                                    }`}
                            >
                                <p className="whitespace-nowrap text-sm font-semibold text-white">
                                    {skill.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;