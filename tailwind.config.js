// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#F8F9F4",      // latar belakang netral
        surface: "#FFFFFF",   // elemen card
        accent: "#DAD7CD",    // abu kehijauan lembut
        footer: "#ACADBC",
        header: "#EDE3E4",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      boxShadow: {
        glow: '0 4px 20px rgba(226, 248, 156, 0.6)',
      },
      scale: {
        102: '1.02',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.primary'),
              fontWeight: '600',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};