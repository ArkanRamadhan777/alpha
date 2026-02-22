/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'rounded': ['Quicksand', 'Poppins', 'sans-serif'],
      },
      colors: {
        // Pastel Color Palette
        pastel: {
          mint: '#B8F3E7',
          sky: '#C3E0F7',
          lavender: '#E5DEFF',
          peach: '#FFD8C7',
          pink: '#FFD4E5',
          yellow: '#FFF4C9',
        },
        soft: {
          // Soft dark gray for text
          text: '#2D3748',
          // Light backgrounds
          bg: '#FAFBFC',
        }
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'soft-xl': '0 12px 40px rgba(0, 0, 0, 0.1)',
        'float': '0 10px 25px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        }
      }
    },
  },
  plugins: [],
}
