"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Info, Target, Users, Eye, Handshake, History, ChevronRight, CirclePlus, Send } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Static content for the About page
const staticContent = {
  mainTitle: "Empowering Energy Access",
  leftText: "We're a startup revolutionizing energy access with affordable, sustainable solutions powered by digital tools.",
  rightText: "Our mission is to make clean energy simple and accessible for all through innovative technology and partnerships.",
  intro: {
    title: "Build Bout",
    description: "Build Bout is a vibrant community group for builders, creators, and innovators in Kenya. We meet every two weeks to share ideas, network, and collaborate on innovative projects. Our mission is to focus on accountability by building together and openly. Whether you're working on the next big startup, developing a creative project, or simply seeking inspiration, Build Bout is your community for building something meaningful.",
    subtitle: "Join us for our bi-weekly sessions where you can network, learn, and collaborate with like-minded builders and creators."
  }
};

// Upcoming sessions data
const upcomingSessionsData = {
  sessions: [
    {
      id: "session-1",
      title: "Build Bout Session 1",
      eventId: "evt-sW2EKFsyBm8KDAW",
      description: "Join us for an exciting Build Bout session where builders come together to share ideas, network, and collaborate on innovative projects.",
      date: "Nov 8 2025",
      location: "TBA",
      status: "upcoming"
    }
  ]
};

// Previous bouts data
const previousBoutsData = {
  bouts: []
};

// Sponsors data
const sponsorsData = {
  sponsors: [
    {
      id: "sponsor-1",
      name: "PostHog",
      type: "Analytics Platform",
      description: "PostHog provides powerful product analytics and feature flags to help builders make data-driven decisions.",
      logo: "/posthog/posthog-logo-stacked.svg"
    },
    {
      id: "sponsor-2",
      name: "Community Supporters",
      type: "Community",
      description: "Our community members who contribute through various support channels."
    }
  ]
};

// Team data


const sidebarItems = [
  {
    id: "explainer",
    label: "About Build Bout",
    icon: Info,
  },
  {
    id: "mission",
    label: "Our Mission",
    icon: Target,
  },
  {
    id: "vision",
    label: "Our Vision",
    icon: Eye,
  },
  {
    id: "sponsors",
    label: "Sponsors",
    icon: Handshake,
  },
  {
    id: "upcoming",
    label: "Upcoming Bout",
    icon: ChevronRight,
  },
  {
    id: "previous",
    label: "Previous Bout",
    icon: History,
  },
  {
    id: "community",
    label: "Join Us",
    icon: Users,
  },
];

const About = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("explainer");
  const [sessionsData, setSessionsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for tab parameter in URL
    const tabParam = searchParams?.get('tab');
    if (tabParam) {
      const validTabs = ['explainer', 'mission', 'vision', 'sponsors', 'upcoming', 'previous', 'community'];
      if (validTabs.includes(tabParam)) {
        setActiveTab(tabParam);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    // Load Luma checkout script if not already loaded
    if (!document.getElementById('luma-checkout')) {
      const script = document.createElement('script');
      script.id = 'luma-checkout';
      script.src = 'https://embed.lu.ma/checkout-button.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Simulate loading data from an API
    const loadSessionsData = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        setSessionsData(upcomingSessionsData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading sessions data:", error);
        setLoading(false);
      }
    };

    loadSessionsData();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "explainer":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold txtBtn mb-6">
              About Build Bout
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Build Bout is a vibrant community group for builders, creators, and innovators in Kenya. We meet every two weeks to share ideas, network, and collaborate on innovative projects.
            </p>
          </div>
        );
      
      case "mission":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold txtBtn mb-6">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our mission is to focus on accountability by{" "}
              <span className="txtBtn font-bold text-xl md:text-2xl">building together and openly</span>.
            </p>
          </div>
        );
      
      case "vision":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold txtBtn mb-6">
              Our Vision
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our vision is to create a thriving ecosystem where builders in Kenya can{" "}
              <span className="txtBtn font-bold text-xl md:text-2xl">collaborate, learn, and grow together</span>. 
              We envision a future where innovation thrives through transparent collaboration, where every builder 
              has access to a supportive community that holds them accountable to their goals, and where ideas 
              transform into meaningful impact through collective effort.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              By fostering an environment of openness and mutual support, we aim to become the go-to community 
              for builders seeking both inspiration and accountability on their journey to creating something meaningful.
            </p>
          </div>
        );
      
      case "sponsors":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold txtBtn mb-6">
              Our Sponsors
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              We're grateful for the support of our community and sponsors who help make Build Bout possible.
            </p>
            
            {sponsorsData.sponsors && sponsorsData.sponsors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sponsorsData.sponsors.map((sponsor) => (
                  <Card 
                    key={sponsor.id}
                    className="bg-black border border-gray-600 hover:shadow-lg transition-shadow duration-300"
                    style={{ borderColor: '#d95404', borderWidth: '1px', borderStyle: 'solid' }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {sponsor.logo ? (
                          <img 
                            src={sponsor.logo} 
                            alt={`${sponsor.name} logo`}
                            className="h-8 w-auto object-contain"
                          />
                        ) : (
                          <Handshake className="w-6 h-6 txtBtn" />
                        )}
                        <h3 className="text-xl font-bold text-white">{sponsor.name}</h3>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{sponsor.type}</p>
                      <p className="text-gray-300">{sponsor.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-black rounded-lg p-8" style={{ borderColor: '#d95404', borderWidth: '1px', borderStyle: 'solid' }}>
                <Handshake className="w-12 h-12 txtBtn mx-auto mb-4 opacity-50" />
                <p className="text-gray-400">We're actively seeking sponsors to support our community. Interested in partnering with us?</p>
              </div>
            )}
          </div>
        );
      
      case "previous":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold txtBtn mb-6">
              Previous Bout Sessions
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              A look back at our past Build Bout sessions and what we've accomplished together.
            </p>

            {previousBoutsData.bouts && previousBoutsData.bouts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {previousBoutsData.bouts.map((bout) => (
                  <Card 
                    key={bout.id}
                    className="bg-black border border-gray-700 hover:shadow-lg transition-shadow duration-300"
                    style={{ borderColor: '#d95404', borderWidth: '1px', borderStyle: 'solid' }}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-2xl font-bold text-white">
                          {bout.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Users className="w-4 h-4" />
                          <span>{bout.attendees} attendees</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{bout.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{bout.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {bout.description}
                      </p>
                      {bout.highlights && bout.highlights.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-gray-400 mb-2">Highlights:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-300">
                            {bout.highlights.map((highlight, index) => (
                              <li key={index} className="text-sm">{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400">No previous bout sessions to display yet.</p>
              </div>
            )}
          </div>
        );
      
      case "upcoming":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold txtBtn mb-6">
              Upcoming Bout
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Get ready for our next Build Bout session!
            </p>

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 txtBtn"></div>
              </div>
            ) : sessionsData?.sessions && sessionsData.sessions.length > 0 ? (
              <div className="space-y-8">
                {sessionsData.sessions.map((session) => (
                  <Card 
                    key={session.id}
                    className="bg-black border border-gray-700 hover:shadow-lg transition-shadow duration-300"
                    style={{ borderColor: '#d95404', borderWidth: '2px', borderStyle: 'solid' }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <ChevronRight className="w-6 h-6 txtBtn" />
                        <CardTitle className="text-2xl font-bold text-white">
                          {session.title}
                        </CardTitle>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{session.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span className="truncate">{session.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {session.description}
                      </p>
                      <div className="w-full overflow-hidden rounded-lg border-0">
                        <iframe
                          src={`https://luma.com/embed/event/${session.eventId}/simple`}
                          width="100%"
                          height="450"
                          frameBorder="0"
                          style={{ 
                            border: 'none',
                            outline: 'none',
                            boxShadow: 'none',
                            borderRadius: '4px',
                            minHeight: '450px',
                            maxWidth: '100%'
                          }}
                          allow="fullscreen; payment"
                          aria-hidden="false"
                          tabIndex="0"
                          className="w-full border-0 outline-none"
                          title={`${session.title} - Event Registration`}
                        ></iframe>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-black rounded-lg p-8" style={{ borderColor: '#d95404', borderWidth: '1px', borderStyle: 'solid' }}>
                <Calendar className="w-12 h-12 txtBtn mx-auto mb-4 opacity-50" />
                <p className="text-gray-400">No upcoming bout scheduled at the moment. Check back soon!</p>
              </div>
            )}
          </div>
        );
      
      case "community":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold txtBtn mb-6">
              Join Our Community
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
              Whether you're working on the next big startup, developing a creative project, or simply seeking inspiration, Build Bout is your community for building something meaningful.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Join us for our bi-weekly sessions where you can network, learn, and collaborate with like-minded builders and creators.
            </p>
            
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://luma.com/event/evt-sW2EKFsyBm8KDAW"
                className="luma-checkout--button group flex items-center justify-center gap-2 px-8 py-4 w-fit min-h-[52px] rounded-full border-2 border-white hover:scale-105 hover:shadow-lg hover:shadow-white/50 hover:bg-[#b84303] active:scale-95 transition-all duration-300 text-base font-semibold"
                style={{ backgroundColor: '#d95404' }}
                data-luma-action="checkout"
                data-luma-event-id="evt-sW2EKFsyBm8KDAW"
              >
                <CirclePlus className="text-white w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                <span className="text-white font-semibold">Register</span>
              </a>
            </motion.div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="bg-black pt-24 md:pt-12 md:pb-4 relative overflow-hidden">
        {/* Background with local SVG */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        ></div>

        <div className="container max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          {/* Text layout */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h3 className="text-3xl txtBtn font-display font-semibold tracking-tight sm:text-5xl md:text-6xl mb-1">
              {staticContent.intro.title} <br className="hidden sm:block" />
            </h3>

            <p className="text-xl text-gray-200 pt-2">
              {staticContent.intro.description}
            </p>

            <div className="mt-4 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="yellowbg text-black px-4 py-3 rounded-full text-base font-medium transition-colors duration-200 hover:bg-gray-700 flex items-center gap-2"
              >
                Contact us
                <Send className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-black">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Sidebar Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <nav className="bg-black rounded-lg p-2" style={{ borderColor: '#d95404', borderWidth: '1px', borderStyle: 'solid' }}>
                {/* Mobile: Horizontal scrollable */}
                <div className="lg:hidden overflow-x-auto -mx-2 px-2 scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
                  <ul className="flex gap-2 pb-2 min-w-max">
                    {sidebarItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.id} className="flex-shrink-0">
                          <button
                            onClick={() => setActiveTab(item.id)}
                            className={cn(
                              "flex items-center gap-2 px-4 py-3 rounded-md whitespace-nowrap transition-colors duration-200",
                              activeTab === item.id
                                ? "bg-[#d95404] text-white font-semibold"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white"
                            )}
                          >
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            <span className="text-sm">{item.label}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* Desktop: Vertical layout */}
                <ul className="hidden lg:block space-y-2">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => setActiveTab(item.id)}
                          className={cn(
                            "w-full flex items-center gap-3 px-4 py-3 rounded-md text-left transition-colors duration-200",
                            activeTab === item.id
                              ? "bg-[#d95404] text-white font-semibold"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white"
                          )}
                        >
                          <Icon className="w-5 h-5 flex-shrink-0" />
                          <span className="text-sm md:text-base">{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            {/* Content Area */}
            <main className="flex-1 min-w-0">
              <div className="bg-black rounded-lg p-6 md:p-8 lg:p-10" style={{ borderColor: '#d95404', borderWidth: '1px', borderStyle: 'solid' }}>
                {renderContent()}
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;