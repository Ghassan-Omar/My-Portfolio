import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'HTML5', category: 'frontend' },
    { name: 'CSS3', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'JavaScript (ES6+)', category: 'frontend' },        { name: 'Responsive Design', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Express.js', category: 'backend' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'MongoDB', category: 'database' },
    { name: 'Git', category: 'tools' },
    { name: 'GitHub', category: 'tools' },
    { name: 'AI Tools',category: 'tools' },
    { name: 'REST APIs', category: 'backend' },
    { name: 'Figma', category: 'design' },
    { name: 'Miro', category: 'design' }
  ];

  const skillCategories = {
    frontend: { icon: Globe, color: 'text-blue-400' },
    backend: { icon: Server, color: 'text-green-400' },
    database: { icon: Database, color: 'text-purple-400' },
    tools: { icon: Code, color: 'text-orange-400' },
    design: { icon: Palette, color: 'text-pink-400' }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mr-4">
            { <span className="text-emerald-400 font-mono text-xl mr-2">.</span> }
            About Me
          </h2>
          <div className="flex-1 h-px bg-slate-600 ml-8"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* About Text */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-slate-400 text-lg leading-relaxed space-y-4">
              <p>
                Hello! I'm Ghassan, a passionate full-stack developer based in  Swaileh, Amman.
                I enjoy creating things that live on the internet, whether that be websites,
                applications, or anything in between.
              </p>

              <p>
                My interest in web development started back in 2024 when I decided to learn HTML, CSS, and JavaScript,
                Since then, I've been on a journey to master the art of building web applications,
                I love the challenge of turning complex problems into simple, beautiful, and intuitive designs.
              </p>

              <p>
                Fast-forward to today, and I've had the privilege of working {' '}
                <a href="#" className="text-emerald-400 hover:underline">a start-up</a>,{' '}
                <a href="#" className="text-emerald-400 hover:underline">a huge corporation</a>, and{' '}
                {/* <a href="#" className="text-emerald-400 hover:underline">a digital product studio</a>.  */}
                My main focus these days is building accessible, inclusive products and
                digital experiences for a variety of clients.
              </p>

              <p>
                When I'm not at the computer, I'm usually play football, chess, table tennis, reading novels, hanging out with
                my wife, or running around.
                <span className="text-emerald-400">🍃</span>.
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative group">
            <div className="relative z-10 bg-emerald-400/10 rounded-lg p-4 border border-emerald-400/20 group-hover:border-emerald-400/40 transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-lg flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-emerald-400/20 rounded-lg transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-100 mb-8">
            Technologies I work with:
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.entries(skillCategories).map(([category, { icon: Icon, color }]) => (
              <div key={category} className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon className={`w-5 h-5 ${color}`} />
                  <span className="text-slate-300 font-medium capitalize">{category}</span>
                </div>
                <div className="space-y-2">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div
                        key={skill.name}
                        className="text-sm text-slate-400 hover:text-emerald-400 transition-colors cursor-default"
                      >
                        {skill.name}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

