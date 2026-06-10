import React, { useState, useEffect } from "react";

// Example imports
import azureCert from "../assets/images/certificates/AZ900.jpeg";
// import genAiCert from "../assets/images/certificates/genai-cert.jpg";
// import dotnetCert from "../assets/images/certificates/dotnet-cert.jpg";

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
            title: "AZ-900 Microsoft Certified: Azure Fundamentals",
            issuer: "Microsoft",
            date: "May 2025",
            image: azureCert, // azureCert
            verifyLink: "https://learn.microsoft.com/en-gb/users/chiragrawat12/credentials/F9A4A2EEA404289F?ref=https%3a%2f%2fwww.linkedin.com%2f",  // optional verification URL
            description:
                "Foundational certification covering Azure cloud concepts, services, pricing, governance, and security.",
        },
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
            title: "AZ-900 Microsoft Certified: Azure Fundamentals",
            issuer: "Microsoft",
            date: "May 2025",
            image: azureCert, // azureCert
            verifyLink: "https://learn.microsoft.com/en-gb/users/chiragrawat12/credentials/F9A4A2EEA404289F?ref=https%3a%2f%2fwww.linkedin.com%2f",  // optional verification URL
            description:
                "Foundational certification covering Azure cloud concepts, services, pricing, governance, and security.",
        },
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
            title: "Introduction to Generative AI and Prompt Engineering",
            issuer: "Certification Provider",
            date: "June 2025",
            image: "", // genAiCert
            verifyLink: "", // optional verification URL
            description:
                "Covers prompt engineering fundamentals, generative AI concepts, practical usage patterns, and responsible AI basics.",
        },
        {
            title: ".NET Development - Foundation",
            issuer: "Certification Provider",
            date: "Jan 2024",
            image: "", // dotnetCert
            verifyLink: "", // optional verification URL
            description:
                "Focused on .NET development fundamentals, backend concepts, and core application development practices.",
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
                className="h-screen min-w-126 flex justify-around items-center px-4 py-16 md:px-8 lg:px-16 xl:px-20 bg-gradient-to-br from-[#0b1a3a] via-[#102d6b] to-[#1e90ff]"
            >
                <div className="mx-auto w-full max-w-7xl">
                    <div className="mb-8 md:mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                            Certifications
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-3xl leading-7">
                            Professional certifications and credentials supporting my work in cloud, software engineering, and AI.
                        </p>
                    </div>

                    <div className="overflow-x-auto overflow-y-hidden pt-4 pb-4 thin-scrollbar">
                        <div className="flex flex-nowrap items-stretch gap-4 md:gap-6 snap-x snap-mandatory">
                            {certificates.map((cert, index) => (
                                <article
                                    key={index}
                                    className="flex-none w-[88vw] sm:w-[75vw] md:w-[48vw] lg:w-[36vw] xl:w-[30vw] snap-start rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md shadow-xl hover:bg-white/15 hover:-translate-y-1 transition duration-300 overflow-hidden"
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

                                    <div className="p-4 sm:p-5 md:p-6 flex flex-col h-full">
                                        <div className="mb-4">
                                            <p className="text-xs sm:text-sm font-medium text-[#eccc68] mb-1">
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
                                                    className="rounded-xl bg-white/15 px-4 py-2 text-sm sm:text-base text-white font-medium hover:bg-white/25 transition border border-white/10"
                                                >
                                                    View Certificate
                                                </button>
                                            )}

                                            {cert.verifyLink && (
                                                <a
                                                    href={cert.verifyLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="rounded-xl bg-[#eccc68] px-4 py-2 text-sm sm:text-base text-[#1b1b1b] font-medium hover:bg-[#ffd86b] transition"
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