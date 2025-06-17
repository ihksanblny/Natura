import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-black-700">Natura</h1>
          <nav className="space-x-6 text-sm font-medium text-gray-700">
            <a href="#home" className="hover:text-black">Home</a>
            <a href="#produk" className="hover:text-black">Produk</a>
            <a href="#cara" className="hover:text-black">Cara Kerja</a>
            <a href="#footer" className="hover:text-black">Kontak</a>
          </nav>
        </div>
      </header>
  );
}