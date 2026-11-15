import portfolioProjectImg from "@/assets/portfolio-project.jpg";
import solarSystemImg from "@/assets/solar-system-simulation.png";

export const personal = {
    name: "Swadha Shubhangi",
    title: "B.Tech CSE Student | Cyber Security Enthusiast | C/C++ Programmer",
    roles: [
        "Software Development Intern",
        "C/C++ Programmer",
        "Problem Solver",
    ],
    intro:
        "I'm a Computer Science and Engineering student at Amity University Rajasthan with an interest in software development, AI integration, and cyber security. I enjoy understanding how technologies work and strengthening my technical skills through practical projects and continuous learning.",
    about:
        "I am a Computer Science and Engineering student who enjoys understanding how technologies work and applying them through practical implementation. My interests include Software Development, AI Integration, and Cyber Security, and I enjoy strengthening my technical foundation through coursework, projects, and continuous learning.\n\nI believe that understanding concepts before applying them leads to deeper learning. Through academic projects and my practical experience, I continue developing my problem-solving skills while exploring modern software development practices.\n\nUnderstanding first, implementing second—that's how I learn best.",
    tagline:
        "I believe strong software is built on strong fundamentals, continuous learning, and practical implementation.",
    location: "Rajasthan, India",
    email: "swadha.shubhangi05@gmail.com",
    github: "https://github.com/swadhashubhangi",
    linkedin: "https://www.linkedin.com/in/swadha-shubhangi/",
    resume: "https://drive.google.com/file/d/1FLDsaUcCFWu65jI3lMRliJyPBKvhpXFW/view?usp=sharing",
};

export const interests = [
    "Software Development",
    "AI-Assisted Development",
    "Cyber Security",
    "Frontend Development",
    "Problem Solving",
];

export const currentFocus = [
    "Building Projects",
    "Exploring AI Integration & Web-Development",
    "Strengthening Core Computer Science Concepts",
];

export const skillGroups = [
    { title: "Programming Languages", items: ["C", "C++", "Python(Fundamentals)", "Java (Fundamentals)"] },
    { title: "Python libraries", items: ["Pandas", "NumPy", "Matplotlib"] },
    { title: "AI & Development", items: ["Google Gemini API", "Knowledge Base Design", "Prompt Engineering", "API Integration"] },
    { title: "Web Development", items: ["HTML", "CSS", "React", "TypeScript", "Vite"] },
    {
        title: "Core CS Concepts",
        items: [
            "Data Structures",
            "Object-Oriented Programming",
            "DBMS",
            "Operating Systems",
            "Computer Graphics",
        ],
    },
    { title: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

export type Project = {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
    category: string;
    image?: string;
};

export const projects: Project[] = [
    {
        title: "Portfolio Website with AI Assistant",
        description:
            "Interactive portfolio website featuring an AI assistant powered by Google Gemini API. Built with React and TypeScript to answer questions about my skills, projects, and experience.",
        tech: ["React", "TypeScript", "Google Gemini API", "Prompt Engineering"],
        category: "Web Dev",
        image: portfolioProjectImg,
    },
    {
        title: "Solar System Simulation",
        description:
            "Interactive solar system simulation built using C++ and graphics.h, featuring planetary motion, zoom controls, asteroid belts, and comet animations.",
        tech: ["C++", "Computer Graphics"],
        github: "https://github.com/swadhashubhangi/solar-system-simulation-cg",
        category: "Graphics",
        image: solarSystemImg,
    },
];

export const projectCategories = ["All", "Graphics", "Web Dev"];

export const education = [
    {
        qualification: "B.Tech CSE",
        institution: "Amity University Rajasthan, Jaipur",
        year: "2028 (expected)",
        score: "CGPA: 7.92",
    },
    {
        qualification: "Class XII",
        institution: "Asian World School, Jaipur",
        year: "2024"
    },
    {
        qualification: "Class X",
        institution: "Asian World School, Jaipur",
        year: "2022"
    },
];

export const experience = [

    {
        role: "Software Development Intern",
        company: "CredgeSol AI",
        duration: "Jun 2026 - Jul 2026",
        description:
            "Developed a professional portfolio website with an AI-integrated feature while gaining practical experience in software development, AI integration, version control, and UI design.",
        skills: ["Software Development", "AI Integration", "Git & GitHub"],
    },
    {
        role: "Participant / Citizen Scientist",
        company: "NASA International Asteroid Search Campaign (IASC)",
        duration: "",
        description:
            "Analyzed astronomical image data as part of NASA's International Asteroid Search Campaign (IASC) to help identify potential asteroid candidates.",
        skills: ["Data Analysis", "Image Analysis"],
    },
    {
        role: "Music & Cultural Participation",
        company: "Amity University Rajasthan",
        duration: "",
        description:
            "Participated in university music performances and cultural events, collaborating with fellow students during campus programs.",
        skills: ["Teamwork", "Communication"],
    },
];
