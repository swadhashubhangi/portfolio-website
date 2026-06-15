export const personal = {
    name: "Swadha Shubhangi",
    title: "B.Tech CSE Student | Cyber Security Enthusiast | C/C++ Programmer",
    roles: [
        "C/C++ Programmer",
        "Software Developer",
        "Problem Solver",
    ],
    intro:
        "Computer Science and Engineering undergraduate with foundational knowledge of programming and core CS concepts, passionate about cyber security, software development, and learning through hands-on projects.",
    about:
        "I am a Computer Science and Engineering undergraduate driven by curiosity, continuous learning, and practical problem-solving. I enjoy exploring software development and emerging technologies while building projects that strengthen my technical skills and real-world understanding. My goal is to grow as an engineer by learning consistently, collaborating effectively, and turning ideas into meaningful solutions.",
    tagline:
        "I believe in continuous learning and gaining hands-on experience through practical work.",
    location: "Jaipur, Rajasthan, India",
    email: "swadha.shubhangi05@gmail.com",
    phone: "+91 7023872071",
    github: "https://github.com/swadhashubhangi",
    linkedin: "https://www.linkedin.com/in/swadha-shubhangi/",
    resume: "https://drive.google.com/file/d/1FLDsaUcCFWu65jI3lMRliJyPBKvhpXFW/view?usp=sharing",
};

export const interests = [
    "Cyber Security",
    "Software Development",
    "AI-Assisted Development",
    "Programming",
    "Problem Solving",
];

export const currentFocus = [
    "Strengthening programming skills through real-world projects",
    "Gaining hands-on experience in software development",
    "Continuously learning through practical applications",
];

export const skillGroups = [
    { title: "Programming Languages", items: ["C", "C++", "Python (Basics)"] },
    { title: "Python Libraries", items: ["Pandas", "NumPy", "Matplotlib"] },
    { title: "Database", items: ["SQL (basic querying & data retrieval)"] },
    { title: "Web Development", items: ["HTML", "CSS"] },
    {
        title: "Core CS Concepts",
        items: [
            "Data Structures",
            "Object-Oriented Programming",
            "DBMS",
            "Operating Systems",
            "Computer Networks",
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
};

export const projects: Project[] = [
    {
        title: "Solar System Simulation",
        description:
            "Built a basic solar system simulation using C/C++, implementing circular motion of planets using sine and cosine functions. Added features like zoom, movement controls, asteroid belt, and comet animation.",
        tech: ["C", "C++", "Computer Graphics"],
        github: "https://github.com/swadhashubhangi/solar-system-simulation-cg",
        category: "Graphics",
    },
];

export const projectCategories = ["All", "C/C++", "Graphics", "Web Dev", "Other"];

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
        year: "2024",
        score: "70.2%",
    },
    {
        qualification: "Class X",
        institution: "Asian World School, Jaipur",
        year: "2022",
        score: "87%",
    },
];

export const experience = [
    {
        role: "Participant / Citizen Scientist",
        company: "NASA International Asteroid Search Campaign (IASC)",
        duration: "",
        description:
            "Analyzed astronomical image data to assist in identifying potential asteroid objects.",
        skills: ["Data Analysis", "Image Analysis"],
    },
    {
        role: "Cultural & Music Activities",
        company: "Amity University Rajasthan",
        duration: "",
        description:
            "Participated in college cultural and music-related activities, contributing to collaborative performances in university cultural events.",
        skills: ["Collaboration", "Performance"],
    },
];
