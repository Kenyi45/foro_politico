/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Azul Melocotón - Azul suave con tonos cálidos
        primary: {
          50: '#fef7f0',
          100: '#feeee0',
          200: '#fddcc1',
          300: '#fbc797',
          400: '#f8a968',
          500: '#e67e22', // Naranja melocotón principal
          600: '#d35400',
          700: '#b7472a',
          800: '#934028',
          900: '#7d3c2a',
        },
        // Rosa Salmón - Tonos rosados suaves
        accent: {
          50: '#fef5f3',
          100: '#feeae6',
          200: '#fdd8d3',
          300: '#fbbbad',
          400: '#f79481',
          500: '#f1695b', // Rosa salmón principal
          600: '#de4a3a',
          700: '#bb3d31',
          800: '#9b352e',
          900: '#81322e',
        },
        // Dorado Melocotón - Amarillo cálido
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Dorado melocotón suave
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Cremas y beiges cálidos
        neutral: {
          50: '#fdfcfb',
          100: '#faf8f5',
          200: '#f5f1eb',
          300: '#ede6db',
          400: '#ddd0c0',
          500: '#c9b59c',
          600: '#b39d85',
          700: '#9a8570',
          800: '#7c6d5e',
          900: '#65594f',
        },
        // Terracota suave - Marrón rosado
        terracotta: {
          50: '#fdf6f3',
          100: '#fbeee8',
          200: '#f6ddd1',
          300: '#efc4b0',
          400: '#e5a085',
          500: '#db7f5f', // Terracota amelonado
          600: '#c8654a',
          700: '#a7533f',
          800: '#884639',
          900: '#703d35',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Source Sans Pro', 'system-ui', 'sans-serif'],
        'heading': ['Playfair Display', 'serif'],
        'accent': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Source Sans Pro', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient': 'gradient 15s ease infinite',
        'scale-in': 'scaleIn 0.4s ease-out',
        'rotate-slow': 'rotateSlow 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(230, 126, 34, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(230, 126, 34, 0.8)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 50px -12px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 20px rgba(230, 126, 34, 0.4)', // Naranja melocotón
        'glow-accent': '0 0 20px rgba(241, 105, 91, 0.4)', // Rosa salmón
        'glow-gold': '0 0 20px rgba(245, 158, 11, 0.4)', // Dorado melocotón
        'glow-terracotta': '0 0 20px rgba(219, 127, 95, 0.4)', // Terracotta
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(45deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

