import { Play, ExternalLink, Github, Film, WorkflowIcon } from 'lucide-react';
import { useState } from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "VITAL KNIGHTS - RISE  AGAINST THE TITANS",
      description: "This is a mixed reality game which has story mode. You can go through a story and save the virtual world which is overtaken by demons.",
      role: [
        "I developed quick mode in this game",
        "I implemented spatial adaptive sound for this game",
        "For some boss fights, I added fun to them"
      ],
      videoId: "FRJjopuLBbo",
      thumbnail: "Portfolio thumbnails/VK_012.png",
      technologies: ["Unity", "C#", "FMOD", "Meta Haptics Studio", "Meta SDK", "Playfab"],
      playLink: "https://www.meta.com/en-gb/experiences/vital-knights-rise-against-the-titans/24924749570502763/",
      trailerLink: "https://www.youtube.com/watch?v=FRJjopuLBbo",
      github: "#"
    },
    {
      id: 2,
      title: "JUMP FOR LIFE",
      description: "This is the one time challenge game. You have to complete all the levels in one time. The USP of this game is you have to use your feet to control all the things.",
      role: [
        "I Worked on grid base level generation",
      ],
      videoId: "H8t2MVeNL-c",
      thumbnail: "Portfolio thumbnails/JumpForLife.jpg",
      technologies: ["Unity", "C#", "Meta Haptics Studio", "Meta SDK"],
      playLink: "https://www.meta.com/en-gb/experiences/jump-for-life/8500588593325701/",
      trailerLink: "https://www.youtube.com/watch?v=H8t2MVeNL-c",
      github: "#"
    },
    {
      id: 3,
      title: "JET SMART XR",
      description: "This is the aviation for jet engine where you can interact with parts, you can understand the working also you can assemble or dismantle the parts.",
      role: [
        "Worked on App Testing, And overview."
      ],
      thumbnail: "Portfolio thumbnails/JetEngine.jpg",
      technologies: ["Unity", "C#", "Meta Haptics Studio", "Meta SDK"],
      trailerLink: "https://www.linkedin.com/posts/magnimus-systems_innovation-jetengine-educationaltools-activity-7267445923742400514-3n9W/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEsaHUBf84oQ6_epIGZvxKdWbx0yb_XplY",
      github: "#"
    },
    {
      id: 4,
      title: "LASSER TENNIS",
      description: "This game supports two player arena. Where you have to dodge the lasers and shoot the projectiles by pressing the tile switches towards player who is next to you. Winner will be decided by health or timing.",
      role: [
        "Full game logic developed by me.",
        "Game optimization",
        "Crazy Games Sdk Implementation"
      ],
      videoId: "xWiAPii6yD0",
      thumbnail: "Portfolio thumbnails/Lasser Tennis Poster.png",
      technologies: ["Unity", "C#", "Playfab", "Crazy Sdk", "Crazy Games Ads"],
      trailerLink: "https://www.youtube.com/watch?v=xWiAPii6yD0",
      github: "#"
    },
    {
      id: 5,
      title: "GREYHOUND DOG RACE 3D",
      description: "Greyhound dog race based on real money betting",
      role: [
        "Full game logic developed by me.",
        "Game optimization",
        "UI Integration"
      ],
      videoId: "FxcKg5cWoJU",
      thumbnail: "Portfolio thumbnails/Greyhound Dog Race.webp",
      technologies: ["Unity", "C#", "Rest-APIs"],
      trailerLink: "https://www.youtube.com/watch?v=FxcKg5cWoJU",
      github: "#"
    },
    {
      id: 6,
      title: "BLOWOUT BATTLE",
      description: "This game was created under 48 hours in Global Game Jam. " +
        "This game supports local multiplayer where max two players can play at the same time. " +
        "We implemented it with very user friendly UI and controls.",
      role: [
        "Game Design.",
        "Input System",
        "UI Integration",
        "Arena Match Logic"
      ],
      thumbnail: "Portfolio thumbnails/Blowout Battle.jpg",
      technologies: ["Unity", "C#"],
      playLink: "https://jabberwock-studio.itch.io/blowout-battle",
      github: "#"
    },
    {
      id: 7,
      title: "NO MORE BULLETS",
      description: "Prepare for an adrenaline-fueled FPS stealth experience!" +
        " Take down enemies without getting caught using various tactics: shoot, kick, and even throw weapons." +
        " Craft your strategy to eliminate every threat. Get ready for the ultimate challenge.",
      role: [

        "Full game logic developed by me.",
        "Game optimization",
        "UI Integration",
        "Level design",
        "Light baking",
        "Adaptive spatial sound integration"
      ],
      videoId: "1kLmZT_5yzo",
      thumbnail: "Portfolio thumbnails/No More Bullets_edited.jpg",
      technologies: ["Unity", "C#", "Pro-Builder", "FMOD"],
      trailerLink: "https://https://www.youtube.com/watch?v=1kLmZT_5yzo",
      github: "#"
    },
    {
      id: 8,
      title: "THE LUCKY FORTUNE WHEEL",
      description: "Fortune wheel where you can bet with real money",
      role: [
        "Full game logic developed by me.",
        "Game optimization",
        "UI Integration",
        "Rest APIs integration"
      ],
      videoId: "7HMDQbqc6A8",
      thumbnail: "Portfolio thumbnails/THE LUCKY FORTUNE.webp",
      technologies: ["Unity", "C#", "Rest-APIs"],
      trailerLink: "https://www.youtube.com/watch?v=7HMDQbqc6A8",
      github: "#"
    },
    {
      id: 9,
      title: "PARKOUR PVP",
      description: "Parkour PvP is a multiplayer racing game with some parkour stunts. I made this game under 10 days.",
      role: [
        "Full game logic developed by me.",
        "Game optimization",
        "UI Integration",
        "Multiplayer integration"
      ],
      videoId: "UEtlWI9ARME",
      thumbnail: "Portfolio thumbnails/PARKOUR PVP baner.jpg",
      technologies: ["Unity", "C#", "Photon Pun 2"],
      trailerLink: "https://www.youtube.com/watch?v=UEtlWI9ARME",
      github: "#"
    },
    {
      id: 10,
      title: "HOVER HIKE",
      description: "Hover hike is a hyper casual game with 50 different levels and with immersive experience for the player. ",
      role: [
        "Full game logic developed by me.",
        "Game optimization",
        "UI Integration",
        "Playfab integration for leaderboard",
        "Auto level generation"
      ],
      videoId: "gA5pXZIoLyM",
      thumbnail: "Portfolio thumbnails/Hover Hike.png",
      technologies: ["Unity", "C#", "Playfab"],
      trailerLink: "https://www.youtube.com/watch?v=gA5pXZIoLyM",
      github: "#"
    },
    {
      id: 11,
      title: "Glowing snake 2D",
      description: "I re-created Old school snake game from Nokia. Added some glow and powers which makes this game more intresting.",
      role: [
        "Full game logic developed by me.",
        "Game optimization",
        "UI Integration"
      ],
      videoId: "5xaxchkyZ5Y",
      thumbnail: "Portfolio thumbnails/Glowing Snake.png",
      technologies: ["Unity", "C#"],
      trailerLink: "https://www.youtube.com/watch?v=5xaxchkyZ5Y",
      github: "#"
    },
    {
      id: 12,
      title: "THE EXPLORER 2D",
      description: "It's a 2D platformer created with unity game kit but I didn't use it's source code I write them from the scratch.",
      role: [
        "Full game logic developed by me.",
        "Game optimization",
        "UI Integration",
        "Sound Integration"
      ],
      videoId: "sHIbbTHggdE",
      thumbnail: "Portfolio thumbnails/The Explorer 2d.png",
      technologies: ["Unity", "C#"],
      trailerLink: "https://www.youtube.com/watch?v=sHIbbTHggdE",
      github: "#"
    },
    {
      id: 13,
      title: "RUN BROS 3D",
      description: "This is my submission for a Game Jam of outscal. It's basically a hyper-casual game for the android platform created in under 4 days.",
      role: [
        "Full game logic developed by me.",
        "Game optimization",
        "UI Integration"
      ],
      videoId: "rojvG3c6WMc",
      thumbnail: "Portfolio thumbnails/Run Bros 3D.png",
      technologies: ["Unity", "C#"],
      trailerLink: "https://www.youtube.com/shorts/rojvG3c6WMc",
      github: "#"
    }
  ];

  const handleVideoClick = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            MY <span className="text-primary">PORTFOLIO</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest game development projects and creative works
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className="card-glow hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Video/Image Section */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div
                    className="relative aspect-video bg-muted rounded-lg overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 hover:border-2 hover:border-primary/50"
                    onClick={() => project.videoId && handleVideoClick(project.videoId)}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {project.videoId && hoveredId === project.id ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${project.videoId}?autoplay=0&mute=1&controls=0&showinfo=0&modestbranding=0&rel=1`}
                        title={project.title}
                        className="absolute top-0 left-0 w-full h-full"
                        allowFullScreen
                      />
                    ) : (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    )}

                    {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center pointer-events-none">
                      <Play size={64} className="text-white animate-pulse-glow transform group-hover:scale-125 transition-transform duration-300" />
                    </div> */}
                    {/* <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-all duration-500 rounded-lg pointer-events-none"></div> */}
                  </div>
                </div>

                {/* Project Info */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="text-3xl font-bold mb-4 text-primary transition-all duration-300 hover:glow-text">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-6 flex items-start">
                    <WorkflowIcon className="mr-2 mt-1 text-primary" size={20} />
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">My Role:</h4>
                      {Array.isArray(project.role) ? (
                        <ul className="list-disc pl-5 text-muted-foreground leading-relaxed">
                          {project.role.map((point, idx) => (
                            <li key={idx} className="mb-1">{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground italic leading-relaxed">
                          {project.role}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30 transition-all duration-300 hover:bg-primary/30 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {project.playLink && (
                      <a href={project.playLink} target="_blank" rel="noopener noreferrer"
                        className="group inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:bg-primary/90 hover:scale-110 hover:shadow-xl hover:shadow-primary/50 active:scale-95 transform-gpu hover:-translate-y-1 relative overflow-hidden"
                      >
                        <ExternalLink className="mr-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-125" size={18} />
                        <span className="relative z-10">Play Game</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    )}

                    {project.trailerLink && (
                      <a href={project.trailerLink} target="_blank" rel="noopener noreferrer"
                        className="group inline-flex items-center px-6 py-3 bg-secondary text-white rounded-lg font-semibold transition-all duration-300 hover:bg-secondary/90 hover:scale-110 hover:shadow-xl hover:shadow-secondary/50 active:scale-95 transform-gpu hover:-translate-y-1"
                      >
                        <Film className="mr-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-125" size={18} />
                        Watch Video
                      </a>
                    )}

                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="group inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg font-semibold transition-all duration-300 hover:bg-primary/10 hover:scale-110 hover:shadow-xl hover:shadow-primary/30 active:scale-95 transform-gpu hover:-translate-y-1"
                      >
                        <Github className="mr-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-125" size={18} />
                        Source Code
                      </a>
                    )}
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
