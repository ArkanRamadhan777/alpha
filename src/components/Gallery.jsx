const Gallery = () => {
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop",
      alt: "Anggota berkolaborasi",
      color: "pastel-mint"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
      alt: "Pertemuan tim",
      color: "pastel-lavender"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop",
      alt: "Sesi workshop",
      color: "pastel-pink"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop",
      alt: "Diskusi kelompok",
      color: "pastel-sky"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop",
      alt: "Presentasi anggota",
      color: "pastel-peach"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop",
      alt: "Belajar bersama",
      color: "pastel-yellow"
    }
  ];

  return (
    <section id="galeri" className="min-h-screen flex items-center bg-gradient-to-br from-white via-pastel-sky/20 to-pastel-lavender/20 overflow-hidden scroll-mt-16 pt-16 pb-20 relative">
      {/* Floating decorative shapes */}
      <div className="absolute top-40 right-16 w-72 h-72 bg-pastel-pink rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-float-slow"></div>
      <div className="absolute bottom-32 left-24 w-64 h-64 bg-pastel-yellow rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-6 pt-0 pb-16 w-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-rounded font-bold text-5xl md:text-6xl mb-6 inline-block relative">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Galeri
            </span>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full"></div>
          </h2>
          <p className="font-jakarta text-gray-600 text-lg mt-6">
            Momen berharga dalam perjalanan kami
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className={`group relative aspect-video rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-xl transition-all duration-500 cursor-pointer ${
                index % 2 === 0 ? 'hover:-rotate-2' : 'hover:rotate-2'
              } hover:scale-105`}
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />
              {/* Soft gradient overlay */}
              <div className={`absolute inset-0 bg-${image.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              {/* Decorative border on hover */}
              <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/50 rounded-3xl transition-all duration-500"></div>
              {/* Floating icon on hover */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-soft">
                <span className="text-xl">✨</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fun decorative elements */}
        <div className="mt-16 flex justify-center gap-8">
          <div className="w-16 h-16 bg-pastel-mint rounded-3xl rotate-12 shadow-soft hover:scale-110 hover:rotate-45 transition-all duration-500 cursor-pointer"></div>
          <div className="w-16 h-16 bg-pastel-lavender rounded-full shadow-soft hover:scale-110 transition-all duration-500 cursor-pointer"></div>
          <div className="w-16 h-16 bg-pastel-peach rounded-3xl -rotate-12 shadow-soft hover:scale-110 hover:-rotate-45 transition-all duration-500 cursor-pointer"></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
