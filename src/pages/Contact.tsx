import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useRef } from 'react';

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/el/judisa", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        if (window.confirm("✅ Message sent successfully!")) {
          form.reset();
        }
      } else {
        window.alert("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error while submitting:", error);
      window.alert("❌ Something went wrong. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chetanpatil0501@email.com",
      href: "mailto:chetanpatil0501@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-6359544296",
      href: "tel:+916359544296"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Chetanpatil0501"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chetan-patil-0453571b0/"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            GET IN <span className="text-primary">TOUCH</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next gaming project? Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-glow">
            <h2 className="text-3xl font-bold mb-6 text-primary">Send Me a Message</h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Optional FormSubmit hidden fields */}
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_template" value="table" />

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name</label>
                <Input id="name" name="name" type="text" placeholder="John Doe" required />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                <Input id="email" name="email" type="email" placeholder="john.doe@email.com" required />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">Subject</label>
                <Input id="subject" name="subject" type="text" placeholder="Project Collaboration Opportunity" required />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={6} required />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 glow-effect">
                <Send className="mr-2" size={18} /> Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-glow">
              <h2 className="text-3xl font-bold mb-6 text-secondary">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a key={info.label} href={info.href} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 transition-all duration-300 hover:bg-primary/10">
                    <info.icon size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-glow">
              <h2 className="text-3xl font-bold mb-6 text-accent">Follow Me</h2>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted/30 transition-all duration-300 hover:bg-primary/20">
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

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
