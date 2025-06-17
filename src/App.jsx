// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './components/About'; // import About

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent text-gray-800 font-sans">
      <Header />
      <main className="animate-fade-in transition duration-500 ease-in-out">
        <Home />
        <About /> {/* Tambahkan About di sini */}
      </main>
      <Footer />
    </div>
  );
}
