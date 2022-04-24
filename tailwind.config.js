module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "xsm": "320px"
      },
      colors:{
        "fi-gray": "#F2F2E8",
        "fi-red": "#B61134",
        "fi-red2": "#D82148",
        "fi-pink":  "#FF3E59",
        "fi-lightred": "#D3B3A2",
        "fi-black": "#151D3B",
        "fi-yellow": "#DADBBD"
      },
      fontFamily:{
        "marvin": ["marvin", "sans-serif"],
        "poppins": ["poppins", "sans-serif"]
      },
      dropShadow:{
        "dred": "2px 3px rgba(216, 33, 72, 1)",
        "dred2": "6px 8px rgba(216, 33, 72, 1)"
      },
    },
  },
  plugins: [],
}
