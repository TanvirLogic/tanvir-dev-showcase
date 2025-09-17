import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Github, Linkedin, ExternalLink, MapPin, Calendar, Send } from "lucide-react";
import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-background.jpg";
import profilePhoto from "@/assets/profile-photo-new.jpg";
import ecommerceProject from "@/assets/ecommerce-project.jpg";
import taskManagementProject from "@/assets/task-management-project.jpg";
import socialMediaProject from "@/assets/social-media-project.jpg";

const Portfolio = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-primary">Md Tanvir Ahmed</div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Education', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    if (item === 'Education') {
                      window.location.href = '/education';
                    } else {
                      scrollToSection(item.toLowerCase());
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--hero-gradient-from) / 0.9), hsl(var(--hero-gradient-to) / 0.8)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="section-container relative z-10">
          <div className="text-center text-primary-foreground">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
              Hi, I'm <span className="text-accent-foreground">Md Tanvir Ahmed</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-up [animation-delay:0.2s]">
              Flutter Developer — Building beautiful, scalable, and high-performance mobile apps.
            </p>
            <Button
              onClick={() => scrollToSection('projects')}
              className="btn-hero animate-fade-up [animation-delay:0.4s]"
            >
              View My Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={(el) => (sectionsRef.current[1] = el)}
        className="section-padding bg-section-bg"
      >
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary mb-6">About Me</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Passionate Flutter developer with a strong foundation in computer science, 
                  graduated from <span className="text-primary font-semibold">Uttara University, Department of CSE</span>. 
                  I specialize in creating cross-platform mobile applications that deliver 
                  exceptional user experiences.
                </p>
                <p>
                  My expertise lies in building scalable, maintainable mobile applications 
                  using clean architecture principles. I'm committed to writing efficient 
                  code and staying updated with the latest Flutter technologies and best practices.
                </p>
              </div>
              <Button variant="outline" className="btn-outline">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
            <Card className="hover-lift shadow-portfolio">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={profilePhoto} 
                    alt="Md Tanvir Ahmed - Professional Photo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" ref={(el) => sectionsRef.current[2] = el} className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Education & Learning Hub
          </h2>

          {/* Course Content Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-primary/10">
              <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dart & Flutter</h3>
              <p className="text-gray-600 mb-4">Comprehensive Flutter development tutorials, advanced state management, and modern app architecture patterns.</p>
              <div className="bg-white rounded-lg p-4 min-h-[200px] border-2 border-dashed border-gray-200">
                <p className="text-gray-500 text-sm text-center">Daily content updates coming soon...</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-primary/10">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">PHP Laravel</h3>
              <p className="text-gray-600 mb-4">Full-stack web development with Laravel framework, API development, and modern PHP practices.</p>
              <div className="bg-white rounded-lg p-4 min-h-[200px] border-2 border-dashed border-gray-200">
                <p className="text-gray-500 text-sm text-center">Daily content updates coming soon...</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-primary/10">
              <div className="w-12 h-12 bg-green-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Web Technologies</h3>
              <p className="text-gray-600 mb-4">Modern web development including React, JavaScript, and responsive design principles.</p>
              <div className="bg-white rounded-lg p-4 min-h-[200px] border-2 border-dashed border-gray-200">
                <p className="text-gray-500 text-sm text-center">Daily content updates coming soon...</p>
              </div>
            </div>
          </div>

          {/* Featured Courses */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Courses</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Course 1 */}
              <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-primary/10">
                <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl p-4 mb-6">
                  <h4 className="text-white font-bold text-lg">Basic Programming</h4>
                  <p className="text-blue-100 text-sm">C & C# Fundamentals</p>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                    <span className="ml-2 text-gray-600 font-semibold">4.9</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">"Excellent foundation course! Clear explanations and hands-on practice." - Sarah M.</p>
                </div>

                <div className="border-t pt-4">
                  <div className="text-3xl font-bold text-primary mb-4">৳8,000</div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📞 Contact: 01616401375</p>
                    <p>💳 Bkash: 01616401375</p>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-primary/10">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4 mb-6">
                  <h4 className="text-white font-bold text-lg">Dart Mastery</h4>
                  <p className="text-purple-100 text-sm">Modern Dart Programming</p>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(4)}{'☆'}
                    </div>
                    <span className="ml-2 text-gray-600 font-semibold">4.7</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">"Great for beginners! Tanvir explains concepts very clearly." - Ahmed K.</p>
                </div>

                <div className="border-t pt-4">
                  <div className="text-3xl font-bold text-primary mb-4">৳3,000</div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📞 Contact: 01616401375</p>
                    <p>💳 Bkash: 01616401375</p>
                  </div>
                </div>
              </div>

              {/* Course 3 */}
              <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-primary/10">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-4 mb-6">
                  <h4 className="text-white font-bold text-lg">Flutter Pro</h4>
                  <p className="text-cyan-100 text-sm">Complete App Development</p>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                    <span className="ml-2 text-gray-600 font-semibold">5.0</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">"Best Flutter course! Built 3 apps during the course." - Riya P.</p>
                </div>

                <div className="border-t pt-4">
                  <div className="text-3xl font-bold text-primary mb-4">৳5,000</div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📞 Contact: 01616401375</p>
                    <p>💳 Bkash: 01616401375</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Ready to start your learning journey?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.open('tel:01616401375', '_self')}
                  className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Call Now: 01616401375
                </button>
                <button 
                  onClick={() => window.location.href = '/education'}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
                >
                  View Detailed Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={(el) => (sectionsRef.current[3] = el)}
        className="section-padding"
      >
        <div className="section-container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="hover-lift shadow-portfolio">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary">Flutter Developer</h3>
                        <p className="text-lg text-accent font-semibold">IT Way BD</p>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>Uttara, Dhaka</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Contributed to building cross-platform mobile applications with a focus on 
                      performance and clean architecture. Collaborated with team members to deliver 
                      high-quality Flutter applications, implementing best practices in mobile 
                      development and ensuring optimal user experiences across iOS and Android platforms.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Git', 'Agile'].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={(el) => (sectionsRef.current[4] = el)}
        className="section-padding bg-section-bg"
      >
        <div className="section-container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Flutter App",
                description: "Full-featured e-commerce mobile application with payment integration and real-time updates.",
                tech: ["Flutter", "Firebase", "Payment Gateway", "Push Notifications"],
                image: ecommerceProject
              },
              {
                title: "Task Management App",
                description: "Productivity app with offline support, synchronization, and intuitive user interface.",
                tech: ["Flutter", "SQLite", "Provider", "Local Storage"],
                image: taskManagementProject
              },
              {
                title: "Social Media Platform",
                description: "Social networking app with real-time chat, media sharing, and user authentication.",
                tech: ["Flutter", "Firebase", "Real-time DB", "Cloud Storage"],
                image: socialMediaProject
              }
            ].map((project, index) => (
              <Card key={index} className="hover-lift shadow-portfolio">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - Flutter Mobile App`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={(el) => (sectionsRef.current[5] = el)}
        className="section-padding"
      >
        <div className="section-container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Get In Touch</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Let's Work Together</h3>
              <p className="text-lg text-muted-foreground">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">bmwthriad2023@gmail.com</span>
                </div>
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://github.com/TanvirLogic" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://www.linkedin.com/in/mdtanvirahmed2025/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <Card className="shadow-portfolio">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="Your Name" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Your Email" />
                    </div>
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" rows={5} />
                  </div>
                  <Button className="btn-hero w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm">
              © 2024 Md Tanvir Ahmed. All rights reserved.
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent" asChild>
                <a href="https://github.com/TanvirLogic" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent" asChild>
                <a href="https://www.linkedin.com/in/mdtanvirahmed2025/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;