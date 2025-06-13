
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, User, Mail, FolderOpen, Menu, X, Github, Linkedin, FileText } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/portfolio', label: 'Portfolio', icon: FolderOpen },
    { path: '/experience', label: 'Experience', icon: Briefcase },
    { path: '/about', label: 'About', icon: User },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="hover:scale-105 transition-all duration-300"
            >
              <img
                src="/lovable-uploads/e9723c0c-2cf8-4ab4-81c9-237a8890f99c.png"
                alt="Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const isDisabled = item.path === '/' && location.pathname === '/';

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link flex items-center space-x-2 relative group transition-all duration-300 
                      ${isActive ? 'active' : ''} 
                      ${isDisabled ? 'disabled' : 'hover:scale-110 hover:text-primary active:scale-95'}
                      hover:shadow-lg hover:shadow-primary/20`}
                    onClick={(e) => isDisabled && e.preventDefault()}
                  >
                    <item.icon
                      size={18}
                      className="transition-all duration-300 group-hover:rotate-12 group-active:rotate-6"
                    />
                    <span className="relative">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Social Links and Resume */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Chetanpatil0501"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link p-2 hover:scale-110 active:scale-95 transition-all duration-300 hover:bg-primary/20 rounded-lg"
            >
              <Github size={20} className="transition-transform duration-300 hover:rotate-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/chetan-patil-0453571b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link p-2 hover:scale-110 active:scale-95 transition-all duration-300 hover:bg-primary/20 rounded-lg"
            >
              <Linkedin size={20} className="transition-transform duration-300 hover:rotate-12" />
            </a>

            <a
              href="https://drive.google.com/file/d/1wheJQoefnnBY39Nh5_U4sRIJCQf6ae5_/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold 
                transition-all duration-300 hover:bg-primary/90 hover:scale-110 active:scale-95
                hover:shadow-lg hover:shadow-primary/50"
            >
              <FileText size={18} className="transition-transform duration-300 hover:rotate-12" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="nav-link hover:scale-110 active:scale-95 transition-all duration-300 hover:bg-primary/20"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="transition-transform duration-300 rotate-180" />
              ) : (
                <Menu size={24} className="transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md rounded-lg mt-2 border border-border/50">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const isDisabled = item.path === '/' && location.pathname === '/';

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link flex items-center space-x-2 block transition-all duration-300 
                      ${isActive ? 'active' : ''} 
                      ${isDisabled ? 'disabled' : 'hover:scale-105 hover:translate-x-2 active:scale-95'}
                      hover:bg-primary/10`}
                    onClick={(e) => {
                      if (isDisabled) e.preventDefault();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <item.icon size={18} className="transition-transform duration-300" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              {/* Mobile Social Links */}
              <div className="flex space-x-4 pt-4 border-t border-border/30">
                <a
                  href="https://github.com/Chetanpatil0501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link p-2 hover:scale-110 active:scale-95 transition-all duration-300 hover:bg-primary/20 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/chetan-patil-0453571b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link p-2 hover:scale-110 active:scale-95 transition-all duration-300 hover:bg-primary/20 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://drive.google.com/file/d/1wheJQoefnnBY39Nh5_U4sRIJCQf6ae5_/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold 
                    transition-all duration-300 hover:bg-primary/90 hover:scale-110 active:scale-95"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FileText size={18} />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
