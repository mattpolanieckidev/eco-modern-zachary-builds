
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative h-screen">
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 
            className={`text-white font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: "0.2s" }}
          >
            Beautiful, Modern & <span className="text-eco-green-400">Eco-Friendly</span> Architecture
          </h2>
          <p 
            className={`text-white text-lg md:text-xl mt-6 mb-8 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: "0.4s" }}
          >
            We create sustainable, innovative spaces that harmonize with nature while meeting modern design standards.
          </p>
          <div 
            className={`flex space-x-4 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: "0.6s" }}
          >
            <Button className="bg-eco-green-500 hover:bg-eco-green-600 text-white px-8 py-6">
              Our Projects
            </Button>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-gray-800 px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
