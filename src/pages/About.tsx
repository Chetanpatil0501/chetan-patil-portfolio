
import { Code, Gamepad2, Coffee, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    "Unity 3D", "Unreal Engine", "Construct 3", "C#", "C++", "HTML5", "Java Script",
    "Game Design", "Photoshop", "Illustrator", "Blender",
    "Version Control"
  ];

  const interests = [
    { icon: Gamepad2, label: "Gaming", description: "Exploring new game mechanics and experiences" },
    { icon: Code, label: "Programming", description: "Experimenting with new technologies and frameworks" },
    { icon: Coffee, label: "Coffee", description: "Fueling creativity one cup at a time" },
    { icon: Heart, label: "Community", description: "Contributing to open-source projects and mentoring" }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            ABOUT <span className="text-primary">ME</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate game developer with a love for creating immersive experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Section */}
          <div className="card-glow text-center lg:text-left">
            {/* Profile Photo Placeholder */}
            <div className="w-48 h-48 mx-auto lg:mx-0 mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center glow-effect overflow-hidden">
              <img
                src="lovable-uploads\About Profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-4">Chetan Patil</h2>
            <p className="text-primary font-semibold text-lg mb-4">Game Programmer & Designer</p>

            <p className="text-muted-foreground leading-relaxed">
              With over 3 years of experience in game development, I specialize in creating
              engaging gameplay experiences that captivate players. My journey began with
              simple 2D platformers and has evolved to include complex 3D worlds with
              intricate systems and mechanics.
            </p>
          </div>

          {/* Story Section */}
          <div className="space-y-6">
            <div className="card-glow">
              <h3 className="text-2xl font-bold mb-4 text-secondary">My Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My passion for game development started when I was 12 years old,
                modding my favorite games and wondering how they worked. This curiosity
                led me to pursue Game development degree and eventually specialize in game programming.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, I combine technical expertise with creative vision to build
                games that not only function flawlessly but also tell compelling stories
                and provide memorable experiences for players around the world.
              </p>
            </div>

            <div className="card-glow">
              <h3 className="text-2xl font-bold mb-4 text-accent">Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe that great games are born from the perfect balance of
                innovation and accessibility. Every line of code should serve the
                player's experience, and every design decision should enhance the
                emotional connection between the player and the game world.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 glow-text">Technical Skills</h3>
          <div className="card-glow">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-muted/50 px-4 py-3 rounded-lg text-center transition-all duration-300 hover:bg-primary/20 hover:text-primary border border-transparent hover:border-primary/30"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 glow-text">What Drives Me</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {interests.map((interest) => (
              <div key={interest.label} className="card-glow text-center">
                <interest.icon size={48} className="mx-auto mb-4 text-primary" />
                <h4 className="text-xl font-semibold mb-2">{interest.label}</h4>
                <p className="text-muted-foreground">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
