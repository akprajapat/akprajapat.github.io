/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
        secondary: '#112240',
        accent: '#64ffda',
        text: {
          primary: '#ccd6f6',
          secondary: '#8892b0',
        },
        navy: {
          light: '#112240',
          DEFAULT: '#0a192f',
          dark: '#020c1b'
        }
      },
      fontFamily: {
        sans: ['Calibre', 'Inter', 'San Francisco', 'SF Pro Text', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'monospace']
      },
      spacing: {
        'nav-height': '100px',
        'section-min': '100vh'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}
