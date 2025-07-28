/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-white', 'bg-gray-100', 'bg-purple-600', 'hover:bg-purple-700',
    'text-white', 'text-gray-800', 'text-2xl', 'font-bold', 'py-3', 'px-6',
    'rounded-lg', 'shadow-lg', 'shadow-sm', 'border-b', 'sticky', 'top-0', 'z-10',
    'max-w-7xl', 'mx-auto', 'px-4', 'py-4', 'flex', 'justify-between', 'items-center',
    'min-h-screen', 'rounded-lg', 'overflow-hidden', 'shadow-lg', 'max-w-4xl', 'p-4',
    'bg-white', 'text-lg', 'text-sm', 'text-xs', 'text-center', 'text-purple', 'text-dark-purple',
    'bg-gradient-to-b', 'from-[#56A3FF]', 'to-[#567AFF]', 'font-semibold', 'font-medium',
    'border', 'border-gray-300', 'border-gray-200', 'border-blue-500', 'rounded',
    'w-full', 'w-24', 'w-16', 'w-28', 'h-12', 'h-10', 'h-8', 'h-16', 'h-3', 'h-2',
    'flex-1', 'flex-col', 'justify-center', 'justify-end', 'justify-start', 'items-center',
    'items-start', 'mb-4', 'mb-6', 'mb-8', 'mb-12', 'mt-1', 'mt-2', 'mt-3', 'mt-4', 'mt-6', 'mt-8',
    'mt-12', 'space-x-4', 'space-y-1', 'space-y-2', 'space-y-4', 'space-y-6', 'space-y-8',
    'p-3', 'p-4', 'p-6', 'p-8', 'pt-4', 'pb-4', 'pl-4', 'pr-4', 'text-blue-500', 'bg-[#291F5D]',
    'bg-[#f8f0ff]', 'bg-[#F5F0FA]', 'bg-[#291F5D]', 'bg-[#567AFF]', 'bg-[#56A3FF]',
    'bg-[#505191]', 'hover:bg-[#404080]', 'text-[#9333EA]', 'text-[#505191]', 'text-[#291F5D]',
    
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