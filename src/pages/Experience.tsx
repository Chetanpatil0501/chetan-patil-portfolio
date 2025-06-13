
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Associate Game Programmer",
      company: "MAGNIMUS SYSTEMS",
      location: "Banglore, Karnataka",
      duration: "04/2024 - Present",
      description: "Lead development of emersive XR projects for META Quest.",
      achievements: [
        "Successfully launched 2 Meta Quest game on Meta store",
        "Worked on Multiplayer using NetCode, Photon and Fishnet",
        "Managed Game showcased at the Meta office in Hyderabad"
      ]
    },
    {
      id: 2,
      position: "Full-stack Game Programmer",
      company: "OUTSCAL",
      location: "Remote",
      duration: "07/2022 - 03/2023",
      description: "Contributed to evaluating and improving learning content byanalyzing and testing course modules.",
      achievements: [
        "Learned Data structure and algorithms",
        "Collaborated with students and upskilled along with them",
      ]
    },
    {
      id: 3,
      position: "Game Developer Intern",
      company: "JASH ENTERTAINMENT",
      location: "Ahmedabad, Gujarat",
      duration: "11/2022 - 03/2023",
      description: "Started my professional journey in game development, focusing on web game development and UI/UX implementation.",
      achievements: [
        "Developed Real money web games",
        "Speciallized in Rest-Api",
        "Collaborated With small but creative team"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            MY <span className="text-primary">EXPERIENCE</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I have over 2 years of experience in game development,
            working on a diverse range of projects including VR simulations,
            Android games, and cross-platform applications. Passionate about building immersive and engaging experiences.
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
