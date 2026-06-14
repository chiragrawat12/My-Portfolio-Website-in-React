import React, { useState, useEffect } from "react";

import azureCert from "../assets/images/certificates/AZ900.jpeg";
import michigan from "../assets/images/certificates/michigan.png";
import ict from "../assets/images/certificates/ict.png";
import hcl from "../assets/images/certificates/hcl.png";
import qualitest_appreciation from "../assets/images/certificates/qualitest_appreciation.png";
import genai from "../assets/images/certificates/genai.png";
import dotnetdev from "../assets/images/certificates/dotnetdev.png";
import dotnetmvc from "../assets/images/certificates/dotnetmvc.png";
import sql from "../assets/images/certificates/sql.png";
import coop from "../assets/images/certificates/coop.png";
import cleancode from "../assets/images/certificates/cleancode.png";
import cspeed from "../assets/images/certificates/cspeed.png";
import cbeg from "../assets/images/certificates/cbeg.png";
import azserverless from "../assets/images/certificates/azserverless.png";
import az900bootcamp from "../assets/images/certificates/az900bootcamp.png";
import dotnetintro from "../assets/images/certificates/dotnetintro.png";

function Certifications() {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const certificates = [
        {
            title: "AZ-900 Microsoft Certified: Azure Fundamentals",
            issuer: "Microsoft",
            date: "May 2025",
            image: azureCert, // azureCert
            verifyLink: "https://learn.microsoft.com/en-gb/users/chiragrawat12/credentials/F9A4A2EEA404289F?ref=https%3a%2f%2fwww.linkedin.com%2f",  // optional verification URL
            description:
                "Foundational certification covering Azure cloud concepts, services, pricing, governance, and security.",
        },
        {
            title: "Qualitest - Certificate of Appreciation",
            issuer: "Qualitest",
            date: "November 2024",
            image: qualitest_appreciation,
            verifyLink: "",
            description: "Certificate of appreciation recognizing contributions to software quality assurance.",
        },
        {
            title: "Introduction to Data Science in Python",
            issuer: "Coursera (University of Michigan)",
            date: "July 2020",
            image: michigan,
            verifyLink: "https://www.coursera.org/account/accomplishments/verify/HXUGNE85NCE6",  // optional verification URL
            description: "Foundational certification demonstrating knowledge of Python for data science, including data manipulation, analysis, and basic visualization techniques.",
        },
        {
            title: "Python Programming – A Practical Approach",
            issuer: "Electronics & ICT Academy",
            date: "June 2020",
            image: ict,
            verifyLink: "",  // optional verification URL
            description: "Foundational certification demonstrating practical knowledge of Python programming, including core concepts, problem-solving, and basic application development.",
        },
        {
            title: "Foundation Training and Certification on Cyber Security",
            issuer: "HCLSoftware",
            date: "April 2021",
            image: hcl,
            verifyLink: "",  // optional verification URL
            description: "Foundational certification demonstrating knowledge of cybersecurity principles, including threat awareness, risk management, and basic security practices.",
        },


        {
            title: "A Gentle Introduction To ASP.NET For Beginners",
            issuer: "QCraft Learning (Qualitest)",
            date: "May 2024",
            image: dotnetintro,
            verifyLink: "",
            description: "Foundational certification demonstrating knowledge of ASP.NET, including building basic web applications and understanding core framework concepts.",
        },
        {
            title: ".NET Development - Foundation",
            issuer: "QCraft Learning (Qualitest)",
            date: "January 2024",
            image: dotnetdev,
            verifyLink: "https://qcraft.digitalbadges.skillsoft.com/37986ed3-7851-41b4-9cbd-f1386636a47f#acc.kdwXE6WY",
            description: "Foundational certification demonstrating knowledge of .NET development, including core concepts, application structure, and basic development practices.",
        },
        {
            title: ".NET Core MVC - The Complete Guide 2025 [Ecommerce]",
            issuer: "QCraft Learning (Qualitest)",
            date: "January 2024",
            image: dotnetmvc,
            verifyLink: "",
            description:
                "Certification demonstrating practical knowledge of .NET Core MVC, including building and structuring web applications with an eCommerce focus.",
        },
        {
            title: "C# Basics for Beginners:Learn C# Fundamentals by Coding",
            issuer: "QCraft Learning (Qualitest)",
            date: "July 2023",
            image: cbeg,
            verifyLink: "",
            description: "Foundational certification demonstrating knowledge of C# fundamentals, including syntax, data types, and basic programming concepts.",
        },
        {
            title: "C# Intermediate: Classes, Interfaces and OOP",
            issuer: "QCraft Learning (Qualitest)",
            date: "August 2023",
            image: coop,
            verifyLink: "",
            description: "Certification demonstrating knowledge of C# intermediate concepts, including object-oriented programming, classes, and interfaces.",
        },
        {
            title: "C# Developers: Learn the Art of Writing Clean Code",
            issuer: "QCraft Learning (Qualitest)",
            date: "August 2023",
            image: cleancode,
            verifyLink: "",
            description: "Certification demonstrating knowledge of clean code principles in C#, focusing on writing maintainable, readable, and efficient code.",
        },
        {
            title: "C# Developers: Double Your Coding Speed with Visual Studio",
            issuer: "QCraft Learning (Qualitest)",
            date: "July 2023",
            image: cspeed,
            verifyLink: "",
            description: "Certification demonstrating proficiency in Visual Studio tools and techniques to improve C# development speed and productivity.",
        },
        {
            title: "AZ-900 Bootcamp: Microsoft Azure Fundamentals (JULY 2025)",
            issuer: "QCraft Learning (Qualitest)",
            date: "May 2024",
            image: az900bootcamp,
            verifyLink: "",
            description:
                "Certification demonstrating knowledge of Azure fundamentals, including cloud concepts, core services, pricing, governance, and security.",
        },
        {
            title: "Azure Serverless Functions and Logic Apps",
            issuer: "QCraft Learning (Qualitest)",
            date: "January 2024",
            image: azserverless,
            verifyLink: "",
            description: "Certification demonstrating knowledge of Azure serverless services, including Functions and Logic Apps for building scalable, event-driven applications.",
        },
        {
            title: "Microsoft SQL for Beginners",
            issuer: "QCraft Learning (Qualitest)",
            date: "August 2023",
            image: sql,
            verifyLink: "",
            description: "Foundational certification demonstrating knowledge of SQL, including querying, data manipulation, and basic database management concepts.",
        },
        {
            title: "Introduction to Generative AI and Prompt Engineering",
            issuer: "QCraft Learning (Qualitest)",
            date: "June 2025",
            image: genai,
            verifyLink: "https://qcraft.digitalbadges.skillsoft.com/3ce69e5e-3efa-4aca-abf2-50545eea366e#acc.z6Zs8Xu1",
            description: "Foundational certification demonstrating knowledge of generative AI concepts and prompt engineering techniques for effective model interaction.",
        },




    ];

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedCertificate(null);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <section id="certifications" className="min-h-screen">
            <div
                className="min-h-screen xl:h-screen min-w-126 flex justify-center items-center px-4 py-16 md:px-8 lg:px-16 xl:px-20 bg-bg"
            >
                <div className="mx-auto w-full max-w-7xl">
                    <div className="mb-8 md:mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 flex justify-center items-center">
                            Certifications
                        </h2>
                    </div>

                    <div className="no-scrollbar overflow-x-auto overflow-y-hidden pt-10">
                        <div className="flex flex-nowrap items-stretch gap-4 md:gap-6 snap-x snap-mandatory">
                            {certificates.map((cert, index) => (
                                <article
                                    key={index}
                                    className="flex-none h-fit w-[88vw] sm:w-[75vw] md:w-[48vw] lg:w-[36vw] xl:w-[30vw] snap-start rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md shadow-xl hover:bg-white/15 hover:border-secondary hover:-translate-y-1 transition duration-300 overflow-hidden"
                                >
                                    {cert.image && (
                                        <button
                                            type="button"
                                            onClick={() => setSelectedCertificate(cert)}
                                            className="w-full h-48 sm:h-56 overflow-hidden bg-white/5 block"
                                        >
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="w-full h-full object-cover transition duration-300 hover:scale-105"
                                            />
                                        </button>
                                    )}

                                    <div className="p-4 sm:p-5 md:p-6 flex flex-col h-full gap-2">
                                        <div className="mb-4">
                                            <p className="text-xs sm:text-sm font-medium text-secondaryAlt mb-1">
                                                {cert.issuer}
                                            </p>
                                            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-2">
                                                {cert.title}
                                            </h3>
                                            <p className="text-sm text-blue-100">{cert.date}</p>
                                        </div>

                                        {cert.description && (
                                            <p className="text-sm sm:text-base text-blue-50 leading-6 sm:leading-7 mb-5">
                                                {cert.description}
                                            </p>
                                        )}

                                        <div className="flex flex-wrap gap-3 mt-auto">
                                            {cert.image && (
                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedCertificate(cert)}
                                                    className="cursor-pointer rounded-xl bg-white/15 px-4 py-2 text-sm sm:text-base text-white font-medium hover:bg-white/25 transition border border-white/10"
                                                >
                                                    View Certificate
                                                </button>
                                            )}

                                            {cert.verifyLink && (
                                                <a
                                                    href={cert.verifyLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="rounded-xl bg-secondary px-4 py-2 text-sm sm:text-base text-[#1b1b1b] font-medium hover:bg-secondaryAlt transition"
                                                >
                                                    Verify Credential
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {selectedCertificate?.image && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
                    onClick={() => setSelectedCertificate(null)}
                >
                    <div
                        className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-[#0b1a3a] border border-white/10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                            <div>
                                <h3 className="text-white font-semibold text-lg">
                                    {selectedCertificate.title}
                                </h3>
                                <p className="text-blue-100 text-sm">
                                    {selectedCertificate.issuer} • {selectedCertificate.date}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setSelectedCertificate(null)}
                                className="rounded-lg bg-white/10 px-3 py-2 text-white hover:bg-white/20 transition"
                            >
                                Close
                            </button>
                        </div>

                        <div className="max-h-[80vh] overflow-auto bg-[#09152d] flex items-center justify-center">
                            <img
                                src={selectedCertificate.image}
                                alt={selectedCertificate.title}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        <div className="flex flex-wrap gap-3 px-4 py-4 border-t border-white/10">
                            {selectedCertificate.verifyLink && (
                                <a
                                    href={selectedCertificate.verifyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl bg-[#eccc68] px-4 py-2 text-sm sm:text-base text-[#1b1b1b] font-medium hover:bg-[#ffd86b] transition"
                                >
                                    Verify Credential
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Certifications;