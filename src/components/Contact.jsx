const Contact = () => {
  return (
    <section id="kontak" className="min-h-screen flex items-center bg-gradient-to-br from-pastel-mint via-pastel-sky to-pastel-lavender overflow-hidden scroll-mt-16 pt-16 pb-20 relative">
      {/* Floating 3D Decorative Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-pastel-pink rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-pastel-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pastel-peach rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delay"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-white/40 backdrop-blur-sm rounded-3xl rotate-12 animate-float shadow-soft"></div>
      <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-white/50 backdrop-blur-sm rounded-2xl -rotate-12 animate-float-slow shadow-soft"></div>
      
      <div className="max-w-7xl mx-auto px-6 pt-0 pb-16 text-center w-full relative z-10">
        <div className="mb-12">
          <h2 className="font-rounded font-bold text-5xl md:text-6xl mb-8 inline-block relative">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Hubungi Kami
            </span>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-28 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
          </h2>
          <p className="font-jakarta text-soft-text text-xl md:text-2xl mb-4 max-w-2xl mx-auto leading-relaxed">
            Punya pertanyaan atau ingin tahu lebih lanjut tentang ALPHA?
          </p>
          <p className="font-jakarta text-gray-600 text-lg max-w-xl mx-auto">
            Kami ingin mendengar dari kamu! 💬
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          <a 
            href="mailto:contact@alpha.org" 
            className="btn-3d group bg-white/90 backdrop-blur-sm text-soft-text font-jakarta font-bold px-10 py-6 rounded-full shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 flex items-center gap-3 border-4 border-pastel-sky/50 hover:border-pastel-sky"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-pastel-sky to-pastel-mint rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-soft-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-lg">Email Kami</span>
          </a>
          
          <a 
            href="https://wa.me/628123456789" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-3d group bg-gradient-to-r from-green-400 to-green-500 text-white font-jakarta font-bold px-10 py-6 rounded-full shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 flex items-center gap-3 border-4 border-green-300"
          >
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <span className="text-lg">WhatsApp</span>
          </a>
          
          <a 
            href="https://instagram.com/alpha.official" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-3d group bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 text-white font-jakarta font-bold px-10 py-6 rounded-full shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 flex items-center gap-3 border-4 border-pink-300"
          >
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <span className="text-lg">Instagram</span>
          </a>
        </div>
        
        {/* Fun footer with decorative elements */}
        <footer className="mt-20 pt-12 border-t border-white/40">
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-2xl rotate-12 shadow-soft animate-float"></div>
            <div className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-full shadow-soft animate-float-slow"></div>
            <div className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-2xl -rotate-12 shadow-soft animate-float-delay"></div>
          </div>
          <p className="font-jakarta text-soft-text font-medium text-lg">
            &copy; 2026 ALPHA. Hak Cipta Dilindungi.
          </p>
          <p className="font-jakarta text-gray-600 mt-2">
            Dibuat dengan 💜 untuk masa depan yang lebih cerah
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
