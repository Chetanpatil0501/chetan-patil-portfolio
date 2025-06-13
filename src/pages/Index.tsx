
import { ArrowRight, Code, Gamepad2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundCarousel from '../components/BackgroundCarousel';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center min-h-[80vh] flex items-center">
        <BackgroundCarousel />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="animate-float mb-8">
            <Gamepad2 size={80} className="mx-auto text-primary glow-effect" />
          </div>

          <h1 className="text-3xl md:text-8xl font-bold mb-4 glow-text">
            CHETAN  <span className="text-primary"> PATIL</span>
          </h1>

          <h2 className="text-1xl md:text-3xl font-bold mb-6 glow-text">
            Game Developer &
            <span className="text-primary"> Creative Designer</span>
          </h2>

          <p className="text-xl md:text-2xl mb-8 max-w-2.5xl mx-auto">
            Crafting immersive gaming experiences with cutting-edge technology, and innovative design
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="group inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold 
                transition-all duration-300 hover:bg-primary/90 glow-effect hover:animate-pulse-glow
                hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 active:scale-95
                transform-gpu hover:-translate-y-1 active:translate-y-0"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                View My Work
              </span>
              <ArrowRight className="ml-2 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125" size={20} />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center px-8 py-3 border border-primary text-primary rounded-lg font-semibold 
                transition-all duration-300 hover:bg-primary/10 hover:border-primary/80
                hover:scale-110 hover:shadow-xl hover:shadow-primary/30 active:scale-95
                transform-gpu hover:-translate-y-1 active:translate-y-0 relative overflow-hidden"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:text-primary-foreground">
                Get In Touch
              </span>
              <div className="absolute inset-0 bg-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-60 px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glow-text">
            What I Do Best
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-glow text-center hover:scale-105 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/20">
              <Code size={48} className="mx-auto mb-4 text-secondary transition-transform duration-300 hover:scale-110 hover:rotate-12" />
              <h3 className="text-xl font-semibold mb-2">Game Programming</h3>
              <p className="text-muted-foreground">
                Expert in game mechanics, physics systems, and performance optimization
              </p>
            </div>

            <div className="card-glow text-center hover:scale-105 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
              <Gamepad2 size={48} className="mx-auto mb-4 text-accent transition-transform duration-300 hover:scale-110 hover:rotate-12" />
              <h3 className="text-xl font-semibold mb-2">Game Design</h3>
              <p className="text-muted-foreground">
                Creating engaging gameplay experiences and intuitive user interfaces
              </p>
            </div>

            <div className="card-glow text-center hover:scale-105 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
              <Zap size={48} className="mx-auto mb-4 text-primary transition-transform duration-300 hover:scale-110 hover:rotate-12" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Pushing boundaries with emerging technologies and creative solutions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
