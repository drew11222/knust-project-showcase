import React from 'react';

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

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">All Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="mt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm mt-2">
              Type: {project.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;