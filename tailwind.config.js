/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "banner": "url('/banner.png')",
        "banner2": "url('/banner-2.png')",
      },
      fill: theme => ({
         'pink': theme('colors.pink.400'),
         'white': theme('colors.white'),
         'blue': theme('colors.blue.500'),
       })
    },
  },
  plugins: [],
};
