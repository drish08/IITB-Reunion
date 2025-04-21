/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: '#E3E5ED',
          100: '#B9BFDB',
          200: '#8E98C8',
          300: '#6271B5',
          400: '#4A5AA3',
          500: '#324491',
          600: '#243272',
          700: '#162153',
          800: '#0A1128',
          900: '#050819',
        },
        celestial: {
          50: '#E8F4FF',
          100: '#C2E9FF',
          200: '#99D6FF',
          300: '#66BFFF',
          400: '#4AA9FF',
          500: '#4A90E2',
          600: '#3B73B5',
          700: '#2C5688',
          800: '#1D395B',
          900: '#0E1C2E',
        },
        stardust: {
          50: '#FFF9E6',
          100: '#FFE4B3',
          200: '#FFD180',
          300: '#FFBD4D',
          400: '#FFA91A',
          500: '#E69500',
          600: '#B37400',
          700: '#805300',
          800: '#4D3200',
          900: '#1A1100',
        }
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'twinkle': 'twinkle 1.5s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 2s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%': { filter: 'brightness(100%) drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))' },
          '50%': { filter: 'brightness(120%) drop-shadow(0 0 8px rgba(255, 255, 255, 0.9))' },
          '100%': { filter: 'brightness(100%) drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};