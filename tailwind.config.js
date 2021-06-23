module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        pitza: "url('bg_image/bg_3.jpg')",
      }),

      spacing: {
        "ml-10%": "10%",
      },

      height: {
        "6/7": "87.777777%",
      },
      blur: {
        xs: "2px",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
