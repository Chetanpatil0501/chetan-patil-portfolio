
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Senior Game Developer",
      company: "Epic Games Studio",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: "Lead development of AAA game titles, implementing core gameplay systems and optimizing performance for multiple platforms.",
      achievements: [
        "Led a team of 8 developers in creating award-winning gameplay mechanics",
        "Optimized game performance resulting in 40% faster load times",
        "Implemented multiplayer networking architecture supporting 100+ concurrent players"
      ]
    },
    {
      id: 2,
      position: "Game Programmer",
      company: "Indie Game Collective",
      location: "Remote",
      duration: "2020 - 2022",
      description: "Developed innovative indie games using various game engines and programming languages.",
      achievements: [
        "Created 5 successful indie game titles with 500K+ downloads",
        "Collaborated with artists and designers to bring creative visions to life",
        "Implemented procedural generation systems for infinite gameplay"
      ]
    },
    {
      id: 3,
      position: "Junior Game Developer",
      company: "GameTech Solutions",
      location: "Austin, TX",
      duration: "2018 - 2020",
      description: "Started my professional journey in game development, focusing on mobile game development and UI/UX implementation.",
      achievements: [
        "Developed mobile games with 1M+ combined downloads",
        "Specialized in touch-based gameplay mechanics",
        "Collaborated on live-service game features and updates"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            My <span className="text-primary">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional game development career
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background animate-pulse-glow"></div>
                
                {/* Experience Card */}
                <div className="ml-20 card-glow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-1">{exp.position}</h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Building className="mr-2" size={16} />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                      <div className="flex items-center mb-1">
                        <Calendar className="mr-2" size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2" size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-secondary">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
