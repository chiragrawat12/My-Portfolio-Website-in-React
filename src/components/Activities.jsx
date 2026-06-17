import React, { useEffect, useState } from "react";
import lerohackpicture1 from "../assets/images/activities/lerohack/picture1.png";
import lerohackpicture2 from "../assets/images/activities/lerohack/picture2.png";
import lerohackpicture3 from "../assets/images/activities/lerohack/picture3.png";
import lerohackpicture4 from "../assets/images/activities/lerohack/picture4.png";
import lerohackpicture5 from "../assets/images/activities/lerohack/picture5.png";
import lerohackpicture6 from "../assets/images/activities/lerohack/picture6.png";
import lerohackpicture7 from "../assets/images/activities/lerohack/picture7.png";
import lerohackpicture8 from "../assets/images/activities/lerohack/picture8.png";
import lerohackpicture9 from "../assets/images/activities/lerohack/picture9.png";
import teenturnpicture1 from "../assets/images/activities/teenturn/picture1.png";
import teenturnpicture2 from "../assets/images/activities/teenturn/picture2.jpg";
import teenturnpicture3 from "../assets/images/activities/teenturn/picture3.jpg";
import teenturnpicture4 from "../assets/images/activities/teenturn/picture4.jpg";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import useDragScroll from "../hooks/useDragScroll";

function Activities() {
    const { scrollRef, dragHandlers } = useDragScroll();
    const [sectionRef, show] = useRevealOnScroll({ threshold: 0.2 });
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [currentIndexes, setCurrentIndexes] = useState({});

    const activities = [
        {
            title: "Lero Hack 2026 - Snapdragon: AI Unplugged Hackathon",
            category: "Hackathon",
            date: "2026",
            organizer: "University of Limerick",
            link: "https://www.linkedin.com/posts/chiragrawat12_qualcommlerohack-ai-machinelearning-activity-7450541346227908608-9ylo?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACX1zroBUeiT6adA7J_MYQB3TnPjhS_5iWA",
            description:
                "Participated in an AI-focused hackathon, collaborating under time constraints to design and build an edge AI solution.",
            images: [lerohackpicture1, lerohackpicture2, lerohackpicture3, lerohackpicture4, lerohackpicture5, lerohackpicture6, lerohackpicture7, lerohackpicture8, lerohackpicture9],
        },
        {
            title: "Mentor - Teen-Turn Programme",
            category: "Mentorship",
            date: "2025 & 2026",
            organizer: "University of Limerick",
            link: "https://www.linkedin.com/posts/chiragrawat12_stem-activity-7404705667338645504--iR8?utm_source=share&utm_medium=member_desktop&rcm=ACoAACX1zroBUeiT6adA7J_MYQB3TnPjhS_5iWA",
            description:
                "Mentored teenage girls from underserved communities in STEM, supporting hands-on technical learning and career encouragement.",
            images: [teenturnpicture1, teenturnpicture2, teenturnpicture3, teenturnpicture4],
        },
    ];

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedActivity(null);
                setSelectedImageIndex(0);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const openModal = (activity, imageIndex = 0) => {
        if (!activity.images || activity.images.length === 0) return;
        setSelectedActivity(activity);
        setSelectedImageIndex(imageIndex);
    };

    const closeModal = () => {
        setSelectedActivity(null);
        setSelectedImageIndex(0);
    };

    const nextImage = () => {
        if (!selectedActivity?.images?.length) return;
        setSelectedImageIndex(
            (prev) => (prev + 1) % selectedActivity.images.length
        );
    };

    const previousImage = () => {
        if (!selectedActivity?.images?.length) return;
        setSelectedImageIndex(
            (prev) =>
                (prev - 1 + selectedActivity.images.length) %
                selectedActivity.images.length
        );
    };

    const goToCardImage = (activityIndex, imageIndex, totalImages) => {
        const normalizedIndex =
            ((imageIndex % totalImages) + totalImages) % totalImages;

        setCurrentIndexes((prev) => ({
            ...prev,
            [activityIndex]: normalizedIndex,
        }));
    };

    return (
        <section id="activities" className="min-h-screen">
            <div
                className={`min-h-screen xl:h-screen min-w-126 flex justify-around items-center px-4 py-16 md:px-8 lg:px-16 xl:px-20 bg-bg`}
            >
                <div ref={sectionRef} className={`reveal-section ${show ? "show" : ""} mx-auto w-full max-w-7xl`}>
                    <div className="mb-8 md:mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 flex justify-center items-center">
                            Activities
                        </h2>
                    </div>

                    <div ref={scrollRef}
                        {...dragHandlers} className="overflow-x-auto overflow-y-hidden pb-4 no-scrollbar pt-10 cursor-grab select-none">
                        <div className="flex flex-nowrap items-stretch gap-4 md:gap-6 snap-x snap-mandatory">
                            {activities.map((activity, index) => {
                                const hasImages = activity.images && activity.images.length > 0;
                                const currentIndex = currentIndexes[index] || 0;
                                const currentImage = hasImages ? activity.images[currentIndex] : null;

                                return (
                                    <article
                                        key={index}
                                        className="h-fit hover:-translate-y-1 flex-none w-[88vw] sm:w-[75vw] md:w-[52vw] lg:w-[40vw] xl:w-[34vw] snap-start rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md shadow-xl hover:bg-white/15 hover:border-secondary transition duration-300 overflow-hidden"
                                    >
                                        {hasImages && (
                                            <div className="p-4 pb-0">
                                                <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                                                    <button
                                                        type="button"
                                                        onClick={() => openModal(activity, currentIndex)}
                                                        className="w-full h-full block"
                                                    >
                                                        <img
                                                            src={currentImage}
                                                            alt={`${activity.title} ${currentIndex + 1}`}
                                                            className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                                        />
                                                    </button>

                                                    {activity.images.length > 1 && (
                                                        <>
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    goToCardImage(
                                                                        index,
                                                                        currentIndex - 1,
                                                                        activity.images.length
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
                                                                        activity.images.length
                                                                    )
                                                                }
                                                                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white hover:bg-black/60 transition"
                                                            >
                                                                ›
                                                            </button>

                                                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                                                                {activity.images.map((_, dotIndex) => (
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
                                                                            ? "bg-secondaryAlt"
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
                                                <p className="text-xs sm:text-sm font-medium text-secondaryAlt mb-1">
                                                    {activity.category}
                                                </p>
                                                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-2">
                                                    {activity.title}
                                                </h3>

                                                <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-blue-100">
                                                    <span>{activity.organizer}</span>
                                                    <span>•</span>
                                                    <span>{activity.date}</span>
                                                </div>
                                            </div>

                                            <p className="text-sm sm:text-base text-blue-50 leading-6 sm:leading-7 mb-5">
                                                {activity.description}
                                            </p>

                                            <div className="flex flex-wrap gap-3 mt-auto">
                                                {hasImages && (
                                                    <button
                                                        type="button"
                                                        onClick={() => openModal(activity, currentIndex)}
                                                        className="cursor-pointer rounded-xl bg-white/15 px-4 py-2 text-sm sm:text-base text-white font-medium hover:bg-white/25 transition border border-white/10"
                                                    >
                                                        View Image
                                                    </button>
                                                )}

                                                {activity.link && (
                                                    <a
                                                        href={activity.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="rounded-xl bg-secondary px-4 py-2 text-sm sm:text-base text-[#1b1b1b] font-medium hover:bg-secondaryAlt transition"
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

            {selectedActivity && selectedActivity.images?.length > 0 && (
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
                                    {selectedActivity.title}
                                </h3>
                                <p className="text-blue-100 text-sm">
                                    {selectedActivity.organizer} • {selectedActivity.date}
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
                                src={selectedActivity.images[selectedImageIndex]}
                                alt={`${selectedActivity.title} ${selectedImageIndex + 1}`}
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

                        {selectedActivity.images.length > 1 && (
                            <div className="flex justify-center gap-2 py-4 bg-[#09152d]">
                                {selectedActivity.images.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setSelectedImageIndex(index)}
                                        className={`h-2.5 w-2.5 rounded-full transition ${index === selectedImageIndex
                                            ? "bg-secondaryAlt"
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

export default Activities;