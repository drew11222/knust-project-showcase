import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">KNUST Student Project Showcase</h1>
      <p>Work in progress...</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
