
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#fcfcfd',
        foreground: '#1a1a1a',
        primary: {
          DEFAULT: '#001F4D',
          foreground: '#fff',
          rhevira: '#9b87f5',
          cloud: '#1EAEDB'
        },
        accent: {
          DEFAULT: '#f81568',
          foreground: '#fff',
          rhevira: '#7E69AB',
          cloud: '#33C3F0'
        },
        muted: {
          DEFAULT: '#f1f3f6',
          foreground: '#989db1'
        },
        card: {
          DEFAULT: '#fff',
          foreground: '#273043'
        },
        navbar: {
          DEFAULT: '#ffffff',
          contrast: '#f3f6fa',
        }
      },
      borderRadius: {
        lg: '1.5rem',
        md: '1rem',
        sm: '0.5rem'
      },
      dropShadow: {
        menu: "0px 12px 32px rgba(60,60,120,0.07)"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
