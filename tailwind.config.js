
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        'zoom': 'zoom 2s ease-in-out infinite', // Animación de zoom continua
      },
      keyframes: {
        zoom: {
          '0%, 100%': {
            transform: 'scale(1)', 
          },
          '50%': {
            transform: 'scale(1.1)', 
          }
        }
      }
    
    },
  },
  plugins: [],
}
