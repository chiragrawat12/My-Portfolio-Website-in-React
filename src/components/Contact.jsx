import React from "react";
import whatsapp from "../assets/images/contacts/whatsapp.png"
import gmail from "../assets/images/contacts/gmail.png"
import linkedin from "../assets/images/contacts/linkedin.png"
import github from "../assets/images/contacts/github.png"
import leetcode from "../assets/images/contacts/leetcode.webp"
import hackerrank from "../assets/images/contacts/hackerrank.webp"

function Contact() {
    const contactInfo = {
        email: "chiragrawat12@gmail.com",
        phone: "+353 89 428 4845",
        whatsapp: "https://wa.me/353894284845",
        linkedin: "https://www.linkedin.com/in/chiragrawat12",
        github: "https://github.com/chiragrawat12",
        leetcode: "https://leetcode.com/chiragrawat12",
        hackerrank: "https://www.hackerrank.com/chiragrawat12",
    };

    const directContacts = [
        {
            label: "Email",
            subtext: contactInfo.email,
            href: `mailto:${contactInfo.email}`,
            icon: gmail,
            bg: "bg-blue-600",
        },
        {
            label: "WhatsApp",
            subtext: contactInfo.phone,
            href: contactInfo.whatsapp,
            icon: whatsapp,
            bg: "bg-green-500",
        },
    ];

    const socialLinks = [
        {
            label: "GitHub",
            href: contactInfo.github,
            icon: github,
        },
        {
            label: "LinkedIn",
            href: contactInfo.linkedin,
            icon: linkedin,
        },
        {
            label: "LeetCode",
            href: contactInfo.leetcode,
            icon: leetcode,
        },
        {
            label: "HackerRank",
            href: contactInfo.hackerrank,
            icon: hackerrank,
        },
    ];

    const linkedinPosts = [
        {
            type: "embed",
            embedHtml: `<iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7450541344466386944?collapsed=1" 
                height="627" 
                width="504" 
                frameborder="0" 
                allowfullscreen="" 
                title="Embedded post">
                </iframe>
            `,
        },

        {
            type: "embed",
            embedHtml: `<iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7451564721951944704?collapsed=1" 
                height="542" 
                width="504" 
                frameborder="0" 
                allowfullscreen="" 
                title="Embedded post">
                </iframe>`,
        },
        {
            type: "embed",
            embedHtml: ` <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7404705666663174144?collapsed=1" 
                height="862" 
                width="504" 
                frameborder="0" 
                allowfullscreen="" 
                title="Embedded post">
                </iframe>`,
        },
        {
            type: "embed",
            embedHtml: `<iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7370938091924156416?collapsed=1" 
                height="627" 
                width="504" 
                frameborder="0" 
                allowfullscreen="" 
                title="Embedded post">
                </iframe>`,
        },
        {
            type: "embed",
            embedHtml: `<iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7363997610954698752?collapsed=1" 
                height="627" 
                width="504" 
                frameborder="0" 
                allowfullscreen="" 
                title="Embedded post">
                </iframe>`,
        },
        {
            type: "embed",
            embedHtml: `<iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7305453622727782400?collapsed=1" 
                height="542" 
                width="504" frameborder="0" 
                allowfullscreen="" 
                title="Embedded post">
                </iframe>`,
        },
        {
            type: "embed",
            embedHtml: `<iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7266895177179381761?collapsed=1" 
                height="627" 
                width="504" 
                frameborder="0" 
                allowfullscreen="" 
                title="Embedded post">
                </iframe>`,
        },
        {
            type: "embed",
            embedHtml: `<iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7203479575207501824?collapsed=1" 
                height="537" 
                width="504" 
                frameborder="0" 
                allowfullscreen="" 
                title="Embedded post">
                </iframe>`,
        },
    ];

    return (
        <section
            id="contact"
            className="min-w-126 min-h-screen w-full bg-gradient-to-br from-[#081226] via-[#0d1b34] to-[#12254a] px-4 py-16 md:px-8 lg:px-16 xl:px-20 flex justify-center items-center"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#8b7cf6] mb-4">
                        Contact Me
                    </h2>
                </div>
                <br />
                <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Let&apos;s talk!
                        </h3>
                        <p className="text-slate-300 text-lg leading-8 max-w-xl mb-8">
                            I am always open to discussing new projects and opportunities.
                            Connect with me through direct contact methods or professional platforms.
                        </p>
                        <br />
                        <div className="space-y-5 mb-10 flex flex-col gap-3">
                            {directContacts.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
                                    rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                    className="flex items-center gap-5 rounded-2xl bg-white/5 border border-white/5 px-5 py-5 text-white hover:bg-white/10 transition duration-300"
                                >
                                    <div
                                        className={`flex items-center justify-center rounded-xl shadow-md shrink-0`}
                                    >
                                        <img
                                            src={item.icon}
                                            alt={item.label}
                                            className="h-14 w-14 object-cover"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-2xl font-semibold text-white leading-none mb-2">
                                            {item.label}
                                        </p>
                                        <p className="text-slate-400 text-base break-all">
                                            {item.subtext}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <br />
                        <div className="flex flex-col gap-2">
                            <h4 className="text-2xl font-semibold text-white">
                                Social media
                            </h4>

                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.label}
                                        title={item.label}
                                        className="flex items-center justify-center rounded-xl hover:-translate-y-1 transition duration-300"
                                    >
                                        <img
                                            src={item.icon}
                                            alt={item.label}
                                            className="h-14 w-14 object-cover"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 shadow-xl">
                        <h3 className="text-3xl font-bold text-white mb-5">
                            Ready to connect?
                        </h3>

                        <p className="text-slate-300 text-lg leading-8 mb-8">
                            Connect with me on LinkedIn for professional discussions about projects,
                            roles, and opportunities.
                        </p>
                        <br />
                        <div className="space-y-5 flex flex-col gap-2">
                            <a
                                href={contactInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-4 py-2 text-lg font-semibold text-white hover:bg-blue-500 transition"
                            >
                                <img
                                    src={linkedin}
                                    alt="LinkedIn"
                                    className="h-10 w-10 object-contain"
                                />
                                <span>Connect on LinkedIn</span>
                            </a>

                            <a
                                href={contactInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 rounded-2xl bg-slate-600/70 px-4 py-2 text-lg font-semibold text-white hover:bg-slate-500/70 transition"
                            >
                                <img
                                    src={github}
                                    alt="GitHub"
                                    className="h-10 w-10 object-contain"
                                />
                                <span>View GitHub</span>
                            </a>

                            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
                                <h4 className="text-blue-400 text-xl font-semibold mb-3">
                                    Professional Response
                                </h4>
                                <p className="text-slate-300 leading-7">
                                    I usually respond to professional messages on LinkedIn and email within a reasonable time.
                                    For technical work and coding profiles, you can also explore my GitHub, LeetCode, and HackerRank.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <div className="mb-6 pl-5">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            LinkedIn Highlights
                        </h3>
                    </div>
                    <br />
                    <div className="thin-scrollbar flex justify-center items-center">
                        <div className="columns-1 lg:columns-2">
                            {linkedinPosts.map((item, index) => (
                                <div key={index}
                                    className="flex-none snap-start rounded-xl"
                                    dangerouslySetInnerHTML={{ __html: item.embedHtml }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;