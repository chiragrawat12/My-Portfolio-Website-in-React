import React from 'react';
import { useState } from 'react';
import NavbarItem from '../Utils/NavbarItem';
import home from '../assets/images/house.png';
import education from '../assets/images/education.png';
import experience from '../assets/images/experience.png';
import project from '../assets/images/project.png';
import skill from '../assets/images/skill.png';
import certificate from '../assets/images/certificate.png';
import achievement from '../assets/images/achievement.png';
import contact from '../assets/images/contact.png';
import { useEffect } from 'react';

const navItems = [
    { name: "Home", image: home, id: "home" },
    { name: "Education", image: education, id: "education" },
    { name: "Projects", image: project, id: "projects" },
    { name: "Experience", image: experience, id: "experience" },
    { name: "Skills", image: skill, id: "skills" },
    { name: "Certification", image: certificate, id: "certifications" },
    { name: "Achievements", image: achievement, id: "achievements" },
    { name: "Contact", image: contact, id: "contact" }
];

function Navbar() {
    const [activeItem, setActiveItem] = useState("Home");

    const scrollToSection = (itemName, sectionId) => {
        setActiveItem(itemName);

        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    useEffect(() => {
        const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
        let current = '';

        const handleScroll = () => {
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                // Your exact logic: pageYOffset >= sectionTop - sectionHeight/3
                if (scrollY >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute("id");
                }
            });

            // Update active item based on current section
            const activeNavItem = navItems.find(item => item.id === current);
            if (activeNavItem && activeItem !== activeNavItem.name) {
                setActiveItem(activeNavItem.name);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeItem]);

    return (
        <div className='w-5/6 fixed bottom-5 left-1/2 -translate-x-1/2 md:top-1/2 md:left-auto md:bottom-auto md:-right-1 md:-translate-y-1/2 md:w-auto md:h-3/4'>
            <ul className='bg-[#f1f2f6] py-1 px-2 border-1 border-[#ced6e0] rounded-full flex flex-row items-center justify-around gap-1 md:flex-col md:h-full md:px-1 md:py-2'>
                {navItems.map((item) => (
                    <NavbarItem
                        key={item.id}
                        itemName={item.name}
                        image={item.image}
                        isActive={activeItem === item.name}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.name, item.id);
                        }}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Navbar;