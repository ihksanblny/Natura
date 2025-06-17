import React from 'react';

export default function About() {
  return (
    <section id="tentang" className="bg-white py-24 px-6 relative text-secondary">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
            Kenali Lebih Dekat
          </p>
          <h3 className="text-4xl font-bold mb-6 text-gray-900">Tentang Kami</h3>
          <p className="text-lg leading-loose text-gray-700 mt-4">
            <strong>Natura</strong> berkomitmen menyediakan <span className="text-secondary font-medium">jus buah alami</span> tanpa tambahan bahan kimia. Kami percaya hidup sehat dimulai dari pilihan sederhana.
          </p>
          <p className="text-lg leading-loose text-gray-700 mt-4">
            Bahan-bahan dipilih dari kebun lokal terbaik. Setiap botol dibuat dengan <span className="font-semibold">cinta</span> dan <span className="font-semibold">dedikasi</span> untuk Anda.
          </p>
        </div>

        {/* Image */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1708352546938-525a234a0e86?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Tentang JusFresh"
            className="rounded-xl shadow-md object-cover transition duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-white opacity-10 group-hover:opacity-0 transition duration-500" />
        </div>
      </div>

      {/* Optional: Soft shape background */}
      <div className="absolute -top-12 -left-12 w-40 h-40 bg-green-100 rounded-full blur-2xl opacity-30 z-0"></div>
    </section>
  );
}
