
import React from "react";
import { Building, Leaf, Palette } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            About Zachary Ethan Architecture
          </h2>
          <div className="w-24 h-1 bg-eco-green-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2010, Zachary Ethan Architecture is a visionary firm dedicated to creating spaces that harmonize with the environment while embracing modern design principles.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our team of passionate architects and designers brings a wealth of experience and innovative thinking to every project, ensuring exceptional results that exceed client expectations.
            </p>
            <p className="text-lg text-gray-700">
              With a focus on sustainability, we integrate eco-friendly materials, energy-efficient systems, and biophilic design elements into our work, creating buildings that are not only beautiful but also responsible.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Modern eco-friendly building"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: <Building className="w-12 h-12 text-eco-green-500 mb-4" />,
              title: "Innovative Design",
              description:
                "We push boundaries with cutting-edge architectural concepts that balance form, function, and sustainability.",
            },
            {
              icon: <Leaf className="w-12 h-12 text-eco-green-500 mb-4" />,
              title: "Eco-Friendly Approach",
              description:
                "Our designs incorporate sustainable materials, renewable energy solutions, and minimal environmental impact.",
            },
            {
              icon: <Palette className="w-12 h-12 text-eco-green-500 mb-4" />,
              title: "Attention to Detail",
              description:
                "We meticulously craft every aspect of our projects, ensuring quality and precision in execution.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
