import { create } from 'zustand';
import { toast } from 'react-toastify';

export const useStore = create((set, get) => ({
    portfolioData: {
        name: "Harsh Agarwal",
        title: "Full Stack Developer",
        about: "I'm a passionate developer with a love for creating beautiful and functional web applications. I have experience in the complete software development lifecycle, from concept to deployment. I am always eager to learn new technologies and take on challenging projects.",
        skills: [
            {
                category: "Programming Languages",
                items: ["C", "C++", "Java", "JavaScript"]
            },
            {
                category: "Frontend",
                items: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"]
            },
            {
                category: "Backend",
                items: ["Node.js", "Express.js", "MERN Stack"]
            },
            {
                category: "Database",
                items: ["MongoDB", "MySQL (Basic)"]
            },
            {
                category: "Cloud & APIs",
                items: ["Cloudinary", "RESTful APIs"]
            },
            {
                category: "Technologies & Tools",
                items: ["Git", "GitHub", "VS Code", "Postman"]
            },
            {
                category: "Soft Skills",
                items: ["Problem Solving", "Logical Reasoning", "Team Collaboration"]
            }
        ],
        projects: [
            {
                title: "Vector AI 2.0",
                description:
                    "Vector AI is an advanced conversational AI assistant similar to ChatGPT, built to understand user queries, generate intelligent responses, and assist users through natural language interactions.",
                category: ["full stack"],
                images: [
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768384423/Screenshot_2026-01-13_153915_lp9079.png",
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768384418/Screenshot_2026-01-13_153857_pyi0fp.png",
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768384413/Screenshot_2026-01-13_153844_cn93g7.png"
                ],
                features: [
                    "Single-device login",
                    "Razorpay integration",
                    "OTP-based authentication",
                    "User authentication",
                    "Monthly subscription model",
                    "Chat history management",
                    "Free testing via success@razorpay UPI",
                    "Secure data handling",
                    "Google search enabled",
                    "URL context support"
                ],
                technologies: [
                    "React",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Razorpay",
                    "Tailwind CSS",
                    "Nodemailer",
                    "JWT"
                ],
                liveUrl: "https://vector-ai-1.vercel.app/",
                repoUrl: "https://github.com/HarshAgarwal4/Vector-AI-2.0"
            },

            {
                title: "JARVIS - Voice Based AI Assistant",
                description:
                    "JARVIS is a voice-based AI assistant that allows hands-free PC control using Python-based voice automation.",
                category: ["python"],
                images: [
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768391316/Screenshot_2026-01-14_171333_rzd9de.png",
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768391318/Screenshot_2026-01-14_171713_ws0jio.png",
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768391315/Screenshot_2026-01-14_171530_o7dgpu.png"
                ],
                features: [
                    "AI interaction mode",
                    "Password-protected access",
                    "Cursor movement automation",
                    "Wikipedia integration",
                    "Todo list support",
                    "Folder access via voice",
                    "Screenshot capture",
                    "Auto-close applications",
                    "Test password: 1234",
                    "Voice trigger using 'JARVIS'",
                    "AI mode toggle for smart queries"
                ],
                technologies: [
                    "Python",
                    "PyAutoGUI",
                    "Gemma-27B",
                    "pyttsx3",
                    "SpeechRecognition"
                ],
                liveUrl:
                    "https://drive.google.com/file/d/1LzuWgbefKwQkHeT2DpyvQXzMLmm0tUEN/view?usp=drive_link",
                repoUrl: "https://github.com/HarshAgarwal4/JARVIS-AI"
            },

            {
                title: "Zennibble - E-commerce Platform",
                description:
                    "Zennibble is a modern e-commerce platform providing a fast, secure, and seamless online shopping experience.",
                category: ["full stack"],
                images: [
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768384843/Screenshot_2026-01-14_152812_aigi1e.png",
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768384885/Screenshot_2026-01-14_152930_plmeeo.png",
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768384887/Screenshot_2026-01-14_152847_nwksqm.png",
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768384889/Screenshot_2026-01-14_152829_klkyef.png"
                ],
                features: [
                    "User-friendly UI",
                    "OTP-based authentication",
                    "Two-device login protection",
                    "Order tracking system",
                    "Razorpay payment integration",
                    "Shiprocket shipping integration",
                    "Admin dashboard"
                ],
                technologies: [
                    "MERN Stack",
                    "Tailwind CSS",
                    "Nodemailer",
                    "Razorpay",
                    "JWT"
                ],
                liveUrl: "https://www.zennibble.com/",
                repoUrl: "https://github.com/HarshAgarwal4/Zennibble"
            },

            {
                title: "Flow Chat",
                description:
                    "Flow Chat is a lightweight real-time chat application designed for fast, secure, and smooth communication.",
                category: ["full stack"],
                images: [
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768385299/Screenshot_2026-01-14_153328_wpoeto.png",
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768385299/Screenshot_2026-01-14_153635_v11qxb.png"
                ],
                features: [
                    "Real-time messaging",
                    "Clerk authentication",
                    "Secure chat sessions",
                    "Username-based messaging",
                    "Fast message delivery",
                    "OAuth login support"
                ],
                technologies: [
                    "MERN Stack",
                    "Tailwind CSS",
                    "Socket.IO",
                    "Clerk"
                ],
                liveUrl: "https://flowchat-one.vercel.app/",
                repoUrl: "https://github.com/HarshAgarwal4/Chat-App"
            },

            {
                "title": "Python GUI Notepad",
                "description": "A desktop-based Notepad application built using Python and Tkinter, featuring essential text editor functionalities such as file handling, keyboard shortcuts, undo/redo support, and safe exit handling with unsaved changes detection.",
                "category": ["python", "GUI"],
                "images": [
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768662115/Screenshot_2026-01-17_202917_bbzoba.png",
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768662124/Screenshot_2026-01-17_202901_duh06e.png",
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768662127/Screenshot_2026-01-17_202948_ifudpb.png",
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768662128/Screenshot_2026-01-17_203000_mgosdr.png"
                ],
                "features": [
                    "Create new text files",
                    "Open existing text files",
                    "Save and Save As functionality",
                    "Unsaved changes detection before closing",
                    "Undo and Redo support",
                    "Cut, Copy, and Paste operations",
                    "Scrollable text area",
                    "Native file dialogs",
                    "Graceful error handling"
                ],
                "technologies": [
                    "Python",
                    "Tkinter",
                    "PyInstaller"
                ],
                "liveUrl": "https://drive.google.com/file/d/1fFVSSJGTaK_otiJ2sjkI7MQWamFb92hZ/view?usp=drive_link",
                "repoUrl": "https://github.com/HarshAgarwal4/NotePad-GUI-python"
            },

            {
                title: "URL Shortener",
                description:
                    "A backend-focused URL shortening service with redirection tracking and click analytics.",
                category: ["full stack"],
                images: [
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768385773/Screenshot_2026-01-14_154601_gpr0va.png"
                ],
                features: [
                    "Short URL generation",
                    "Redirection tracking",
                    "Click analytics",
                    "RESTful API architecture"
                ],
                technologies: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "REST API"
                ],
                liveUrl: "https://url-shortener-pjvu.onrender.com",
                repoUrl: "https://github.com/HarshAgarwal4/URL_SHORTENER"
            },

            {
                title: "Blog App",
                description:
                    "A content-driven blog application that supports full CRUD operations with secure authentication.",
                category: ["full stack"],
                images: [
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768385706/Screenshot_2026-01-14_154348_yehane.png",
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768385704/Screenshot_2026-01-14_154433_ffgyyv.png",
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768385705/Screenshot_2026-01-14_154445_n8azti.png"
                ],
                features: [
                    "Blog creation and management",
                    "User authentication",
                    "Profile management",
                    "CRUD operations",
                    "RESTful API design"
                ],
                technologies: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "JWT Authentication"
                ],
                liveUrl: "https://blog-app-aamf.onrender.com",
                repoUrl: "https://github.com/HarshAgarwal4/BLOG-APP"
            },

            {
                title: "Shop Store",
                description:
                    "A simple e-commerce application allowing users to browse products, place orders, and manage purchases through a clean UI.",
                category: ["full stack"],
                images: [
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768389519/Screenshot_2026-01-14_155004_nzcsca.png",
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768389519/Screenshot_2026-01-14_155105_tonmrv.png",
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768389522/Screenshot_2026-01-14_155135_m7b5zr.png",
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768389525/Screenshot_2026-01-14_155148_eiw6kt.png"
                ],
                features: [
                    "User-friendly interface",
                    "OTP-based authentication",
                    "Order tracking",
                    "Admin panel"
                ],
                technologies: [
                    "MERN Stack",
                    "Tailwind CSS",
                    "Nodemailer",
                    "JWT"
                ],
                liveUrl: "https://htc-steel.vercel.app/",
                repoUrl: "https://github.com/HarshAgarwal4/Ecommerce"
            },

            {
                title: "Vector AI 1.0",
                description:
                    "A text-based conversational AI assistant built to explore and understand generative AI concepts.",
                category: ["full stack"],
                images: [
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768389525/Screenshot_2026-01-14_155212_ef8ayf.png",
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768389518/Screenshot_2026-01-14_164616_y8p90p.png"
                ],
                features: [
                    "OTP-based authentication",
                    "User authentication",
                    "Fast AI responses",
                    "Document upload support",
                    "Secure data storage"
                ],
                technologies: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "REST API",
                    "JWT Authentication",
                    "Google Gemini API"
                ],
                liveUrl: "https://vectorai-zocb.onrender.com/",
                repoUrl: "https://github.com/HarshAgarwal4/VectorAI"
            },

            {
                title: "Car Selling Landing Page",
                description:
                    "A responsive car selling landing page showcasing vehicles with a clean and modern UI.",
                category: ["frontend"],
                images: [
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768389518/Screenshot_2026-01-14_164729_zagsrb.png"
                ],
                features: [
                    "Responsive layout",
                    "Modern landing page design",
                    "Clean UI sections",
                    "Mobile-friendly structure"
                ],
                technologies: ["HTML", "CSS", "JavaScript"],
                liveUrl: "https://harshagarwal4.github.io/LandingPage/",
                repoUrl: "https://github.com/HarshAgarwal4/LandingPage"
            },

            {
                title: "Netflix Clone",
                description:
                    "A responsive clone of the Netflix homepage focused on UI accuracy and layout design.",
                category: ["frontend"],
                images: [
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768389532/Screenshot_2026-01-14_164240_s7hlrp.png"
                ],
                features: [
                    "Netflix-style UI",
                    "Responsive design",
                    "Hero banner layout",
                    "Clean content sections"
                ],
                technologies: ["HTML", "CSS", "JavaScript"],
                liveUrl: "https://harshagarwal4.github.io/NetflixClone/",
                repoUrl: "https://github.com/HarshAgarwal4/NetflixClone"
            },

            {
                title: "Weather App",
                description:
                    "A responsive weather application providing real-time weather information by city.",
                category: ["frontend"],
                images: [
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768389517/Screenshot_2026-01-14_164229_yfgfxi.png"
                ],
                features: [
                    "Live weather updates",
                    "Responsive UI",
                    "City-based search",
                    "Clean weather display"
                ],
                technologies: ["HTML", "CSS", "JavaScript"],
                liveUrl: "https://harshagarwal4.github.io/Weather-app/",
                repoUrl: "https://github.com/HarshAgarwal4/Weather-app"
            },

            {
                title: "Calculator",
                description:
                    "A responsive calculator application for basic arithmetic operations.",
                category: ["frontend"],
                images: [
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768389529/Screenshot_2026-01-14_164216_sb6ayj.png"
                ],
                features: [
                    "Basic arithmetic operations",
                    "Responsive design",
                    "Clean button layout",
                    "Keyboard-friendly UI"
                ],
                technologies: ["HTML", "CSS", "JavaScript"],
                liveUrl: "https://harshagarwal4.github.io/Calculator/",
                repoUrl: "https://github.com/HarshAgarwal4/Calculator"
            },

            {
                title: "Tic Tac Toe Game",
                description:
                    "A responsive Tic Tac Toe game featuring interactive two-player gameplay.",
                category: ["frontend"],
                images: [
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768389530/Screenshot_2026-01-14_164207_jlq1ks.png"
                ],
                features: [
                    "Two-player gameplay",
                    "Responsive grid layout",
                    "Win detection logic",
                    "Interactive UI"
                ],
                technologies: ["HTML", "CSS", "JavaScript"],
                liveUrl: "https://harshagarwal4.github.io/Tic-Tac-Toe/",
                repoUrl: "https://github.com/HarshAgarwal4/Tic-Tac-Toe"
            },

            {
                title: "Currency Converter",
                description:
                    "A responsive currency converter supporting real-time conversion across 31 countries.",
                category: ["frontend"],
                images: [
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768389527/Screenshot_2026-01-14_164158_ppunlt.png"
                ],
                features: [
                    "Multi-country currency support",
                    "Real-time conversion logic",
                    "Responsive UI",
                    "User-friendly inputs"
                ],
                technologies: ["HTML", "CSS", "JavaScript"],
                liveUrl: "https://harshagarwal4.github.io/Currency-Converter/",
                repoUrl: "https://github.com/HarshAgarwal4/Currency-Converter"
            },

            {
                title: "Clock & Stopwatch",
                description:
                    "A responsive utility app featuring an analog clock, digital clock, and stopwatch.",
                category: ["frontend"],
                images: [
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768389518/Screenshot_2026-01-14_164325_gb0qbq.png"
                ],
                features: [
                    "Analog clock",
                    "Digital clock",
                    "Stopwatch functionality",
                    "Responsive layout"
                ],
                technologies: ["HTML", "CSS", "JavaScript"],
                liveUrl: "https://harshagarwal4.github.io/Clock/",
                repoUrl: "https://github.com/HarshAgarwal4/Clock"
            },

            {
                title: "Todo List App",
                description:
                    "A responsive todo list application for efficient daily task management.",
                category: ["frontend"],
                images: [
                    "https://res.cloudinary.com/dxarn4ttv/image/upload/v1768389517/Screenshot_2026-01-14_164410_fqxzat.png"
                ],
                features: [
                    "Add and delete tasks",
                    "Interactive task handling",
                    "Responsive UI",
                    "Clean design"
                ],
                technologies: ["HTML", "CSS", "JavaScript"],
                liveUrl: "https://harshagarwal4.github.io/Todo_List/",
                repoUrl: "https://github.com/HarshAgarwal4/Todo_List"
            }
        ],
        contact: {
            email: "agarwalh485@gmail.com",
            linkedin: "https://www.linkedin.com/in/harsh-agarwal-b19854276/",
            github: "https://github.com/HarshAgarwal4/",
            instagram: 'https://www.instagram.com/techgyaan_24'
        },
    }
}))