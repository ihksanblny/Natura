// Updated Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">JusFresh</h4>
            <p className="text-sm">Jus buah alami, sehat, dan segar. Dikirim langsung dari dapur kami ke rumah Anda.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#produk" className="hover:underline">Produk</a></li>
              <li><a href="#cara" className="hover:underline">Cara Kerja</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <p className="text-sm">Email: support@jusfresh.com</p>
            <p className="text-sm">Telp: +62 812-3456-7890</p>
          </div>
        </div>
      </footer>
  );
}