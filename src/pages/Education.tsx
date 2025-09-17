import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Code, Database, Globe, Star, Users, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Education = () => {
  const courses = [
    {
      id: 'dart-flutter',
      title: 'Dart & Flutter',
      icon: <Code className="h-8 w-8" />,
      color: 'from-blue-500 to-indigo-600',
      price: '৳3,000 - ৳5,000',
      rating: 4.9,
      students: 250,
      duration: '8-12 weeks',
      level: 'Beginner to Advanced'
    },
    {
      id: 'php-laravel',
      title: 'PHP Laravel',
      icon: <Database className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-600',
      price: '৳4,000',
      rating: 4.7,
      students: 180,
      duration: '10 weeks',
      level: 'Intermediate'
    },
    {
      id: 'web-tech',
      title: 'Web Technologies',
      icon: <Globe className="h-8 w-8" />,
      color: 'from-green-500 to-teal-600',
      price: '৳3,500',
      rating: 4.8,
      students: 320,
      duration: '6-8 weeks',
      level: 'Beginner to Intermediate'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Ahmed",
      course: "Flutter Development",
      rating: 5,
      comment: "Excellent course! Tanvir's teaching style is very clear and practical. I built my first app within 4 weeks!"
    },
    {
      name: "Rahul Khan",
      course: "Laravel Backend",
      rating: 5,
      comment: "Best Laravel course in Bangladesh! The project-based approach really helped me understand real-world development."
    },
    {
      name: "Fatima Begum",
      course: "Web Development",
      rating: 4,
      comment: "Great foundation course. Learned HTML, CSS, JavaScript, and React. Now working as a junior developer!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Portfolio</span>
            </Link>
            <h1 className="text-2xl font-bold text-primary">Education Hub</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => window.open('tel:01616401375', '_self')}>
                Call: 01616401375
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-blue-50 py-16">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Master Programming with Tanvir
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Learn from industry experience. Build real projects. Get job-ready skills in Flutter, Laravel, and Modern Web Development.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>750+ Students Trained</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>4.8/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-green-600" />
              <span>Job Placement Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Available Courses</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${course.color} flex items-center justify-center text-white mb-4`}>
                    {course.icon}
                  </div>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(Math.floor(course.rating))}
                    </div>
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-gray-500">({course.students} students)</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Level:</span>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Price:</span>
                      <span className="text-2xl font-bold text-primary">{course.price}</span>
                    </div>
                    <Button className="w-full" onClick={() => window.scrollTo({ top: document.getElementById(course.id)?.offsetTop || 0, behavior: 'smooth' })}>
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Course Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Dart & Flutter Section */}
          <div id="dart-flutter" className="mb-16">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Code className="h-8 w-8" />
                  Dart & Flutter Development
                </CardTitle>
                <p className="text-blue-100">Build Beautiful Cross-Platform Mobile Apps</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Course Overview</h3>
                    <p className="text-gray-600 mb-6">
                      Master Flutter development from basics to advanced. Learn to build production-ready mobile applications 
                      for both iOS and Android using Google's Flutter framework and Dart programming language.
                    </p>
                    
                    <h4 className="text-xl font-bold mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2 text-gray-600 mb-6">
                      <li>• Dart Programming Fundamentals</li>
                      <li>• Flutter Widget System & UI Development</li>
                      <li>• State Management (Provider, Bloc, Riverpod)</li>
                      <li>• Navigation & Routing</li>
                      <li>• API Integration & HTTP Requests</li>
                      <li>• Local Database (SQLite, Hive)</li>
                      <li>• Firebase Integration</li>
                      <li>• App Deployment (Play Store, App Store)</li>
                    </ul>

                    <h4 className="text-xl font-bold mb-3">Course Structure:</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h5 className="font-semibold">Dart Basics (৳3,000)</h5>
                        <p className="text-sm text-gray-600">4 weeks - Variables, Functions, OOP, Async Programming</p>
                      </div>
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h5 className="font-semibold">Flutter Pro (৳5,000)</h5>
                        <p className="text-sm text-gray-600">8 weeks - Complete App Development, Advanced Topics</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-3">Projects You'll Build:</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-900">Todo App</h5>
                        <p className="text-sm text-blue-700">Local storage, CRUD operations</p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-indigo-900">Weather App</h5>
                        <p className="text-sm text-indigo-700">API integration, location services</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-purple-900">E-commerce App</h5>
                        <p className="text-sm text-purple-700">Payment gateway, user authentication</p>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold mb-3">Prerequisites:</h4>
                    <ul className="text-gray-600 mb-6">
                      <li>• Basic programming knowledge (any language)</li>
                      <li>• Computer with internet connection</li>
                      <li>• Willingness to practice daily</li>
                    </ul>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-900 mb-2">Job Opportunities:</h5>
                      <p className="text-sm text-green-700">Flutter developers earn 40k-80k+ in Bangladesh. High demand in startups and corporations.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* PHP Laravel Section */}
          <div id="php-laravel" className="mb-16">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-lg">
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Database className="h-8 w-8" />
                  PHP Laravel Development
                </CardTitle>
                <p className="text-purple-100">Master Backend Web Development</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Course Overview</h3>
                    <p className="text-gray-600 mb-6">
                      Learn professional web development with Laravel, the most popular PHP framework. Build scalable, 
                      secure web applications with modern development practices.
                    </p>
                    
                    <h4 className="text-xl font-bold mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2 text-gray-600 mb-6">
                      <li>• PHP Fundamentals & OOP</li>
                      <li>• Laravel Framework Architecture</li>
                      <li>• MVC Pattern & Routing</li>
                      <li>• Database Design & Migrations</li>
                      <li>• Eloquent ORM & Query Builder</li>
                      <li>• Authentication & Authorization</li>
                      <li>• RESTful API Development</li>
                      <li>• Testing & Deployment</li>
                    </ul>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-purple-900 mb-2">Course Duration:</h5>
                      <p className="text-sm text-purple-700">10 weeks intensive training with hands-on projects</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-3">Projects You'll Build:</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-purple-900">Blog Management System</h5>
                        <p className="text-sm text-purple-700">CRUD operations, user roles</p>
                      </div>
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-pink-900">E-commerce Backend</h5>
                        <p className="text-sm text-pink-700">Product management, orders, payments</p>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-red-900">REST API Service</h5>
                        <p className="text-sm text-red-700">JWT authentication, API versioning</p>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold mb-3">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge variant="outline">Laravel</Badge>
                      <Badge variant="outline">PHP 8+</Badge>
                      <Badge variant="outline">MySQL</Badge>
                      <Badge variant="outline">Composer</Badge>
                      <Badge variant="outline">Git</Badge>
                      <Badge variant="outline">Postman</Badge>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-yellow-900 mb-2">Career Path:</h5>
                      <p className="text-sm text-yellow-700">Backend Developer → Full-stack Developer → Senior Developer (30k-60k salary range)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Web Technologies Section */}
          <div id="web-tech" className="mb-16">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Globe className="h-8 w-8" />
                  Modern Web Technologies
                </CardTitle>
                <p className="text-green-100">Frontend to Full-Stack Development</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Course Overview</h3>
                    <p className="text-gray-600 mb-6">
                      Complete web development course covering frontend, backend, and deployment. Learn modern technologies 
                      used by top companies worldwide.
                    </p>
                    
                    <h4 className="text-xl font-bold mb-3">Curriculum Breakdown:</h4>
                    <div className="space-y-3 mb-6">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h5 className="font-semibold">Frontend Fundamentals</h5>
                        <p className="text-sm text-gray-600">HTML5, CSS3, JavaScript ES6+</p>
                      </div>
                      <div className="border-l-4 border-teal-500 pl-4">
                        <h5 className="font-semibold">Modern Frontend</h5>
                        <p className="text-sm text-gray-600">React.js, TypeScript, Tailwind CSS</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h5 className="font-semibold">Backend Integration</h5>
                        <p className="text-sm text-gray-600">Node.js, Express, MongoDB</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="font-semibold">Deployment & DevOps</h5>
                        <p className="text-sm text-gray-600">Git, Vercel, Netlify, AWS basics</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-3">Real Projects:</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-green-900">Portfolio Website</h5>
                        <p className="text-sm text-green-700">Responsive design, animations</p>
                      </div>
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-teal-900">Task Management App</h5>
                        <p className="text-sm text-teal-700">React, local storage, drag & drop</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-900">Full-Stack Social App</h5>
                        <p className="text-sm text-blue-700">MERN stack, real-time chat</p>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold mb-3">Learning Path:</h4>
                    <ul className="text-gray-600 mb-6">
                      <li>• Week 1-2: HTML, CSS, JavaScript</li>
                      <li>• Week 3-4: React.js & Modern JS</li>
                      <li>• Week 5-6: Backend with Node.js</li>
                      <li>• Week 7-8: Full-stack projects</li>
                    </ul>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-900 mb-2">Industry Demand:</h5>
                      <p className="text-sm text-blue-700">Web developers are in highest demand. Remote work opportunities available globally.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Student Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {'★'.repeat(testimonial.rating)}
                    </div>
                    <span className="font-semibold">{testimonial.rating}.0</span>
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.course}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Programming Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of students who are already building their careers in tech.
          </p>
          
          <div className="bg-white/10 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Enrollment Process</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Call & Discuss</h4>
                  <p className="text-sm opacity-90">Call 01616401375 to discuss your goals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Make Payment</h4>
                  <p className="text-sm opacity-90">Bkash payment to 01616401375</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Start Learning</h4>
                  <p className="text-sm opacity-90">Get access to course materials & WhatsApp group</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open('tel:01616401375', '_self')}
              className="text-lg"
            >
              📞 Call Now: 01616401375
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open('https://wa.me/8801616401375', '_blank')}
            >
              💬 WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Md Tanvir Ahmed - Programming Instructor & Flutter Developer</p>
          <p className="text-sm mt-2">📞 01616401375 | 💳 Bkash: 01616401375</p>
        </div>
      </footer>
    </div>
  );
};

export default Education;