import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'tentang', 'program', 'galeri', 'kontak'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg shadow-soft z-50 border-b border-pastel-sky/30">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection('beranda')} className="font-rounded font-bold text-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">
            ALPHA
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            <button onClick={() => scrollToSection('beranda')} className={`font-jakarta font-medium px-5 py-2.5 rounded-full transition-all duration-300 relative ${activeSection === 'beranda' ? 'bg-gradient-to-r from-pastel-pink to-pastel-lavender text-soft-text shadow-soft' : 'text-gray-600 hover:bg-pastel-mint/50 hover:text-soft-text'}`}>
              Beranda
            </button>
            <button onClick={() => scrollToSection('tentang')} className={`font-jakarta font-medium px-5 py-2.5 rounded-full transition-all duration-300 relative ${activeSection === 'tentang' ? 'bg-gradient-to-r from-pastel-sky to-pastel-mint text-soft-text shadow-soft' : 'text-gray-600 hover:bg-pastel-sky/50 hover:text-soft-text'}`}>
              Tentang
            </button>
            <button onClick={() => scrollToSection('program')} className={`font-jakarta font-medium px-5 py-2.5 rounded-full transition-all duration-300 relative ${activeSection === 'program' ? 'bg-gradient-to-r from-pastel-lavender to-pastel-pink text-soft-text shadow-soft' : 'text-gray-600 hover:bg-pastel-lavender/50 hover:text-soft-text'}`}>
              Program
            </button>
            <button onClick={() => scrollToSection('galeri')} className={`font-jakarta font-medium px-5 py-2.5 rounded-full transition-all duration-300 relative ${activeSection === 'galeri' ? 'bg-gradient-to-r from-pastel-peach to-pastel-yellow text-soft-text shadow-soft' : 'text-gray-600 hover:bg-pastel-peach/50 hover:text-soft-text'}`}>
              Galeri
            </button>
            <button onClick={() => scrollToSection('kontak')} className={`font-jakarta font-medium px-5 py-2.5 rounded-full transition-all duration-300 relative ${activeSection === 'kontak' ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-soft' : 'text-gray-600 hover:bg-pink-100 hover:text-soft-text'}`}>
              Kontak
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none bg-pastel-mint/30 p-2 rounded-xl hover:bg-pastel-mint/50 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 bg-white/60 backdrop-blur-md rounded-2xl p-4 shadow-soft">
            <button onClick={() => scrollToSection('beranda')} className={`block w-full text-left font-jakarta font-medium transition-all py-3 px-4 rounded-xl ${activeSection === 'beranda' ? 'bg-pastel-pink text-soft-text shadow-soft' : 'text-gray-700 hover:bg-pastel-mint/30'}`}>
              Beranda
            </button>
            <button onClick={() => scrollToSection('tentang')} className={`block w-full text-left font-jakarta font-medium transition-all py-3 px-4 rounded-xl ${activeSection === 'tentang' ? 'bg-pastel-sky text-soft-text shadow-soft' : 'text-gray-700 hover:bg-pastel-sky/30'}`}>
              Tentang
            </button>
            <button onClick={() => scrollToSection('program')} className={`block w-full text-left font-jakarta font-medium transition-all py-3 px-4 rounded-xl ${activeSection === 'program' ? 'bg-pastel-lavender text-soft-text shadow-soft' : 'text-gray-700 hover:bg-pastel-lavender/30'}`}>
              Program
            </button>
            <button onClick={() => scrollToSection('galeri')} className={`block w-full text-left font-jakarta font-medium transition-all py-3 px-4 rounded-xl ${activeSection === 'galeri' ? 'bg-pastel-peach text-soft-text shadow-soft' : 'text-gray-700 hover:bg-pastel-peach/30'}`}>
              Galeri
            </button>
            <button onClick={() => scrollToSection('kontak')} className={`block w-full text-left font-jakarta font-medium transition-all py-3 px-4 rounded-xl ${activeSection === 'kontak' ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-soft' : 'text-gray-700 hover:bg-pink-100'}`}>
              Kontak
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
