import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: ' ',
      position: 'Frontend Developer',
      duration: '2025 - Present',
      location: 'Amman, Jo',
      website: '',
      description: [
        'Lead development of responsive web applications using React, TypeScript, and Next.js',
        'Collaborate with cross-functional teams to deliver high-quality user experiences',
        'Mentor junior developers and conduct code reviews to maintain code quality',
        'Implement accessibility best practices and optimize performance for better user experience'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL']
    },
    {
      company: '',
      position: 'Full Stack Developer',
      duration: '2025',
      location: 'Remote',
      website: '',
      description: [
        'Built and maintained full-stack web applications using React and Node.js',
        'Designed and implemented RESTful APIs and database schemas',
        'Worked closely with product team to translate requirements into technical solutions',
        'Deployed applications using AWS services and Docker containers'
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Docker']
    },
    {
      company: '',
      position: 'Frontend Developer',
      duration: '2025',
      location: 'Amman, Jo',
      website: '',
      description: [
        'Developed responsive websites and web applications for various clients',
        'Collaborated with designers to implement pixel-perfect UI components',
        'Optimized websites for performance and search engine optimization',
        'Maintained and updated existing client websites and applications'
      ],
      technologies: ['JavaScript', 'React', 'SCSS', 'WordPress', 'PHP', 'MySQL']
    },
    {
      company: 'Freelance',
      position: 'Web Developer',
      duration: '2025',
      location: 'Remote',
      website: null,
      description: [
        'Provided web development services to small businesses and startups',
        'Created custom websites using modern web technologies',
        'Managed client relationships and project timelines',
        'Delivered projects on time and within budget'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mr-4">
            <span className="text-emerald-400 font-mono text-xl mr-2">.</span>
            Where I've Worked
          </h2>
          <div className="flex-1 h-px bg-slate-600 ml-8"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Company Tabs */}
          <div className="lg:w-1/4">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left whitespace-nowrap lg:whitespace-normal border-l-2 lg:border-l-2 lg:border-b-0 border-b-2 transition-all duration-200 ${
                    activeTab === index
                      ? 'border-emerald-400 text-emerald-400 bg-emerald-400/10'
                      : 'border-slate-600 text-slate-400 hover:text-emerald-400 hover:bg-slate-800/50'
                  }`}
                >
                  <div className="font-medium">{exp.company}</div>
                  <div className="text-sm opacity-75">{exp.duration}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          <div className="lg:w-3/4">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  {experiences[activeTab].position}
                  {experiences[activeTab].website && (
                    <a
                      href={experiences[activeTab].website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center ml-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      @ {experiences[activeTab].company}
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                  {!experiences[activeTab].website && (
                    <span className="text-emerald-400"> @ {experiences[activeTab].company}</span>
                  )}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {experiences[activeTab].duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {experiences[activeTab].location}
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {experiences[activeTab].description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-2 text-xs">▶</span>
                    <span className="text-slate-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <h4 className="text-slate-300 font-medium mb-3">Technologies used:</h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeTab].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-sm border border-emerald-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Link */}
        <div className="text-center mt-16">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded-lg hover:bg-emerald-400/10 transition-all duration-200 text-lg font-medium group"
          >
            View Full Resume
            <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;

