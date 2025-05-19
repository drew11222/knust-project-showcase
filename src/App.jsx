import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);