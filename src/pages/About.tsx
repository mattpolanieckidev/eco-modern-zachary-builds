import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import zacharyPhoto from "@/assets/zachary-orlofsky.jpg";

const About = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              About Zachary Orlofsky
            </h1>
            <div className="w-24 h-1 bg-eco-green-500 mx-auto" />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <img
                src={zacharyPhoto}
                alt="Zachary Orlofsky, Founder of Zachary Ethan Architecture"
                className="w-full rounded-lg shadow-lg object-cover"
              />
              <div className="mt-6 text-center">
                <h2 className="text-xl font-serif font-semibold">Zachary Orlofsky</h2>
                <p className="text-eco-green-600">Founder & Principal Architect</p>
              </div>
            </div>

            <article className="md:col-span-2 space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Growing up on Long Island, Zachary Orlofsky developed a fascination with architecture and design from an early age. Whether he was sketching ideas onto paper, building intricate creations from Legos, or studying the details of the spaces around him, creativity and design were always second nature to him. That early passion evolved into a lifelong dedication to creating environments that are not only visually compelling, but deeply personal and functional for the people who experience them.
              </p>
              <p>
                Known for his keen eye for detail and strong ability to connect with clients, Zachary believes that great architecture begins with understanding people — how they live, work, gather, and interact with the spaces around them. His approachable nature and emphasis on personal relationships allow clients to feel heard throughout the design process, creating a collaborative experience rooted in trust, communication, and shared vision.
              </p>
              <p>
                With over 12 years of experience spanning a wide range of building typologies and project scales, Zachary brings both technical expertise and creative versatility to every project. His ability to think outside the box, paired with a vast architectural vocabulary and strong understanding of design principles, allows him to craft thoughtful spaces that tell a story and leave a lasting impression.
              </p>
              <p>
                Driven by both passion and obsession for design, Zachary approaches every project with the belief that architecture should elevate everyday life. His commitment to creativity, detail, and helping others resonates throughout the entire client experience — from the first conversation to the final built environment.
              </p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;