import React, { useState } from "react";
import { ExternalLink, Github, Eye, Filter } from "lucide-react";
import flavorTable from "../assets/flavor-table.png";
import taskManeger from "../assets/TaskManeger.png";
import JobTracker from "../assets/JobTracker.png";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, payment processing, and admin dashboard. Features include product catalog, shopping cart, order management, and real-time inventory tracking.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Express", "Stripe"],
      category: "fullstack",
      github: "https://github.com/Ghassan-Omar",
      live: "https://ghassan-omar.github.io/Coming-Soon/",
      featured: true,
    },
    {
      title: "Job-Tracker",
      description:
        "A modern, responsive React application for tracking job applications with Firebase backend integration. Built with Material UI for a professional and polished user experience.",
      image: JobTracker,
      technologies: [
        "React",
        "Firebase (Authentication, Firestore)",
        "Vite",
        "Node.js",
        "Material UI",
      ],
      category: "fullstack",
      github: "https://github.com/Ghassan-Omar/Job-Tracker",
      live: "https://job-tracker-amber-psi.vercel.app/",
      featured: true,
    },
    {
      title: "Flavors-Table",
      description:
        "A modern, full-stack recipe discovery application that allows users to search for recipes based on ingredients using the Spoonacular API, with user authentication and personal recipe management capabilities.",
      image: flavorTable,
      technologies: [
        "HTML5",
        "CSS3",
        "Vanilla JavaScript",
        "Node.js",
        "Express",
        "PostgreSQL",
      ],
      category: "fullstack",
      github: "https://github.com/Ghassan-Omar/Flavors-Table",
      live: "http://localhost:3001/",
      featured: true,
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with multiple rooms, user authentication, and message history. Built with Socket.io for real-time communication.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      category: "fullstack",
      github: "https://github.com/Ghassan-Omar/chat-app",
      live: "https://ghassan-omar.github.io/Coming-Soon/",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern React patterns and state management.",
      image: taskManeger,
      technologies: [
        "React",
        "JavaScript",
        "Redux",
        "Socket.io",
        "Node.js",
        "PostgreSQL",
      ],
      category: "frontend",
      github: "https://github.com/Ghassan-Omar/task-manager",
      live: "https://ghassan-omar.github.io/Coming-Soon/",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities. Features include geolocation, search functionality, and data visualization.",
      image: "",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com/Ghassan-Omar/weather-dashboard",
      live: "https://ghassan-omar.github.io/Coming-Soon/",
      featured: false,
    },
    {
      title: "InstaBoard",
      description:
        "A full-stack e-commerce platform with user authentication, payment processing, and admin dashboard. Features include product catalog, shopping cart, order management, and real-time inventory tracking.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "css3", "Node.js", "Express"],
      category: "fullstack",
      github: "https://github.com/Ghassan-Omar/InstaBoard",
      live: "http://localhost:5174/",
      featured: false,
    },
    {
      title: "REST API Server",
      description:
        "A robust REST API server with authentication, rate limiting, and comprehensive documentation. Includes user management, data validation, and automated testing.",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Jest"],
      category: "backend",
      github: "https://github.com/Ghassan-Omar",
      live: null,
      featured: false,
    },
    {
      title: "Task Manager",
      description:
        "A simple task manager website where users can display their tasks, prioritize them, and check the status for each one.",
      image: "TaskManeger.png",
      technologies: ["HTML5", "JavaScrip", "CSS3"],
      category: "frontend",
      github: "https://github.com/Ghassan-Omar/My-Tasks",
      live: "https://ghassan-omar.github.io/My-Tasks/",
      featured: false,
    },
    {
      title: "بصائر النحو في اللغة العربية",
      description:
        "A responsive portfolio website built with React and modern web technologies. Features smooth animations, dark theme, and optimized performance.",
      image: "basayir-Alnahw.png",
      technologies: [
        "HTML5",
        "CSS3 ( Flexbox & Grid)",
        "JavaScript (ES6+)",
        "PWA (Progressive Web App)",
        "Service Worker (working without internet) ",
        "Web App Manifest",
      ],
      category: "frontend",
      github: "https://github.com/Ghassan-Omar/basayir-Alnahw",
      live: "https://ghassan-omar.github.io/basayir-Alnahw/",
      featured: false,
    },
    {
      title: "Crazy Meal",
      description:
        'A web application for a chicken restaurant called "Crazy Meal" that allows users to add and track customer orders by entering meal details, The application features a user-friendly interface for managing orders, including adding new meals, viewing existing orders, and tracking order status.',
      image: "/api/placeholder/600/400",
      technologies: [
        "HTML",
        "CSS3 (Flexbox and Card layouts)",
        "JavaScript (Constructor functions, DOM manipulation, localStorage)",
        "Responsive Design",
        "Custom color palette from coolors.co",
        "Google Fonts",
      ],
      category: "frontend",
      github: "https://github.com/Ghassan-Omar",
      live: "https://ghassan-omar.github.io/crazy-meal/",
      featured: false,
    },
    {
      title: "Magical-Characters",
      description:
        "A web application that fetches and displays information about characters from the Harry Potter universe. This project demonstrates fetching data from an API, dynamically rendering content, and styling a website using CSS.",
      image: "/api/placeholder/600/400",
      technologies: [
        "HTML5",
        "CSS3 (Flexbox for responsive layout)",
        "JavaScript (ES6+)",
        "Harry Potter API for character data",
        " Google Fonts",
      ],
      category: "frontend",
      github: "https://github.com/Ghassan-Omar/magical-characters",
      live: "https://ghassan-omar.github.io/magical-characters/",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mr-4">
            <span className="text-ld-cyan-300 font-mono text-xl mr-2">.</span>
            Some Things I've Built
          </h2>
          <div className="flex-1 h-px bg-slate-600 ml-8"></div>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-100 mb-8">
            Featured Projects
          </h3>
          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-12 gap-8 items-center ${
                  index % 2 === 1 ? "lg:text-right" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative group">
                    <div className="bg-cyan-300/10 rounded-lg overflow-hidden border border-cyan-300/20 group-hover:border-cyan-300/40 transition-all duration-300">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover aspect-video"
                      />
                    </div>
                    <div className="absolute inset-0 bg-cyan-300/20 rounded-lg transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <p className="text-cyan-300 font-mono text-sm">
                      Featured Project
                    </p>
                    <h4 className="text-2xl font-bold text-slate-100">
                      {project.title}
                    </h4>
                    <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700/50">
                      <p className="text-slate-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 1 ? "lg:justify-end" : ""
                      }`}
                    >
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-slate-400 font-mono text-sm hover:text-cyan-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div
                      className={`flex items-center space-x-4 ${
                        index % 2 === 1 ? "lg:justify-end" : ""
                      }`}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan-300 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-cyan-300 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-slate-100 mb-8">
            Other Projects
          </h3>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  filter === category.id
                    ? "bg-cyan-300/20 text-cyan-300 border border-cyan-300/40"
                    : "bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:text-ld-cyan-300 hover:border-cyan-300/40"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects
              .filter((project) => !project.featured)
              .map((project) => (
                <div
                  key={project.title}
                  className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-cyan-300/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-cyan-300 text-2xl">📁</div>
                    <div className="flex items-center space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan-300 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-cyan-300 transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-slate-400 font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-slate-500 font-mono text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
