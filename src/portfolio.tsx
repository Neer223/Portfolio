import React, { useState, useEffect, useRef } from 'react';
import { FileText, Pen, Award, Mail, Phone, MapPin, ChevronRight, BookOpen, Users, Linkedin, Github, Twitter, Calendar, Building2, Send, Mic, PartyPopper, Settings, Edit3, Trophy, Target, CheckCircle2, Star, Zap } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [visibleBars, setVisibleBars] = useState([]);
  const [formStatus, setFormStatus] = useState('');
  const proficiencyRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Proficiency bars animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisibleBars(['writing', 'communication', 'management']), 300);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (proficiencyRef.current) {
      observer.observe(proficiencyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contentExperiences = [
    {
      title: "Content Team Member & Lead",
      organization: "Alumni Cell, GGV",
      period: "Jan 2024 - Present",
      location: "Bilaspur",
      icon: Edit3,
      color: "bg-amber-600",
      borderColor: "border-amber-400",
      highlights: [
        "Supervised content team and led content strategy",
        "Wrote event scripts, speeches, and intensive post-event summaries",
        "Led 4 seminars and 2 webinars for the college",
        "Designed creative Instagram and blog captions"
      ],
      tags: ["Leadership", "Event Content", "Social Media", "Copywriting"]
    },
    {
      title: "Event Host/Anchor",
      organization: "Equilibrio - Techfest",
      period: "Mar 2025",
      location: "Bilaspur",
      icon: Mic,
      color: "bg-indigo-600",
      borderColor: "border-indigo-400",
      highlights: [
        "Led the anchoring team for Tech-Fest Events",
        "Drafted event scripts and hosted the inauguration",
        "Crafted personalized speeches and creative content captions"
      ],
      tags: ["Event Hosting", "Script Writing", "Public Speaking"]
    },
    {
      title: "Management Lead",
      organization: "Celeritas Automotives",
      period: "Aug 2025 - Present",
      location: "Bilaspur",
      icon: Settings,
      color: "bg-rose-600",
      borderColor: "border-rose-400",
      highlights: [
        "Led management team of college's Formula Student Team",
        "Managed internal operations and coordination",
        "Dealt with sponsors and business partners"
      ],
      tags: ["Management", "Business Communication", "Coordination"]
    },
    {
      title: "Junior Content Writer",
      organization: "Online Platform",
      period: "Jan 2020 - Dec 2022",
      location: "Virtual",
      icon: Pen,
      color: "bg-emerald-600",
      borderColor: "border-emerald-400",
      highlights: [
        "Written stories and illustrative poems on online platforms",
        "Achieved 3K+ reads across all published works",
        "Widely appreciated for creative choice of words"
      ],
      tags: ["Creative Writing", "Poetry", "Storytelling"]
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Event Hosting Excellence",
      description: "Successfully hosted 10+ events, 6 seminars and 2 webinars",
      detail: "Led anchoring and moderation for technical fests and academic seminars",
      color: "bg-purple-600"
    },
    {
      icon: Users,
      title: "Alumni Meet 2025",
      description: "Managed Alumni Meet 2025 as Management Lead",
      detail: "Oversaw complete event management including logistics and guest coordination",
      color: "bg-blue-600"
    },
    {
      icon: Target,
      title: "Team Coordination",
      description: "Coordinated event teams and volunteers for successful completion",
      detail: "Managed cross-functional teams ensuring seamless event execution",
      color: "bg-green-600"
    },
    {
      icon: Edit3,
      title: "Content Creation",
      description: "Written numerous contents, articles and short stories on online platforms",
      detail: "Published creative works on Wattpad and other writing platforms",
      color: "bg-orange-600"
    },
    {
      icon: Star,
      title: "Reader Engagement",
      description: "3K+ reads across all published works",
      detail: "Built a steady readership through consistent quality content",
      color: "bg-pink-600"
    }
  ];

  const proficiencyData = [
    { category: "Creative Writing", percentage: 95, color: "from-orange-500 to-orange-600" },
    { category: "Content Strategy", percentage: 90, color: "from-orange-500 to-orange-600" },
    { category: "Communication", percentage: 92, color: "from-orange-500 to-orange-600" },
    { category: "Event Management", percentage: 88, color: "from-orange-500 to-orange-600" }
  ];

  const skills = {
    writing: ["Creative Writing", "Content Writing", "Blogging", "Script Writing", "Copywriting"],
    communication: ["English Proficiency (Written & Spoken)", "Effective Communication", "Public Speaking"],
    management: ["Leadership", "Management", "Coordination", "Critical Thinking"]
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '43062d9a-a4bb-44aa-88de-6118433b02c3',
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message')
        })
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        console.error('Form submission error:', result);
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-40 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold" style={{ fontFamily: 'cursive' }}>
              Neeraj Kumar
            </span>
          </div>
          <div className="flex gap-6">
            {['Home', 'About', 'Experience', 'Proficiency', 'Skills', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-sm font-medium transition-all duration-300 hover:text-orange-500 ${activeSection === item.toLowerCase() ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Design with Real Photo */}
      <section id="home" className={`relative pt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex min-h-screen">
          {/* Left Side - Orange with Photo */}
          <div className="w-1/2 bg-gradient-to-br from-orange-500 to-orange-600 flex flex-col justify-center items-center p-12 relative">
            {/* Profile Photo */}
            <div className="relative w-full max-w-md flex items-center justify-center">
              <div className="w-96 h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/neerr.jpeg"
                  alt="Neeraj Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="absolute bottom-12 left-12 flex gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Linkedin className="w-6 h-6 text-orange-500" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Github className="w-6 h-6 text-orange-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Twitter className="w-6 h-6 text-orange-500" />
              </a>
            </div>
          </div>

          {/* Right Side - Dark */}
          <div className="w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col justify-center items-start p-16 text-white">
            <div className="text-sm text-orange-400 mb-4 tracking-wider">Content Writer</div>
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              Neeraj Kumar<br />Dubey
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              A determined writer who loves to let the pen do the talking. Crafting narratives, scripts, and content that resonates with audiences.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setActiveSection('contact')}
                className="px-10 py-4 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-all duration-300 shadow-lg"
              >
                Download CV
              </button>
              <button
                onClick={() => {
                  setActiveSection('contact');
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="px-10 py-4 border-2 border-orange-500 text-orange-500 rounded-full font-medium hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About/Who I Am Section - Full Screen */}
      <section id="about" className="min-h-screen flex items-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-7xl font-bold mb-12 text-orange-500">Who I am</h2>
              <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
                My name's Neeraj. I'm a content writer and storyteller based in Delhi, India.
              </p>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                During the day I work as a Content Team Lead at Alumni Cell and in the evening I work on event hosting and management projects. I spend my leisure hours writing creative content, stories and poetry. Right now I'm also trying a hand at leadership and team coordination. I love to learn and explore new arenas.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Currently pursuing B.Tech in Computer Science at Guru Ghasidas Vishwavidyalaya, I specialize in crafting compelling narratives that connect with audiences.
              </p>
            </div>

            {/* Animated illustration - Writer at work */}
            <div className="flex justify-center items-center">
              <svg className="w-full max-w-lg h-auto" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Desk */}
                <rect x="100" y="450" width="400" height="20" fill="#4B5563" rx="4" />
                <rect x="80" y="470" width="440" height="100" fill="#374151" rx="8" />

                {/* Computer Monitor */}
                <rect x="250" y="300" width="250" height="180" fill="#1F2937" rx="8" />
                <rect x="265" y="315" width="220" height="150" fill="#111827" rx="4" />

                {/* Screen content - animated text lines */}
                <g className="animate-pulse">
                  <rect x="280" y="335" width="120" height="8" fill="#F97316" rx="3" opacity="0.9" />
                  <rect x="280" y="355" width="180" height="8" fill="#F97316" rx="3" opacity="0.7" />
                  <rect x="280" y="375" width="90" height="8" fill="#F97316" rx="3" opacity="0.8" />
                  <rect x="280" y="395" width="160" height="8" fill="#F97316" rx="3" opacity="0.6" />
                  <rect x="280" y="415" width="140" height="8" fill="#F97316" rx="3" opacity="0.9" />
                  <rect x="280" y="435" width="100" height="8" fill="#F97316" rx="3" opacity="0.7" />
                </g>

                {/* Monitor stand */}
                <rect x="355" y="480" width="40" height="40" fill="#1F2937" />
                <rect x="330" y="510" width="90" height="10" fill="#1F2937" rx="5" />

                {/* Person sitting */}
                {/* Head */}
                <circle cx="180" cy="280" r="50" fill="#F97316" />

                {/* Body */}
                <ellipse cx="180" cy="370" rx="70" ry="90" fill="#1F2937" />

                {/* Arms typing */}
                <path d="M110 340 Q80 360, 100 390" stroke="#F97316" strokeWidth="25" strokeLinecap="round" />
                <path d="M250 340 Q280 360, 260 390" stroke="#F97316" strokeWidth="25" strokeLinecap="round" />

                {/* Keyboard */}
                <rect x="150" y="480" width="150" height="50" fill="#4B5563" rx="4" />
                <g>
                  <rect x="160" y="490" width="20" height="15" fill="#6B7280" rx="2" />
                  <rect x="185" y="490" width="20" height="15" fill="#6B7280" rx="2" />
                  <rect x="210" y="490" width="20" height="15" fill="#6B7280" rx="2" />
                  <rect x="235" y="490" width="20" height="15" fill="#6B7280" rx="2" />
                  <rect x="260" y="490" width="20" height="15" fill="#6B7280" rx="2" />
                </g>

                {/* Coffee cup */}
                <ellipse cx="420" cy="485" rx="25" ry="8" fill="#B45309" />
                <rect x="395" y="485" width="50" height="60" fill="#DC2626" rx="4" />
                <ellipse cx="420" cy="485" rx="25" ry="8" fill="#DC2626" />
                <path d="M445 500 Q465 500, 465 520 Q465 535, 445 535" stroke="#DC2626" strokeWidth="5" fill="none" />

                {/* Steam from coffee - animated */}
                <g className="animate-pulse" opacity="0.6">
                  <path d="M410 470 Q410 450, 405 440" stroke="#9CA3AF" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M420 465 Q420 445, 425 435" stroke="#9CA3AF" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M430 470 Q430 450, 435 440" stroke="#9CA3AF" strokeWidth="3" fill="none" strokeLinecap="round" />
                </g>

                {/* Notebook and pen */}
                <rect x="90" y="480" width="80" height="100" fill="#F97316" rx="4" />
                <line x1="100" y1="495" x2="160" y2="495" stroke="#FCD34D" strokeWidth="3" />
                <line x1="100" y1="510" x2="155" y2="510" stroke="#FCD34D" strokeWidth="3" />
                <line x1="100" y1="525" x2="160" y2="525" stroke="#FCD34D" strokeWidth="3" />
                <line x1="100" y1="540" x2="150" y2="540" stroke="#FCD34D" strokeWidth="3" />

                {/* Pen */}
                <g className="animate-bounce" style={{ transformOrigin: '55px 490px', animationDuration: '2s' }}>
                  <rect x="50" y="485" width="10" height="70" fill="#1F2937" rx="4" />
                  <polygon points="55,555 50,565 60,565" fill="#F97316" />
                </g>

                {/* Floating elements - ideas */}
                <g className="animate-pulse" opacity="0.7">
                  <circle cx="120" cy="180" r="8" fill="#F97316" />
                  <circle cx="220" cy="150" r="6" fill="#F97316" />
                  <circle cx="180" cy="120" r="10" fill="#F97316" />

                  {/* Light bulb - idea */}
                  <circle cx="180" cy="100" r="30" fill="#F97316" opacity="0.3" />
                  <circle cx="180" cy="100" r="20" fill="#FCD34D" />
                  <rect x="170" y="115" width="20" height="15" fill="#9CA3AF" rx="2" />
                  <line x1="175" y1="130" x2="185" y2="130" stroke="#9CA3AF" strokeWidth="3" />
                </g>

                {/* Sparkles */}
                <g className="animate-pulse" opacity="0.5">
                  <path d="M480 200 L485 210 L490 200 L485 190 Z" fill="#F97316" />
                  <path d="M520 350 L523 356 L526 350 L523 344 Z" fill="#F97316" />
                  <path d="M70 250 L74 258 L78 250 L74 242 Z" fill="#F97316" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Clean Card Layout */}
      <section id="experience" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-20 text-center">
            <h2 className="text-7xl font-bold text-orange-500 mb-4 uppercase tracking-wider">EXPERIENCE</h2>
          </div>

          {/* Grid of Experience Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contentExperiences.map((exp, idx) => {
              const IconComponent = exp.icon;
              return (
                <div
                  key={idx}
                  className="group bg-gray-800 rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 border border-gray-700 hover:border-orange-500/50 hover:-translate-y-2"
                >
                  {/* Header with icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-2xl ${exp.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-orange-400 font-semibold flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          {exp.organization}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Period and Location */}
                  <div className="flex items-center gap-4 mb-6 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Key Responsibilities</h4>
                    <div className="space-y-2">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 mt-2"></div>
                          <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-full text-xs font-medium border border-gray-600 hover:border-orange-500 hover:bg-gray-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proficiency Section */}
      <section
        id="proficiency"
        ref={proficiencyRef}
        className="min-h-screen flex items-center py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16 text-center">
            <h2 className="text-7xl font-bold text-orange-500 mb-4 uppercase tracking-wider">PROFICIENCY</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Progress Bars */}
            <div className="space-y-10">
              {proficiencyData.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between mb-3">
                    <span className="text-lg font-bold text-white uppercase tracking-wide">{item.category}</span>
                    <span className="text-lg font-bold text-orange-500">{item.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: visibleBars.length > 0 ? `${item.percentage}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Animated Illustration */}
            <div className="flex justify-center items-center">
              <svg className="w-full max-w-lg h-auto" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Person silhouette leaning on laptop */}
                {/* Laptop */}
                <rect x="200" y="220" width="200" height="140" fill="#374151" rx="8" />
                <rect x="150" y="350" width="300" height="20" fill="#4B5563" rx="4" />

                {/* Screen */}
                <rect x="210" y="230" width="180" height="120" fill="#1F2937" rx="4" />
                <rect x="220" y="240" width="160" height="100" fill="#111827" rx="2" />

                {/* Code lines on screen with orange color */}
                <g className="animate-pulse">
                  <rect x="230" y="255" width="80" height="6" fill="#F97316" rx="2" opacity="0.9" />
                  <rect x="230" y="270" width="120" height="6" fill="#F97316" rx="2" opacity="0.7" />
                  <rect x="230" y="285" width="60" height="6" fill="#F97316" rx="2" opacity="0.8" />
                  <rect x="230" y="300" width="140" height="6" fill="#F97316" rx="2" opacity="0.6" />
                  <rect x="230" y="315" width="100" height="6" fill="#F97316" rx="2" opacity="0.9" />
                </g>

                {/* Person leaning */}
                <circle cx="120" cy="180" r="40" fill="#F97316" />
                <ellipse cx="120" cy="240" rx="50" ry="70" fill="#F97316" />

                {/* Arm pointing */}
                <path d="M160 220 L200 240" stroke="#F97316" strokeWidth="20" strokeLinecap="round" />
                <circle cx="200" cy="240" r="12" fill="#F97316" />

                {/* Thought bubbles */}
                <g className="animate-pulse" opacity="0.7">
                  <circle cx="80" cy="120" r="20" fill="#F97316" opacity="0.3" />
                  <circle cx="60" cy="140" r="12" fill="#F97316" opacity="0.3" />
                  <circle cx="45" cy="155" r="8" fill="#F97316" opacity="0.3" />
                </g>

                {/* Floating sparkles */}
                <g className="animate-pulse" opacity="0.6">
                  <circle cx="420" cy="180" r="4" fill="#F97316" />
                  <circle cx="450" cy="220" r="5" fill="#F97316" />
                  <circle cx="380" cy="260" r="4" fill="#F97316" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-16 text-center">
            <h2 className="text-7xl font-bold text-orange-500 mb-4 uppercase tracking-wider">SKILLS & EXPERTISE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-gray-700">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Pen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Writing Skills
              </h3>
              <div className="space-y-2">
                {skills.writing.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-gray-700">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Communication
              </h3>
              <div className="space-y-2">
                {skills.communication.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-gray-700">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Management
              </h3>
              <div className="space-y-2">
                {skills.management.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section - Card Design */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-7xl font-bold text-orange-500 mb-4 uppercase tracking-wider">KEY ACHIEVEMENTS</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={idx}
                  className="group bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 ${achievement.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-2">
                        {achievement.description}
                      </p>
                      <p className="text-gray-500 text-sm italic leading-relaxed">
                        {achievement.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16 text-center">
            <h2 className="text-7xl font-bold text-orange-500 mb-4 uppercase tracking-wider">EDUCATION</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="bg-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-700 hover:shadow-orange-500/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-500 bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Bachelor of Technology - Computer Science
                  </h3>
                  <p className="text-xl text-orange-400">
                    Institute of Technology, Guru Ghasidas University
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium">October 2023 - June 2027</span>
              </div>
            </div>

            <div className="mb-6 flex items-center gap-3">
              <span className="text-gray-400 font-semibold">GPA:</span>
              <span className="px-4 py-2 bg-orange-500 text-white rounded-lg font-bold text-lg">
                8.38
              </span>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                Key Courses
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {['Operating Systems', 'Data Structures', 'Analysis Of Algorithms', 'OOPS in C++', 'Computer Network', 'IoT'].map((course, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-3 bg-gray-700 rounded-lg text-gray-300 text-center border border-gray-600 hover:border-orange-500 transition-colors"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Academic Achievements</h4>
              <div className="space-y-3">
                {[
                  'Managed Content Team at Alumni Cell,as Team Lead – June 2024 to Present',
                  'Got 2nd Position in College Speech Competition – March 2024',
                  'Handled Social Media for TechFest 2023, increasing engagement by 30% – April 2025',
                ].map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-7xl font-bold text-orange-500 mb-4 uppercase tracking-wider">GET IN TOUCH</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-orange-500 bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                    <p className="text-gray-400">nirajdubey2305@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-orange-500 bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                    <p className="text-gray-400">+91 9911584750</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-orange-500 bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Location</h4>
                    <p className="text-gray-400">Delhi, India</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors border border-gray-700">
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors border border-gray-700">
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors border border-gray-700">
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                  <a href="mailto:nirajdubey2305@gmail.com" className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors border border-gray-700">
                    <Mail className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Message Form */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Job Opportunity"
                    className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Message sent successfully!</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
                    Failed to send message. Please try again or email directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full px-8 py-4 bg-orange-500 text-white rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-gray-800 rounded-2xl px-8 py-4 border border-gray-700">
              <p className="text-white text-sm">
                Currently studying at <span className="font-bold text-orange-500">Guru Ghasidas Vishwavidyalaya</span>
              </p>
              <p className="text-gray-400 text-sm mt-1">
                B.Tech Computer Science & Engineering • CGPA: 8.38/10
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400">
            © 2026 Neeraj Kumar Dubey. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            "A determined writer who loves to let the pen do the talking"
          </p>
        </div>
      </footer>
    </div>
  );
}