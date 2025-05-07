
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projectCategories = ["All", "Residential", "Commercial", "Landscape", "Sustainable"];

const projects = [
  {
    title: "Harmony House",
    category: "Residential",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Eco Office Complex",
    category: "Commercial",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Greenway Gardens",
    category: "Landscape",
    location: "Vancouver, BC",
    image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Solar Heights",
    category: "Sustainable",
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Urban Retreat",
    category: "Residential",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "Green Towers",
    category: "Commercial",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-eco-green-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our portfolio of innovative, sustainable architectural projects that showcase our commitment to excellence.
          </p>
        </div>

        <Tabs defaultValue="All" className="mb-12">
          <TabsList className="flex justify-center flex-wrap mb-8">
            {projectCategories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category)}
                className="data-[state=active]:bg-eco-green-500 data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                      <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-eco-green-500 hover:bg-eco-green-600 text-white">
                        View Project
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex justify-between mt-2">
                      <span className="text-eco-green-500">{project.category}</span>
                      <span className="text-gray-500">{project.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button className="bg-eco-green-500 hover:bg-eco-green-600 text-white px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
