const About = () => {
  return (
    <section id="tentang" className="min-h-screen flex items-center bg-gradient-to-br from-white via-pastel-mint/20 to-pastel-sky/20 overflow-hidden scroll-mt-16 pt-16 pb-20">
      {/* Floating decorative shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-pastel-lavender rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float-slow"></div>
      <div className="absolute bottom-40 left-20 w-48 h-48 bg-pastel-peach rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-6 pt-0 pb-16 w-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-rounded font-bold text-5xl md:text-6xl mb-6 inline-block relative">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Tentang ALPHA
            </span>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300">
              <p className="font-jakarta text-soft-text text-lg leading-relaxed">
                ALPHA adalah organisasi yang berpikiran maju, didedikasikan untuk membangun generasi pemimpin, inovator, dan agen perubahan masa depan. Kami percaya pada pemberdayaan anggota untuk mencapai potensi penuh mereka melalui program dan inisiatif yang bermakna.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300">
              <p className="font-jakarta text-soft-text text-lg leading-relaxed">
                Misi kami adalah menciptakan komunitas inklusif di mana setiap anggota dapat berkembang, belajar, dan tumbuh. Melalui proyek kolaboratif, acara yang menarik, dan pendekatan inovatif, kami membangun masa depan yang lebih cerah bersama-sama.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card-clay bg-gradient-to-br from-pastel-mint to-pastel-sky/50 p-8 group hover:-rotate-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-soft group-hover:scale-110 transition-transform">
                  💡
                </div>
                <div className="flex-1">
                  <h3 className="font-rounded font-bold text-2xl mb-3 text-soft-text">Inovasi</h3>
                  <p className="font-jakarta text-gray-700 leading-relaxed">Menumbuhkan pemikiran kreatif dan ide-ide terobosan</p>
                </div>
              </div>
            </div>
            
            <div className="card-clay bg-gradient-to-br from-pastel-lavender to-pastel-pink/50 p-8 group transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-soft group-hover:scale-110 transition-transform">
                  🤝
                </div>
                <div className="flex-1">
                  <h3 className="font-rounded font-bold text-2xl mb-3 text-soft-text">Kolaborasi</h3>
                  <p className="font-jakarta text-gray-700 leading-relaxed">Membangun koneksi yang kuat dan kerja sama tim</p>
                </div>
              </div>
            </div>
            
            <div className="card-clay bg-gradient-to-br from-pastel-peach to-pastel-yellow/50 p-8 group hover:rotate-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-soft group-hover:scale-110 transition-transform">
                  ⭐
                </div>
                <div className="flex-1">
                  <h3 className="font-rounded font-bold text-2xl mb-3 text-soft-text">Keunggulan</h3>
                  <p className="font-jakarta text-gray-700 leading-relaxed">Berusaha untuk standar tertinggi dalam segala hal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
