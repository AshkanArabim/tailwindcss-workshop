import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-600 text-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 lg:text-8xl">We are FOSS Club.</h1>
        <p className="text-lg md:text-xl mb-6">
          The most awesome CS organization on campus.
        </p>
        <a
          href="https://github.com/FOSS-club-UTEP/tailwindcss-workshop"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-950 hover:drop-shadow-lg hover:shadow-black hover:bg-gray-600 text-white py-2 px-4 rounded transition duration-200"
        >
          See the code on GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
