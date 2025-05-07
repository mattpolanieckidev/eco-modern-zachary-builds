
import React from "react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Residential Architecture",
    description: "Creating beautiful, functional homes that reflect your lifestyle and values with a focus on sustainability.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Commercial Design",
    description: "Designing innovative workspaces that inspire creativity, enhance productivity, and demonstrate environmental responsibility.",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Landscape Integration",
    description: "Harmonizing buildings with their surroundings to create cohesive, sustainable environments that enhance natural beauty.",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Sustainable Retrofitting",
    description: "Transforming existing structures into eco-friendly, energy-efficient buildings without compromising on design aesthetics.",
    image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-warm-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-eco-green-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer comprehensive architectural services with a focus on sustainable design, innovation, and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button
                  variant="outline"
                  className="border-eco-green-500 text-eco-green-500 hover:bg-eco-green-500 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Looking for a custom architectural solution for your specific needs?
          </p>
          <Button className="bg-eco-green-500 hover:bg-eco-green-600 text-white px-8 py-6">
            Request a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
