import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Leaf,
  Snowflake,
  Ban,
  Truck,
  ShoppingCart,
  CheckCircle,
} from 'lucide-react';

const sliderImages = [
  'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=1372&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550605132-72563b352e38?q=80&w=1470&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1546069180-03e8633ef134?q=80&w=1471&auto=format&fit=crop',
];

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-white text-black pt-24"
      >
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="w-full h-full"
          >
            {sliderImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-2xl">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Sehat Alami dengan Natura
          </h2>
          <p className="text-lg mb-6">
            Tanpa tambahan buatan, hanya buah segar alami siap dikirim ke rumah Anda.
          </p>
          <a
            href="#produk"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            🍹 Pesan Sekarang
          </a>
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="bg-white py-24 space-y-16" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Apa yang Membuat Kami Berbeda?
          </h3>

          {/* Panel 1 */}
          <div className="md:flex items-center gap-10 mb-16">
            <img
              src="https://images.unsplash.com/photo-1597995463377-911fb3779867?q=80&w=1470&auto=format&fit=crop"
              alt="Colorful Drinks"
              className="rounded-xl shadow-lg w-full md:w-1/2 aspect-[16/10] object-cover"
            />
            <div className="md:w-1/2 min-h-[220px] flex flex-col justify-center">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                100% Buah Asli, Bukan Konsentrat
              </h4>
              <p className="text-gray-900 leading-relaxed">
                Kami tidak menggunakan jus dari konsentrat atau bahan tambahan. Semua rasa berasal dari buah segar pilihan, tanpa rekayasa rasa atau pemanis buatan.
              </p>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="md:flex items-center gap-10 mb-16 flex-row-reverse">
            <img
              src="https://images.unsplash.com/photo-1621878974675-91a5f1809ace?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Orange Juice Bottle"
              className="rounded-xl shadow-lg w-full md:w-1/2 aspect-[16/10] object-cover"
            />
            <div className="md:w-1/2 min-h-[220px] flex flex-col justify-center">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                Dibuat Setelah Anda Pesan
              </h4>
              <p className="text-gray-900 leading-relaxed">
                Jus hanya kami proses ketika Anda memesan. Ini memastikan Anda menerima produk yang benar-benar segar, bukan stok lama di lemari pendingin.
              </p>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="md:flex items-center gap-10 mb-8">
            <img
              src="https://images.unsplash.com/photo-1652945920544-ec7098c133cd?q=80&w=1470&auto=format&fit=crop"
              alt="Rainbow Juice Lineup"
              className="rounded-xl shadow-lg w-full md:w-1/2 aspect-[16/10] object-cover"
            />
            <div className="md:w-1/2 min-h-[220px] flex flex-col justify-center">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                Pengiriman Kilat & Ramah Lingkungan
              </h4>
              <p className="text-gray-900 leading-relaxed">
                Kami mengantarkan pesanan Anda dengan cepat menggunakan packaging ramah lingkungan. Sehat untuk tubuh, dan baik untuk bumi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produk Unggulan */}
      <section id="produk" className="bg-gray-100 py-24" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Produk Unggulan
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src="https://img.freepik.com/free-photo/orange-wine-splash-isolated-white_1112-2023.jpg?uid=R176580726&ga=GA1.1.663468012.1748084613&semt=ais_hybrid&w=740"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={`Produk ${i}`}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white px-4">
                  <h4 className="text-xl font-bold mb-2">Jus Buah #{i}</h4>
                  <p className="text-sm mb-4 text-center">
                    Segar, alami, dan bebas pengawet. Cocok untuk gaya hidup sehat.
                  </p>
                  <button className="bg-green-600 px-4 py-2 rounded-full text-sm hover:bg-green-700">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Kerja Kami */}
      <section id="cara" className="bg-white py-24" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Cara Kerja Kami
          </h3>
          <div className="relative flex flex-col md:flex-row md:justify-between items-start gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: ShoppingCart,
                title: 'Pesan Online',
                desc: 'Pilih jus favorit dan lakukan pemesanan dari rumah.',
              },
              {
                icon: CheckCircle,
                title: 'Proses Produksi',
                desc: 'Jus dibuat setelah dipesan dengan standar kebersihan tinggi.',
              },
              {
                icon: Truck,
                title: 'Antar ke Rumah',
                desc: 'Pengiriman cepat dan aman langsung ke pintu Anda.',
              },
            ].map((step, i) => (
              <div key={i} className="flex-1 text-center">
                <div className="relative inline-block mb-4">
                  <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-lg">
                    {i + 1}
                  </div>
                  <step.icon className="w-16 h-16 mx-auto text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600 max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
