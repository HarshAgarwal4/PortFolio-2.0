import { create } from 'zustand';
import { toast } from 'react-toastify';

export const useStore = create((set, get) => ({
    portfolioData : {
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
                id: 1,
                title: "E-Commerce Platform",
                description:
                    "A full-stack e-commerce web application with authentication, product management, cart functionality, and secure payments.",
                images: [
                    "/images/ecommerce-1.png",
                    "/images/ecommerce-2.png",
                    "/images/ecommerce-3.png"
                ],
                features: [
                    "User authentication & authorization",
                    "Product listing & search",
                    "Shopping cart & checkout",
                    "Stripe payment integration",
                    "Admin dashboard for product management"
                ],
                technologies: [
                    "React",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Stripe API",
                    "Tailwind CSS"
                ],
                liveUrl: "https://your-ecommerce-site.com",
                repoUrl: "https://github.com/yourusername/ecommerce-platform"
            },

            {
                id: 2,
                title: "Task Management App",
                description:
                    "A responsive task management system that helps users organize, track, and prioritize tasks efficiently.",
                images: [
                    "/images/task-1.png",
                    "/images/task-2.png",
                    "/images/task-3.png"
                ],
                features: [
                    "Create, edit & delete tasks",
                    "Drag & drop task organization",
                    "Real-time updates",
                    "User-specific task lists"
                ],
                technologies: [
                    "React",
                    "Redux",
                    "Firebase",
                    "Tailwind CSS"
                ],
                liveUrl: "https://your-task-app.com",
                repoUrl: "https://github.com/yourusername/task-manager"
            },

            {
                id: 3,
                title: "Personal Portfolio Website",
                description:
                    "A modern, responsive personal portfolio website showcasing projects, skills, and experience.",
                images: [
                    "/images/portfolio-1.png",
                    "/images/portfolio-2.png"
                ],
                features: [
                    "Responsive design",
                    "Project modal view",
                    "Smooth scrolling navigation",
                    "Reusable components"
                ],
                technologies: [
                    "React",
                    "Tailwind CSS",
                    "JavaScript"
                ],
                liveUrl: "https://your-portfolio.com",
                repoUrl: "https://github.com/yourusername/portfolio"
            },

            {
                id: 4,
                title: "URL Shortener",
                description:
                    "A backend-focused URL shortening service with analytics and redirection tracking.",
                images: [
                    "/images/url-1.png",
                    "/images/url-2.png"
                ],
                features: [
                    "Short URL generation",
                    "Redirect tracking",
                    "Click analytics",
                    "RESTful API design"
                ],
                technologies: [
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "REST API"
                ],
                liveUrl: "https://your-url-shortener.com",
                repoUrl: "https://github.com/yourusername/url-shortener"
            },
            {
                id: 4,
                title: "URL Shortener",
                description:
                    "A backend-focused URL shortening service with analytics and redirection tracking.",
                images: [
                    "/images/url-1.png",
                    "/images/url-2.png"
                ],
                features: [
                    "Short URL generation",
                    "Redirect tracking",
                    "Click analytics",
                    "RESTful API design"
                ],
                technologies: [
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "REST API"
                ],
                liveUrl: "https://your-url-shortener.com",
                repoUrl: "https://github.com/yourusername/url-shortener"
            },
            {
                id: 4,
                title: "URL Shortener",
                description:
                    "A backend-focused URL shortening service with analytics and redirection tracking.",
                images: [
                    "/images/url-1.png",
                    "/images/url-2.png"
                ],
                features: [
                    "Short URL generation",
                    "Redirect tracking",
                    "Click analytics",
                    "RESTful API design"
                ],
                technologies: [
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "REST API"
                ],
                liveUrl: "https://your-url-shortener.com",
                repoUrl: "https://github.com/yourusername/url-shortener"
            },
            {
                id: 4,
                title: "URL Shortener",
                description:
                    "A backend-focused URL shortening service with analytics and redirection tracking.",
                images: [
                    "/images/url-1.png",
                    "/images/url-2.png"
                ],
                features: [
                    "Short URL generation",
                    "Redirect tracking",
                    "Click analytics",
                    "RESTful API design"
                ],
                technologies: [
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "REST API"
                ],
                liveUrl: "https://your-url-shortener.com",
                repoUrl: "https://github.com/yourusername/url-shortener"
            },
            {
                id: 4,
                title: "URL Shortener",
                description:
                    "A backend-focused URL shortening service with analytics and redirection tracking.",
                images: [
                    "/images/url-1.png",
                    "/images/url-2.png"
                ],
                features: [
                    "Short URL generation",
                    "Redirect tracking",
                    "Click analytics",
                    "RESTful API design"
                ],
                technologies: [
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "REST API"
                ],
                liveUrl: "https://your-url-shortener.com",
                repoUrl: "https://github.com/yourusername/url-shortener"
            },
            {
                id: 4,
                title: "URL Shortener",
                description:
                    "A backend-focused URL shortening service with analytics and redirection tracking.",
                images: [
                    "/images/url-1.png",
                    "/images/url-2.png"
                ],
                features: [
                    "Short URL generation",
                    "Redirect tracking",
                    "Click analytics",
                    "RESTful API design"
                ],
                technologies: [
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "REST API"
                ],
                liveUrl: "https://your-url-shortener.com",
                repoUrl: "https://github.com/yourusername/url-shortener"
            },
            {
                id: 4,
                title: "URL Shortener",
                description:
                    "A backend-focused URL shortening service with analytics and redirection tracking.",
                images: [
                    "/images/url-1.png",
                    "/images/url-2.png"
                ],
                features: [
                    "Short URL generation",
                    "Redirect tracking",
                    "Click analytics",
                    "RESTful API design"
                ],
                technologies: [
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "REST API"
                ],
                liveUrl: "https://your-url-shortener.com",
                repoUrl: "https://github.com/yourusername/url-shortener"
            },

        ],
        contact: {
            email: "agarwalh485@gmail.com",
            linkedin: "https://www.linkedin.com/in/harsh-agarwal-b19854276/",
            github: "https://github.com/HarshAgarwal4/",
            instagram: 'https://www.instagram.com/techgyaan_24'
        },
    }
}))