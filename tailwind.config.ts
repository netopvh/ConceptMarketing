import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6ffe6',
          100: '#b3ffb3',
          200: '#80ff80',
          300: '#4dff4d',
          400: '#1aff1a',
          500: '#00e600',
          600: '#00b300',
          700: '#008000',
          800: '#004d00',
          900: '#001a00',
        },
        dark: {
          50: '#1a2e1a',
          100: '#152415',
          200: '#101a10',
          300: '#0d150d',
          400: '#0a0f0a',
          500: '#070b07',
          600: '#050805',
          700: '#030503',
          800: '#020302',
          900: '#000000',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00e600, 0 0 10px #00e600' },
          '100%': { boxShadow: '0 0 20px #00e600, 0 0 30px #00e600, 0 0 40px #00e600' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;



