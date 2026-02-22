const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontak');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pastel-mint via-pastel-sky to-pastel-lavender">
      {/* Floating 3D Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pastel-pink rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-pastel-lavender rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-slow"></div>
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-pastel-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delay"></div>
      
      {/* Floating soft shapes */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-white/30 backdrop-blur-sm rounded-3xl rotate-12 animate-float shadow-soft"></div>
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-white/40 backdrop-blur-sm rounded-2xl -rotate-12 animate-float-slow shadow-soft"></div>
      <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-white/50 backdrop-blur-sm rounded-full animate-float-delay shadow-soft"></div>

      {/* Content - Asymmetric Layout */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left space-y-8">
            <div className="inline-block">
              <h1 className="font-rounded font-bold text-7xl md:text-8xl lg:text-9xl mb-4 relative">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg text-soft-shadow">
                  ALPHA
                </span>
                <div className="absolute -top-6 -right-12 w-20 h-20 bg-pastel-peach rounded-full opacity-60 blur-2xl"></div>
              </h1>
              <div className="h-2 w-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
            </div>
            
            <p className="font-jakarta text-xl md:text-2xl text-soft-text leading-relaxed max-w-lg">
              Memberdayakan perubahan melalui{' '}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold">inovasi</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-pastel-yellow opacity-60 -rotate-1"></span>
              </span>
              ,{' '}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold">kolaborasi</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-pastel-mint opacity-60 rotate-1"></span>
              </span>
              , dan{' '}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold">keunggulan</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-pastel-pink opacity-60 -rotate-1"></span>
              </span>
            </p>
            
            <button 
              onClick={scrollToContact} 
              className="btn-3d bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white font-jakarta font-bold px-10 py-5 rounded-full shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 text-lg"
            >
              Hubungi Kami ✨
            </button>
          </div>

          {/* Right side - Decorative 3D element */}
          <div className="hidden md:flex justify-center items-center relative">
            <div className="relative w-full max-w-md">
              {/* Main card with soft shadow */}
              <div className="bg-white/70 backdrop-blur-md rounded-[3rem] p-10 shadow-soft-xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-gradient-to-r from-pastel-mint to-pastel-sky p-6 rounded-2xl shadow-soft">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">🚀</div>
                    <div>
                      <h3 className="font-rounded font-bold text-soft-text">Inovasi</h3>
                      <p className="text-sm text-gray-600">Ide & Kreativitas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-gradient-to-r from-pastel-lavender to-pastel-pink p-6 rounded-2xl shadow-soft">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">🤝</div>
                    <div>
                      <h3 className="font-rounded font-bold text-soft-text">Kolaborasi</h3>
                      <p className="text-sm text-gray-600">Kerja Tim</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-gradient-to-r from-pastel-peach to-pastel-yellow p-6 rounded-2xl shadow-soft">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">⭐</div>
                    <div>
                      <h3 className="font-rounded font-bold text-soft-text">Keunggulan</h3>
                      <p className="text-sm text-gray-600">Standar Tinggi</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative shapes around the card */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-pastel-lavender rounded-3xl -rotate-12 opacity-60 animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-pastel-peach rounded-full opacity-60 animate-float-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
