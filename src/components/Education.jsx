import { useState } from 'react';
import graduation from '../assets/images/graduation.png';
import calendar from '../assets/images/calendar.png';
import grades from '../assets/images/grades.png';
import location from '../assets/images/location.png'
import book from '../assets/images/book.png';
import leftArrow from '../assets/images/left-arrow.png';
import rightArrow from '../assets/images/right-arrow.png';

function Education() {
    const [currentUni, setCurrentUni] = useState(0);

    const universities = [
        {
            img: graduation,
            degree: "Master of Science in Software Engineering (Machine Learning)",
            uni: "University of Limerick",
            years: "2025 – 2026",
            location: "Limerick, Ireland",
            gpa: "GPA: 3.44/4.0",
            desc: "Specializing in Software Design, Architecture, and Machine Learning.",
            disciplines: [
                "Advanced Software Design",
                "Concurrency & Parallelism in Software Development",
                "Machine Learning and Applications",
                "Advanced Software Architectures",
                "Applied Big Data and Visualisation",
                "Data Mining",
                "Human Computer Interaction",
                "Software Quality",
                "Software Development Paradigms",
                "Research Methods & Practice",
            ]
        },
        {
            img: graduation,
            degree: "Bachelor of Technology in Information Technology",
            uni: "Noida Institute of Engineering and Technology",
            years: "2018 – 2022",
            location: "Greater Noida, India",
            gpa: "CGPA: 7.98/10",
            desc: "Graduated with I-DIV WITH DISTINCTION, Specialized in Software Engineering, Web Technologies, Data Analytics, Cloud Computing, and Computer Networks.",
            disciplines: [
                "Cryptography and Network Security",
                "Cloud Computing",
                "DESIGN THINKING",
                "Database Management System",
                "Web Technology",
                "Design and Analysis of Algorithm",
                "Object Oriented System Design",
                "Software Engineering",
                "Data Analytics",
                "Computer Networks",
                "Big Data",
                "Data Structure",
                "Computer Organization and Architecture",
                "Discrete Structures & Theory of Logic",
                "Computer System Security",
                "Sensor & Instrumentation",
                "Theory of Automata and Formal Languages",
                "Web Designing",
                "Python Programming",
                "Physics",
                "Basic Electrical Engineering",
                "Mathematics-I, II and III",
                "Programming for Problem Solving",
                "Professional and Technical English",
            ]
        }
    ];

    const current = universities[currentUni];


    return (
        <section id="education" className='min-h-screen lg:h-screen min-w-126 py-10 bg-bgAlt flex flex-col justify-around items-center'>
            <h1 className='font-bold text-white text-4xl w-full flex justify-center items-center'>Academic Background</h1>
            {/* Carousel Navigation */}
            <div className='flex justify-center gap-6 py-5'>
                <button
                    onClick={() => setCurrentUni((prev) => (prev - 1 + universities.length) % universities.length)}
                    className='w-8 h-8 flex justify-center items-center cursor-pointer bg-white/20 hover:bg-white/40 rounded-xl transition-all'
                >
                    <img width={18} src={leftArrow} alt="" />
                </button>
                <button
                    onClick={() => setCurrentUni((prev) => (prev + 1) % universities.length)}
                    className='w-8 h-8 flex justify-center items-center cursor-pointer bg-white/20 hover:bg-white/40 rounded-xl transition-all'
                >
                    <img width={18} src={rightArrow} alt="" />
                </button>
            </div>
            <div className='flex flex-col w-full h-[90%] justify-center items-center'>
                <div className='border border-white/20 bg-white/12 backdrop-blur-md shadow-xl hover:bg-white/16 transition duration-300 w-[80%] md:w-[60%] h-9/10 p-5 cursor-pointer flex-col flex justify-center items-center rounded-3xl'>
                    <div className='flex flex-col md:flex-row w-full md:h-[35%] '>
                        <div className='flex-1 flex justify-center items-center'>
                            <img src={current.img} alt="Academic" />
                        </div>
                        <div className='flex-5'>
                            <h2 className='text-xl font-semibold text-white'>{current.degree}</h2>
                            <h3 className='text-secondaryAlt text-lg font-semibold pb-2'>{current.uni}</h3>
                            <div className='flex justify-start items-center gap-5 text-white pb-2'>
                                <p className='text-sm flex gap-2 justify-center items-center'>
                                    <img width={24} height={24} src={calendar} alt="Calendar" />
                                    {current.years}
                                </p>
                                <p className='text-sm flex gap-2 justify-center items-center'>
                                    <img width={24} height={24} src={location} alt="Location" />
                                    {current.location}
                                </p>
                                <p className='text-sm flex gap-2 justify-center items-center'>
                                    <img width={24} height={24} src={grades} alt="Grades" />
                                    {current.gpa}
                                </p>
                            </div>
                            <p className='text-white'>{current.desc}</p>
                        </div>
                    </div>
                    <div className='w-full h-[10%] pt-3 pb-2 text-white flex gap-2 justify-start items-center'>
                        <img width={24} src={book} alt="" />
                        <h3 className='font-semibold text-lg'>Main Disciplines</h3>
                    </div>
                    <div className='no-scrollbar h-[40vh] lg:h-[55%] p-5 grid gap-2 md:grid-cols-2 overflow-auto rounded-lg w-full border-1 border-bgAlt'>
                        {current.disciplines.map((discipline, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-3 bg-secondary rounded-lg hover:bg-secondaryAlt transition-colors"
                                style={{ opacity: "1", transform: "none" }}
                            >
                                <div className="w-2 h-2 bg-white rounded-full shrink-0"></div>
                                <p className="text-white text-sm">{discipline}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Education;
