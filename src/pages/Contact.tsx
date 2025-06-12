
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "john.developer@email.com",
      href: "mailto:john.developer@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/johndeveloper"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/johndeveloper"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/johndeveloper"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next gaming project? Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-glow">
            <h2 className="text-3xl font-bold mb-6 text-primary">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="bg-muted/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="bg-muted/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@email.com"
                  className="bg-muted/50 border-border/50 focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Project Collaboration Opportunity"
                  className="bg-muted/50 border-border/50 focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project and how I can help..."
                  rows={6}
                  className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 glow-effect"
              >
                <Send className="mr-2" size={18} />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card-glow">
              <h2 className="text-3xl font-bold mb-6 text-secondary">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 transition-all duration-300 hover:bg-primary/10 hover:border-primary/30 border border-transparent"
                  >
                    <info.icon size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="card-glow">
              <h2 className="text-3xl font-bold mb-6 text-accent">Follow Me</h2>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted/30 transition-all duration-300 hover:bg-primary/20 hover:text-primary border border-transparent hover:border-primary/30"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card-glow">
              <h2 className="text-3xl font-bold mb-6 text-primary">Availability</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="font-semibold">Freelance Projects</span>
                  <span className="text-green-400 font-semibold">Available</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="font-semibold">Full-time Positions</span>
                  <span className="text-yellow-400 font-semibold">Open to Discuss</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="font-semibold">Response Time</span>
                  <span className="text-primary font-semibold">24-48 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
