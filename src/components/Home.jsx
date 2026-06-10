import profilePic from '../assets/images/profile-pic.png'
import fileDownload from '../assets/images/file-download.png'
import contactMail from '../assets/images/contact-mail.png'
import pin from '../assets/images/pin.png'

function Home() {
    const name = "Chirag Singh";
    const rotationPattern = [true, false, true, false, true, false, true, false, true, false, true];

    const stats = [
        { value: "3.5+", label: "Years of Experience", color: "#ffa502" },
        { value: "10+", label: "Projects", color: "#ffa502" },
        { value: "English", label: "Technical", color: "#ffa502" }
    ];

    const handleResumeClick = () => {
        // Trigger PDF download
        const link = document.createElement('a');
        link.href = 'src\\assets\\files\\Resume.pdf';
        link.download = 'Resume-Chirag_Singh.pdf';
        link.click();
    };

    return (
        <section id="home" className='text-white bg-bg pt-20 md:pt-0 min-w-126 flex items-center justify-center bg-no-repeat bg-cover'>
            <div className='container flex flex-wrap md:w-[85vw] lg:h-screen'>
                <div className="picture-section pr-3 pl-3 md:pr-0 md:pl-0 flex-1 flex justify-center items-center h-full">
                    <div className="picture flex justify-start items-end w-120 h-120 bg-linear-to-r from-bg via-bgAlt to-primary">
                        <img width={420} src={profilePic} alt="my-picture" />
                    </div>
                </div>
                <div className="about-section text-wrap pt-10 pb-10 md:pt-0 md:pb-10 pr-3 pl-3 md:pr-0 md:pl-0 flex-1 h-full flex flex-col justify-center items-center gap-5">
                    <div className='w-full flex justify-start items-center'>
                        <a className='flex gap-2' target="_blank" href='https://maps.app.goo.gl/zdxqpdw3bkkDWDGy5'>
                            <img width={24} height={24} src={pin} alt="Location pin" />
                            Limerick, Ireland
                        </a>
                    </div>
                    <div className=''>
                        <h1 className='text-4xl font-bold'>
                            Hello, I'm{' '}
                            <span className='text-primary text-5xl'>
                                {name.split('').map((letter, index) => (
                                    letter === ' ' ? '\u00A0' :
                                        <span
                                            key={index}
                                            className={`
              inline-block hover:scale-130 transition-transform duration-300 ease-in-out cursor-pointer
              ${rotationPattern[index] ? 'hover:rotate-6' : 'hover:-rotate-6'}
            `}
                                        >
                                            {letter}
                                        </span>
                                ))}
                            </span>
                        </h1>
                        <h2 className='text-2xl font-semibold text-primaryAlt pb-3'>A Passionate Software Engineer</h2>
                        <p className='text-lg text-justify'>I specialize in building scalable, user-focused digital solutions. Over the past 3.5+ years, I’ve worked on production systems at scale, and I’m currently pursuing an MSc at the University of Limerick while continuing to grow my interest in machine learning and modern software systems.</p>
                        <br />
                        <div className='flex w-full gap-4'>
                            <a href="#contact" className='text-nowrap font-bold bg-primary text-white px-4 py-2 rounded-lg hover:scale-110 hover:bg-primaryAlt transition ease-in-out duration-300 flex justify-center items-center gap-2'>
                                <img width={24} src={contactMail} alt="Contact mail" />
                                Get in Touch
                            </a>
                            <button onClick={handleResumeClick} className='text-nowrap font-bold bg-secondary text-white px-4 py-2 cursor-pointer rounded-lg hover:scale-110 hover:bg-secondaryAlt transition ease-in-out duration-300 flex justify-center items-center gap-2'>
                                <img width={24} src={fileDownload} alt="File download" />
                                Download CV
                            </button>
                        </div>
                    </div>
                    <br />
                    <div className='flex justify-around items-center w-full'>
                        {stats.map((stat, index) => (
                            <div key={index} className='flex-1'>
                                <h3 className='text-3xl font-bold text-secondary text-center pb-2'>{stat.value}</h3>
                                <p className='text-center'>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Home