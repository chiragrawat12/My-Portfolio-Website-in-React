import React from 'react'
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function Experience() {
    const [sectionRef, show] = useRevealOnScroll({ threshold: 0.2 });

    const experiences = [
        {
            role: "Engineer",
            company: "Qualitest Infotech Pvt. Ltd.",
            client: "Penn Foster Inc.",
            period: "Apr 2023 – Aug 2025",
            location: "Noida, India",
            description:
                "Worked on scalable EdTech platforms using .NET, React, SQL, and Azure, building AI-assisted grading workflows, LMS integrations, and internal tools for high-volume academic operations.",
            tags: [
                ".NET (C#)",
                "React",
                "Azure",
                "SQL",
                "LTI 1.3",
                "Event Hub",
                "Service Bus",
                "Brightspace APIs"
            ],
        },
        {
            role: "Graduate Engineer",
            company: "Qualitest Infotech Pvt. Ltd.",
            client: "Penn Foster Inc.",
            period: "Jan 2022 – Apr 2023",
            location: "Noida, India",
            description:
                "Maintained and optimized LMS applications, including legacy Ruby on Rails systems and PDF generation tools, improving platform reliability, responsiveness, and content delivery performance.",
            tags: [
                "Ruby on Rails",
                "Heroku",
                ".NET (C#)",
                "AWS",
                "Brightspace APIs",
                "PDF Optimization",
                "LMS",
            ],
        },
        {
            role: "Freelance Desktop Application Developer",
            company: "Fiverr",
            client: "Ezevergreen.com",
            period: "Sep 2020",
            location: "Remote",
            description:
                "Developed a desktop GUI application and companion payment website for YouTube transcript, metadata, and thumbnail extraction, integrating both products through Django APIs with secure authentication and deployment.",
            tags: [
                "Python",
                "Tkinter",
                "Selenium",
                "Django",
                "Google API",
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "MySQL",
            ],
        },
    ];

    return (
        <section
            id="experience"
            className="min-h-screen min-w-126 bg-bgAlt px-4 py-16 md:px-8 lg:px-16 xl:px-20 flex justify-center items-center"
        >
            <div ref={sectionRef} className={`mx-auto max-w-6xl reveal-section ${show ? "show" : ""}`}>
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Experience
                    </h2>
                </div>
                <br />
                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-white/30"></div>

                    <div className="space-y-10 md:space-y-16">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`pt-5 relative flex w-full ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                    }`}
                            >
                                <div className="hidden md:block absolute left-1/2 top-10 -translate-x-1/2 z-10">
                                    <div className="w-4 h-4 rounded-full bg-bgAlt border-4 border-secondary shadow-lg"></div>
                                </div>

                                <div className="w-full md:w-[calc(50%-2rem)]">
                                    <article className="rounded-2xl border border-white/20 bg-white/12 backdrop-blur-md shadow-xl px-5 py-5 sm:px-6 sm:py-6 hover:bg-white/16 transition duration-300">
                                        <div className="mb-4">
                                            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                                                {exp.role}
                                            </h3>
                                            <p className="text-sm sm:text-base text-secondaryAlt font-medium mt-1">
                                                {exp.company}
                                            </p>
                                            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-blue-100">
                                                <span>{exp.client}</span>
                                                <span className="hidden sm:inline">•</span>
                                                <span>{exp.period}</span>
                                                <span className="hidden sm:inline">•</span>
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-sm sm:text-base text-blue-50 leading-7 mb-5">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="rounded-full bg-white/15 px-3 py-1 text-xs sm:text-sm text-white border border-white/10"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </article>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;