/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Purple Palette
        'primary-purple': '#541C9C',      // CTA BUTTONS, non cta buttons
        'secondary-purple': '#680099',    // HOVER EFFECT, STROKE GRADIENT PURPLE
        'accent-purple': '#936FE0',       // RANGE BAR, INNER TOUR CARD/BOOK NOW, FILL GRADIENT PURPLE
        'dark-purple': '#321E5D',         // INNER BUTTON ICONS, ICONS, BOX FILL
        'light-purple': '#FBF4FF',        // SCROLL BAR, TITLE FILL, CHAT COLOUR

        // Purple Variations for different opacities
        'purple': {
          50: '#FBF4FF',   // light-purple
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#936FE0',  // accent-purple
          600: '#680099',  // secondary-purple
          700: '#541C9C',  // primary-purple
          800: '#321E5D',  // dark-purple
          900: '#1E1B3A',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #541C9C 0%, #680099 50%, #936FE0 100%)',
        'gradient-secondary': 'linear-gradient(to right, #680099, #936FE0)',
        'gradient-stroke': 'linear-gradient(135deg, #680099, #541C9C)',
        'gradient-fill': 'linear-gradient(135deg, #936FE0, #541C9C)',
        'gradient-cta': 'linear-gradient(135deg, #541C9C, #680099)',
        'gradient-tour-card': 'linear-gradient(135deg, #936FE0, #680099)',
      },
      boxShadow: {
        'purple': '0 4px 12px rgba(84, 28, 156, 0.2)',
        'purple-hover': '0 6px 20px rgba(104, 0, 153, 0.3)',
        'purple-lg': '0 10px 25px rgba(84, 28, 156, 0.25)',
      },
      animation: {
        'purple-glow': 'purple-glow 2s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
}