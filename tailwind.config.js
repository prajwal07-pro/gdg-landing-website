/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gdg: {
          red: '#EA4335',
          blue: '#4285F4',
          yellow: '#FBBC04',
          green: '#34A853',
        },
        light: {
          primary: '#FFFFFF',
          secondary: '#F8F9FA',
          accent: '#F1F3F4',
          border: '#E8EAED',
        },
        text: {
          primary: '#202124',
          secondary: '#5F6368',
          light: '#80868B',
        },
      },
      fontFamily: {
        sans: ['Google Sans', 'Roboto', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gdg-gradient':
          'linear-gradient(135deg, #EA4335 0%, #4285F4 25%, #FBBC04 50%, #34A853 75%, #EA4335 100%)',
        'hero-pattern':
          'radial-gradient(circle at 25% 25%, rgba(66, 133, 244, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(234, 67, 53, 0.1) 0%, transparent 50%)',
      },
      boxShadow: {
        light: '0 2px 10px rgba(0,0,0,0.08)',
        'light-md': '0 4px 16px rgba(0,0,0,0.1)',
        'light-lg': '0 8px 25px rgba(0,0,0,0.15)',
        gdg: '0 4px 20px rgba(66, 133, 244, 0.15)',
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-top': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-bottom': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(66, 133, 244, 0.5)' },
          '50%': {
            boxShadow:
              '0 0 20px rgba(66, 133, 244, 0.8), 0 0 30px rgba(66, 133, 244, 0.6)',
          },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
        'slide-in-top': 'slide-in-top 0.8s ease-out forwards',
        'slide-in-bottom': 'slide-in-bottom 0.8s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'bounce-in': 'bounce-in 0.8s ease-out forwards',
        typing: 'typing 3.5s steps(40, end)',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
