import React from "react";
import delayed from "../assets/images/projects/delayed.png"
import AI_ImageDetector from "../assets/images/projects/AI_ImageDetector.png"
import carpool from "../assets/images/projects/carpool.png"
import AIGrading from "../assets/images/projects/AIGrading.png"
import replatform from "../assets/images/projects/replatform.png"
import integration from "../assets/images/projects/integration.png"
import grading from "../assets/images/projects/grading.png"
import downloader from "../assets/images/projects/downloader.png"
import rails from "../assets/images/projects/rails.png"
import youtube from "../assets/images/projects/youtube.png"
import bot from "../assets/images/projects/bot.png"


function Projects() {
    const projects = [
        {
            title: "Flight Delay Prediction and Analysis",
            category: "Academic Big Data / ML Project",
            image: delayed,
            github: "https://github.com/chiragrawat12/Flight-Delay-Prediction-and-Analysis",
            live: "",
            tech: ["Apache Spark", "SparkML", "Python", "Databricks"],
            highlights: [
                "Built a scalable flight delay prediction pipeline with Apache Spark and SparkML.",
                "Applied both classification and regression models to analyze and predict flight delay patterns.",
                "Engineered features and evaluated models in a distributed Databricks environment for large-scale data processing.",
            ],
        },
        {
            title: "AI-Generated Image Detector",
            category: "Academic Machine Learning Project",
            image: AI_ImageDetector,
            github: "https://github.com/Gladwin-Joseph/Ai-Image-Classifier",
            live: "",
            tech: ["Python", "PyTorch", "CNN", "Scikit-learn"],
            highlights: [
                "Built a two-phase deep learning pipeline to detect AI-generated images, starting with a logistic regression baseline and advancing to a custom CNN.",
                "Achieved 96.18% accuracy on the CIFAKE dataset with the final CNN model, significantly improving over the 68.5% baseline.",
                "Evaluated cross-dataset generalisation on Midjourney images, reaching 71.9% accuracy under domain shift and tuning thresholds for a better precision-recall tradeoff.",
            ],
        },
        {
            title: "Car Pooling System",
            category: "Academic Software Architecture Project",
            image: carpool,
            github: "https://github.com/Gladwin-Joseph/CarPoolingSystem",
            live: "https://carpoolingsystem.onrender.com/",
            tech: ["Java", "Spring Boot", "React.js", "PostgreSQL", "Microservices"],
            highlights: [
                "Built a full-stack carpooling platform using a microservices architecture with separate User, Ride, and Payment services.",
                "Used Spring Cloud Gateway and Eureka Discovery to manage routing and service communication across the system.",
                "Added Stripe payment integration, role-based access control, and ride booking workflows while serving as Project Manager and Systems Analyst on a 4-person team.",
            ],
        },
        {
            title: "AiGrading Application",
            category: "Enterprise Learning Platform",
            image: AIGrading,
            github: "",
            live: "",
            tech: [".NET (C#)", "Azure", "React.js", "LTI 1.3", "Brightspace APIs"],
            highlights: [
                "Developed an AI-powered grading application from scratch using React, .NET, and Azure, integrated with D2L Brightspace via LTI 1.3 for secure authentication and grade synchronization.",
                "Delivered AI-assisted feedback and iterative resubmission workflows that supported learner mastery on a platform serving over 75,000 learners.",
                "Implemented submission routing to an internal grading system for final manual review, improving workflow control and quality assurance.",
            ],
        },
        {
            title: "LMS Connector for D2L Brightspace Replatforming",
            category: "Enterprise Event-Driven Integration",
            image: replatform,
            github: "",
            live: "",
            tech: [".NET (C#)", "Azure", "Event Hub", "Service Bus", "Brightspace APIs"],
            highlights: [
                "Built an Azure serverless .NET integration service to process LMS events from D2L Brightspace for over 500,000 users.",
                "Designed an event-driven pipeline handling 1 to 2 million events per day using Event Hub and Service Bus for scalable ingestion, filtering, and reliable message delivery.",
                "Implemented grade synchronization with Anthology SIS as part of a large-scale LMS replatforming workflow.",
            ],
        },
        {
            title: "React Frontend Application with API Integration",
            category: "Internal Admin Platform",
            image: integration,
            github: "",
            live: "",
            tech: ["React.js", ".NET (C#)", "Brightspace APIs", "SQL"],
            highlights: [
                "Built a React-based management interface for maintaining course, lesson, and program mappings.",
                "Integrated the frontend with backend database operations through HTTP-triggered APIs in the LMS Connector service.",
                "Designed an intuitive internal workflow for updating mapping data more efficiently and accurately.",
            ],
        },
        {
            title: "Proprietary Grading Platform",
            category: "Legacy Platform Enhancement",
            image: grading,
            github: "",
            live: "",
            tech: [".NET (C#)", "React.js", "Legacy System"],
            highlights: [
                "Enhanced a legacy proprietary grading platform to better support assignment grading in a replatformed LMS environment.",
                "Improved usability and workflow efficiency for graders working with student submissions and review processes.",
                "Contributed to the modernization of an existing internal system while preserving compatibility with legacy platform behavior.",
            ],
        },
        {
            title: "D2L Print Application Optimization",
            category: "Performance Optimization",
            image: downloader,
            github: "",
            live: "",
            tech: [".NET (C#)", "AWS", "Brightspace APIs"],
            highlights: [
                "Redesigned the D2L Print application, a Brightspace LMS widget used to generate and download course content as PDF files.",
                "Implemented performance optimizations to improve PDF generation efficiency and reduce content download time.",
                "Enhanced application responsiveness and overall user experience for course content export workflows.",
            ],
        },
        {
            title: "PFX 2.0 / UNOW",
            category: "Legacy LMS Maintenance",
            image: rails,
            github: "",
            live: "",
            tech: ["Ruby on Rails", "Heroku", "Brightspace APIs"],
            highlights: [
                "Maintained a Ruby on Rails–based LMS application deployed on Heroku, ensuring reliable day-to-day operation.",
                "Worked with Brightspace APIs to support LMS functionality within an existing production environment.",
                "Contributed to the upkeep and stability of a legacy learning platform used in real educational workflows.",
            ],
        },
        {
            title: "YouTube Transcript Extractor Platform",
            category: "Freelance SaaS Product",
            image: youtube,
            github: "https://github.com/chiragrawat12/EZ_EverGreen",
            live: "",
            tech: ["Python", "Tkinter", "Selenium", "Django", "Google APIs", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
            highlights: [
                "Built a subscription-based desktop application that extracted YouTube video transcripts, metadata, and thumbnails.",
                "Developed a payment-enabled website to sell and manage access to the product as a commercial offering.",
                "Integrated the desktop app and website through Django APIs with authentication, and handled the full workflow from development to deployment.",
            ],
        },
        {
            title: "Alibaba Message Sender Bot",
            category: "Freelance Automation Tool",
            image: bot,
            github: "https://github.com/chiragrawat12/Alibaba-Message-Sender-Bot",
            live: "",
            tech: ["Python", "Tkinter", "Selenium", "MySQL", "Excel"],
            highlights: [
                "Built a desktop GUI application for a freelance client to automate seller outreach on Alibaba for specific products.",
                "Used Selenium to search product listings, send predefined messages to multiple sellers, and streamline manual communication.",
                "Captured seller details and exported them in Excel format for follow-up, tracking, and sourcing management.",
            ],
        }
    ];

    return (
        <section
            id="projects"
            className="min-h-screen md:h-screen min-w-126 flex justify-center items-center bg-bg px-4 py-16 md:px-8 lg:px-16 xl:px-20"
        >
            <div className="mx-auto w-full max-w-7xl">
                <div className="">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 flex justify-around items-center">
                        Projects
                    </h2>
                </div>
                <br />
                <div className="overflow-x-auto overflow-y-hidden pt-4 pb-4 no-scrollbar">
                    <div className="flex flex-nowrap items-stretch gap-4 md:gap-6 snap-x snap-mandatory md:px-10">
                        {projects.map((project, index) => (
                            <article
                                key={index}
                                className="border border-white/20 bg-white/12 backdrop-blur-md shadow-xl hover:bg-white/16 transition duration-300 hover:scale-103 hover:border-secondary flex-none h-fit w-[88vw] sm:w-[75vw] md:w-[48vw] lg:w-[36vw] xl:w-[30vw] snap-start rounded-3xl"
                            >
                                {project.image && (
                                    <div className="w-full h-44 sm:h-52 overflow-hidden bg-white rounded-t-3xl">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition duration-300 hover:scale-105"
                                        />
                                    </div>
                                )}

                                <div className="p-4 sm:p-5 md:p-6 flex flex-col h-full gap-2">
                                    <div className="mb-4">
                                        <p className="text-xs sm:text-sm font-medium text-secondaryAlt mb-1">
                                            {project.category}
                                        </p>
                                        <h3 className="text-md sm:text-lg font-bold text-white leading-snug">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((item, i) => (
                                            <span
                                                key={i}
                                                className="bg-white/15 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-medium"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    <ul className="rounded-xl border-2 border-white/15 overflow-y-auto h-[20vh] no-scrollbar list-disc pl-5 space-y-2 text-sm sm:text-base text-white leading-6 sm:leading-7 mb-5">
                                        {project.highlights.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-3 mt-auto">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="rounded-xl bg-black px-4 py-2 text-sm sm:text-base text-white font-medium hover:bg-[#292929] transition"
                                            >
                                                GitHub
                                            </a>
                                        )}

                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="rounded-xl bg-secondary px-4 py-2 text-sm sm:text-base text-white font-medium hover:bg-secondaryAlt transition"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Projects;