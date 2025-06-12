
import { Play, ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  // Placeholder project data
  const projects = [
    {
      id: 1,
      title: "Epic RPG Adventure",
      description: "A massive open-world RPG with complex character progression and branching storylines.",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube video ID
      technologies: ["Unity", "C#", "Blender"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Space Combat Simulator",
      description: "High-octane space battles with realistic physics and stunning visual effects.",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube video ID
      technologies: ["Unreal Engine", "C++", "VFX"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Puzzle Platformer",
      description: "Mind-bending puzzles combined with precision platforming mechanics.",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube video ID
      technologies: ["Godot", "GDScript", "Aseprite"],
      liveDemo: "#",
      github: "#"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            My <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest game development projects and creative works
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className="card-glow hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Video Section */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative aspect-video bg-muted rounded-lg overflow-hidden group cursor-pointer
                    transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30
                    hover:border-2 hover:border-primary/50">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.videoId}`}
                      title={project.title}
                      className="w-full h-full transition-all duration-500 group-hover:scale-110"
                      frameBorder="0"
                      allowFullScreen
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 
                      group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <Play size={64} className="text-white animate-pulse-glow transform group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    {/* Animated border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 
                      transition-all duration-500 rounded-lg pointer-events-none"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="text-3xl font-bold mb-4 text-primary transition-all duration-300 hover:glow-text">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30
                            transition-all duration-300 hover:bg-primary/30 hover:scale-110 hover:shadow-lg 
                            hover:shadow-primary/50 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      className="group inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg 
                        font-semibold transition-all duration-300 hover:bg-primary/90 hover:scale-110 
                        hover:shadow-xl hover:shadow-primary/50 active:scale-95 transform-gpu hover:-translate-y-1
                        relative overflow-hidden"
                    >
                      <ExternalLink className="mr-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-125" size={18} />
                      <span className="relative z-10">Live Demo</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    <a
                      href={project.github}
                      className="group inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg 
                        font-semibold transition-all duration-300 hover:bg-primary/10 hover:scale-110 
                        hover:shadow-xl hover:shadow-primary/30 active:scale-95 transform-gpu hover:-translate-y-1
                        relative overflow-hidden"
                    >
                      <Github className="mr-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-125" size={18} />
                      <span className="relative z-10 transition-all duration-300 group-hover:text-primary-foreground">
                        Source Code
                      </span>
                      <div className="absolute inset-0 bg-primary scale-x-0 transition-transform duration-300 
                        group-hover:scale-x-100 origin-left"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
