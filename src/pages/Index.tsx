import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download, ExternalLink, Code, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';


const Index = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Aspiring Full Stack Developer | Java Enthusiast | Creative Coder';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const skills = [
    { name: 'Java', percentage: 90 },
    { name: 'Python', percentage: 70 },
    { name: 'HTML', percentage: 60 },
    { name: 'CSS', percentage: 60 },
    { name: 'JavaScript', percentage: 40 }
  ];

  const projects = [
    {
      title: 'Currency Converter',
      description: 'Real-time global converter with clean UI',
      tech: 'HTML, CSS, JavaScript',
      features: 'API integration, responsive layout'
    },
    {
      title: 'Return Calculator',
      description: 'Computes returns based on principal, rate, and time',
      tech: 'HTML, JavaScript, Chart.js',
      features: 'Result chart, dynamic UI, validation'
    },
    {
      title: 'E-Commerce Website',
      description: 'Online shopping layout with product cards and cart feature',
      tech: 'HTML, CSS, JS',
      features: 'Add to cart animation, price updates, mobile-first UI'
    }
  ];

  const education = [
    {
      degree: 'B.Tech in CSE (Data Science)',
      duration: '2022 – 2026',
      score: 'CGPA: 8.95',
      institution: 'Madanapalle Institute of Technology & Science',
      highlight: 'Worked on projects and solved 100+ coding problems'
    },
    {
      degree: 'Intermediate (MPC)',
      duration: '2020 – 2022',
      score: 'Percentage: 94.8%',
      institution: 'Sri Narayana Junior College, Kurnool',
      highlight: ''
    },
    {
      degree: 'SSC / 10th Grade',
      duration: '2019 – 2020',
      score: 'Percentage: 91.6%',
      institution: "ST. Mary's High School, Kurnool",
      highlight: ''
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-hero text-foreground relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-glow rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-glow rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            >
              GMR
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-primary transition-smooth hover:scale-105"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Gajula
              </span>
              <br />
              <span className="text-foreground">Manikkumar Reddy</span>
            </h1>
            <div className="text-xl md:text-2xl mb-8 h-16">
              <span className="text-primary">{typedText}</span>
              <span className="animate-pulse">|</span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-primary hover:shadow-cyan text-primary-foreground px-8 py-4 text-lg rounded-full shadow-card transition-smooth hover:scale-105"
              >
                Hire Me
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-background rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/f80f02f6-b1b0-4756-9b8e-4d7c08b42555.png"
                  alt="Gajula Manikkumar Reddy"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <Card className="bg-gradient-card backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-smooth">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm Gajula Manikkumar Reddy, a passionate final-year B.Tech student who believes that great software doesn't just function—it connects, engages, and solves. With a strong command over Java, Python, and web technologies, I enjoy bringing life to logic by building real-world applications that blend clarity with creativity. Whether it's simplifying everyday problems or building rich user interfaces, I write clean code, learn consistently, and grow one project at a time.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-32 h-32 mb-4">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="2"
                      />
                      <motion.path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray={`${skill.percentage}, 100`}
                        initial={{ strokeDasharray: "0, 100" }}
                        whileInView={{ strokeDasharray: `${skill.percentage}, 100` }}
                        transition={{ duration: 2, delay: index * 0.2 }}
                        className="drop-shadow-[0_0_6px_rgba(0,255,255,0.5)]"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--cyan-glow))" />
                          <stop offset="100%" stopColor="hsl(var(--purple-glow))" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{skill.percentage}%</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group cursor-pointer"
                >
                  <Card className="bg-gradient-card backdrop-blur-md border border-primary/20 hover:border-primary/60 transition-smooth h-full hover:shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Code className="w-8 h-8 text-primary mr-3" />
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="space-y-2">
                        <p className="text-sm"><span className="text-primary">Tech:</span> {project.tech}</p>
                        <p className="text-sm"><span className="text-primary">Features:</span> {project.features}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
              Coding Profiles
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-gradient-card backdrop-blur-md border border-primary/20 hover:border-primary/60 transition-smooth hover:shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Code className="w-8 h-8 text-orange-glow mr-3" />
                      <h3 className="text-2xl font-bold text-foreground">LeetCode</h3>
                    </div>
                    <div className="space-y-2 mb-6">
                      <p className="text-muted-foreground">120+ problems solved</p>
                      <p className="text-muted-foreground">Language: Java</p>
                      <p className="text-muted-foreground">Topics: Arrays, Strings, Two Pointer, DP</p>
                    </div>
                    <Button
                      onClick={() => window.open('https://leetcode.com/u/X7wVTcQkCu/', '_blank')}
                      variant="secondary"
                      className="w-full group-hover:scale-105 transition-transform duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Profile
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-gradient-card backdrop-blur-md border border-primary/20 hover:border-primary/60 transition-smooth hover:shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Code className="w-8 h-8 text-green-glow mr-3" />
                      <h3 className="text-2xl font-bold text-foreground">GeeksforGeeks</h3>
                    </div>
                    <div className="space-y-2 mb-6">
                      <p className="text-muted-foreground">90+ problems solved</p>
                      <p className="text-muted-foreground">Languages: Python, Java</p>
                      <p className="text-muted-foreground">Topics: Hashing, Recursion, Sorting, Trees</p>
                    </div>
                    <Button
                      onClick={() => window.open('https://www.geeksforgeeks.org/user/mani3257/', '_blank')}
                      variant="secondary"
                      className="w-full group-hover:scale-105 transition-transform duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Profile
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
              Education
            </h2>
            <div className="max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-12 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-primary rounded-full shadow-cyan"></div>
                  {index < education.length - 1 && (
                    <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-primary/50 to-secondary/50"></div>
                  )}
                  <Card className="bg-gradient-card backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-smooth ml-4">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <BookOpen className="w-6 h-6 text-primary mr-3" />
                        <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                      </div>
                      <p className="text-primary font-semibold mb-2">{edu.duration}</p>
                      <p className="text-secondary font-semibold mb-2">{edu.score}</p>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      {edu.highlight && (
                        <p className="text-muted-foreground italic">{edu.highlight}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Resume
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Download my resume to learn more about my experience and skills.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="secondary"
                size="lg"
                className="px-8 py-4 text-lg rounded-full shadow-card transition-smooth"
                onClick={() => {
                  // Placeholder for resume download - user will need to upload the actual file
                  console.log('Resume download clicked');
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
              Contact Me
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-gradient-card backdrop-blur-md border border-primary/20 hover:border-primary/60 transition-smooth hover:shadow-card text-center">
                  <CardContent className="p-6">
                    <Mail className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">reddygaju57@gmail.com</p>
                    <Button
                      onClick={() => window.open('mailto:reddygaju57@gmail.com', '_blank')}
                      className="bg-gradient-primary hover:shadow-cyan text-primary-foreground mt-4 w-full"
                    >
                      Send Email
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-gradient-card backdrop-blur-md border border-primary/20 hover:border-primary/60 transition-smooth hover:shadow-card text-center">
                  <CardContent className="p-6">
                    <Linkedin className="w-12 h-12 text-blue-glow mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-foreground mb-2">LinkedIn</h3>
                    <p className="text-muted-foreground text-sm">manikumar-reddy-gajula</p>
                    <Button
                      onClick={() => window.open('https://linkedin.com/in/manikumar-reddy-gajula-06b3b6273', '_blank')}
                      variant="secondary"
                      className="mt-4 w-full"
                    >
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-gradient-card backdrop-blur-md border border-primary/20 hover:border-primary/60 transition-smooth hover:shadow-card text-center">
                  <CardContent className="p-6">
                    <Github className="w-12 h-12 text-purple-glow mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-foreground mb-2">GitHub</h3>
                    <p className="text-muted-foreground">mani3257</p>
                    <Button
                      onClick={() => window.open('https://github.com/mani3257', '_blank')}
                      variant="secondary"
                      className="mt-4 w-full"
                    >
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Hire Me Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          onClick={() => scrollToSection('contact')}
          className="bg-gradient-primary hover:shadow-cyan text-primary-foreground px-6 py-3 rounded-full shadow-card transition-smooth hover:scale-110"
        >
          Hire Me
        </Button>
      </motion.div>
    </div>
  );
};

export default Index;
