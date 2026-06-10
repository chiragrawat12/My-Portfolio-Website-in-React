import React, { useEffect, useState } from "react";

import cert from "../assets/images/certificates/AZ900.jpeg";

function Achievements() {
    const [selectedAchievement, setSelectedAchievement] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [currentIndexes, setCurrentIndexes] = useState({});

    const achievements = [
        {
            title: "HighQ Award Winner - 2023",
            category: "Professional Recognition",
            date: "2023",
            issuer: "Qualitest Infotech Pvt. Ltd.",
            link: "",
            description:
                "Recognized for delivering high-quality solutions and exceeding client expectations through impactful engineering contributions.",
            images: [cert, cert, cert, cert, cert, cert, cert],
        },
        {
            title: "HighQ Award Winner - 2024",
            category: "Professional Recognition",
            date: "2024",
            issuer: "Qualitest Infotech Pvt. Ltd.",
            link: "",
            description:
                "Received recognition for continued technical excellence, reliable delivery, and strong contribution to business-critical projects.",
            images: [],
        },
        {
            title: "Lero Hack 2026 - Snapdragon: AI Unplugged Hackathon",
            category: "Hackathon",
            date: "2026",
            issuer: "University of Limerick",
            link: "",
            description:
                "Participated in an AI-focused hackathon, collaborating under time constraints to design and build an edge AI solution.",
            images: [],
        },
        {
            title: "Mentor - Teen-Turn Programme",
            category: "Leadership / Mentorship",
            date: "2026",
            issuer: "University of Limerick",
            link: "",
            description:
                "Mentored teenage girls from underserved communities in STEM, supporting hands-on technical learning and career encouragement.",
            images: [],
        },
    ];

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedAchievement(null);
                setSelectedImageIndex(0);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const openModal = (achievement, imageIndex = 0) => {
        if (!achievement.images || achievement.images.length === 0) return;
        setSelectedAchievement(achievement);
        setSelectedImageIndex(imageIndex);
    };

    const closeModal = () => {
        setSelectedAchievement(null);
        setSelectedImageIndex(0);
    };

    const nextImage = () => {
        if (!selectedAchievement?.images?.length) return;
        setSelectedImageIndex(
            (prev) => (prev + 1) % selectedAchievement.images.length
        );
    };

    const previousImage = () => {
        if (!selectedAchievement?.images?.length) return;
        setSelectedImageIndex(
            (prev) =>
                (prev - 1 + selectedAchievement.images.length) %
                selectedAchievement.images.length
        );
    };

    const goToCardImage = (achievementIndex, imageIndex, totalImages) => {
        setCurrentIndexes((prev) => ({
            ...prev,
            [achievementIndex]:
                imageIndex >= totalImages ? 0 : imageIndex,
        }));
    };

    return (
        <section id="achievements">
            <div

                className="h-screen min-w-126 flex justify-around items-center px-4 py-16 md:px-8 lg:px-16 xl:px-20 bg-gradient-to-br from-[#0b1a3a] via-[#102d6b] to-[#1e90ff]"
            >
                <div className="mx-auto w-full max-w-7xl">
                    <div className="mb-8 md:mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                            Achievements
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-3xl leading-7">
                            Awards, recognitions, hackathon participation, and mentorship moments from my academic and professional journey.
                        </p>
                    </div>

                    <div className="overflow-x-auto overflow-y-hidden pt-4 pb-4 thin-scrollbar">
                        <div className="flex flex-nowrap items-stretch gap-4 md:gap-6 snap-x snap-mandatory">
                            {achievements.map((achievement, index) => {
                                const hasImages = achievement.images && achievement.images.length > 0;
                                const currentIndex = currentIndexes[index] || 0;
                                const currentImage = hasImages ? achievement.images[currentIndex] : null;

                                return (
                                    <article
                                        key={index}
                                        className="flex-none w-[88vw] sm:w-[75vw] md:w-[52vw] lg:w-[40vw] xl:w-[34vw] snap-start rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md shadow-xl hover:bg-white/15 transition duration-300 overflow-hidden"
                                    >
                                        {hasImages && (
                                            <div className="p-4 pb-0">
                                                <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                                                    <button
                                                        type="button"
                                                        onClick={() => openModal(achievement, currentIndex)}
                                                        className="w-full h-full block"
                                                    >
                                                        <img
                                                            src={currentImage}
                                                            alt={`${achievement.title} ${currentIndex + 1}`}
                                                            className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                                        />
                                                    </button>

                                                    {achievement.images.length > 1 && (
                                                        <>
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    goToCardImage(
                                                                        index,
                                                                        currentIndex - 1,
                                                                        achievement.images.length
                                                                    )
                                                                }
                                                                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white hover:bg-black/60 transition"
                                                            >
                                                                ‹
                                                            </button>

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    goToCardImage(
                                                                        index,
                                                                        currentIndex + 1,
                                                                        achievement.images.length
                                                                    )
                                                                }
                                                                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white hover:bg-black/60 transition"
                                                            >
                                                                ›
                                                            </button>

                                                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                                                                {achievement.images.map((_, dotIndex) => (
                                                                    <button
                                                                        key={dotIndex}
                                                                        type="button"
                                                                        onClick={() =>
                                                                            setCurrentIndexes((prev) => ({
                                                                                ...prev,
                                                                                [index]: dotIndex,
                                                                            }))
                                                                        }
                                                                        className={`h-2.5 w-2.5 rounded-full transition ${dotIndex === currentIndex
                                                                            ? "bg-[#eccc68]"
                                                                            : "bg-white/50"
                                                                            }`}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        <div className="p-4 sm:p-5 md:p-6 flex flex-col h-full">
                                            <div className="mb-4">
                                                <p className="text-xs sm:text-sm font-medium text-[#eccc68] mb-1">
                                                    {achievement.category}
                                                </p>
                                                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-2">
                                                    {achievement.title}
                                                </h3>

                                                <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-blue-100">
                                                    <span>{achievement.issuer}</span>
                                                    <span>•</span>
                                                    <span>{achievement.date}</span>
                                                </div>
                                            </div>

                                            <p className="text-sm sm:text-base text-blue-50 leading-6 sm:leading-7 mb-5">
                                                {achievement.description}
                                            </p>

                                            <div className="flex flex-wrap gap-3 mt-auto">
                                                {hasImages && (
                                                    <button
                                                        type="button"
                                                        onClick={() => openModal(achievement, currentIndex)}
                                                        className="rounded-xl bg-white/15 px-4 py-2 text-sm sm:text-base text-white font-medium hover:bg-white/25 transition border border-white/10"
                                                    >
                                                        View Image
                                                    </button>
                                                )}

                                                {achievement.link && (
                                                    <a
                                                        href={achievement.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="rounded-xl bg-[#eccc68] px-4 py-2 text-sm sm:text-base text-[#1b1b1b] font-medium hover:bg-[#ffd86b] transition"
                                                    >
                                                        View Link
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {selectedAchievement && selectedAchievement.images?.length > 0 && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-[#0b1a3a] border border-white/10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                            <div>
                                <h3 className="text-white font-semibold text-lg">
                                    {selectedAchievement.title}
                                </h3>
                                <p className="text-blue-100 text-sm">
                                    {selectedAchievement.issuer} • {selectedAchievement.date}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={closeModal}
                                className="rounded-lg bg-white/10 px-3 py-2 text-white hover:bg-white/20 transition"
                            >
                                Close
                            </button>
                        </div>

                        <div className="relative bg-[#09152d] flex items-center justify-center max-h-[80vh] overflow-hidden">
                            <button
                                type="button"
                                onClick={previousImage}
                                className="absolute left-4 z-10 rounded-full bg-black/40 px-4 py-3 text-white hover:bg-black/60 transition"
                            >
                                ‹
                            </button>

                            <img
                                src={selectedAchievement.images[selectedImageIndex]}
                                alt={`${selectedAchievement.title} ${selectedImageIndex + 1}`}
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />

                            <button
                                type="button"
                                onClick={nextImage}
                                className="absolute right-4 z-10 rounded-full bg-black/40 px-4 py-3 text-white hover:bg-black/60 transition"
                            >
                                ›
                            </button>
                        </div>

                        {selectedAchievement.images.length > 1 && (
                            <div className="flex justify-center gap-2 py-4 bg-[#09152d]">
                                {selectedAchievement.images.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setSelectedImageIndex(index)}
                                        className={`h-2.5 w-2.5 rounded-full transition ${index === selectedImageIndex
                                            ? "bg-[#eccc68]"
                                            : "bg-white/40"
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

export default Achievements;