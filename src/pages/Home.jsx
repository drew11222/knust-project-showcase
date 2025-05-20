import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  // Mock data (later from schema.json or Firebase)
  const projects = [
    {
      id: 'p1',
      title: 'AI Chatbot',
      description: 'A chatbot using NLP',
      tags: ['machine learning', 'showcase'],
      type: 'showcase',
    },
    {
      id: 'p2',
      title: 'Web App',
      description: 'Need help with backend',
      tags: ['web development', 'help'],
      type: 'help',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">All Projects</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Home;