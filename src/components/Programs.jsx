const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Workshop Kepemimpinan",
      description: "Mengembangkan keterampilan kepemimpinan esensial melalui sesi interaktif dan tantangan dunia nyata.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
      color: "from-pastel-mint to-pastel-sky",
      icon: "🎯"
    },
    {
      id: 2,
      title: "Summit Inovasi",
      description: "Pertemuan tahunan pikiran-pikiran kreatif untuk memamerkan proyek inovatif dan ide-ide terobosan.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
      color: "from-pastel-lavender to-pastel-pink",
      icon: "💡"
    },
    {
      id: 3,
      title: "Kegiatan Sosial",
      description: "Membuat dampak positif melalui program volunteer dan inisiatif pelayanan masyarakat.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop",
      color: "from-pastel-peach to-pastel-yellow",
      icon: "❤️"
    }
  ];

  return (
    <section id="program" className="min-h-screen flex items-center bg-gradient-to-br from-pastel-lavender/20 via-white to-pastel-pink/20 overflow-hidden scroll-mt-16 pt-16 pb-20 relative">
      {/* Floating decorative shapes */}
      <div className="absolute top-32 left-20 w-56 h-56 bg-pastel-mint rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-32 w-64 h-64 bg-pastel-peach rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float-slow"></div>
      
      <div className="max-w-7xl mx-auto px-6 pt-0 pb-16 w-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-rounded font-bold text-5xl md:text-6xl mb-6 inline-block relative">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Program & Kegiatan
            </span>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-28 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
          </h2>
          <p className="font-jakarta text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
            Berbagai program menarik yang dirancang untuk mengembangkan potensi siswa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.id} 
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-clay overflow-hidden h-full flex flex-col hover:scale-105 transition-all duration-500">
                <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="absolute top-4 right-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-soft group-hover:scale-110 group-hover:rotate-12 transition-all">
                    {program.icon}
                  </div>
                </div>
                <div className={`p-8 bg-gradient-to-br ${program.color} bg-opacity-10 flex-1 flex flex-col`}>
                  <h3 className="font-rounded font-bold text-2xl mb-4 text-soft-text group-hover:text-purple-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="font-jakarta text-gray-700 leading-relaxed flex-1">
                    {program.description}
                  </p>
                  <div className={`mt-6 h-1 w-16 bg-gradient-to-r ${program.color} rounded-full group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
