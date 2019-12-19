import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Girassol", "serif"],
  bodyFontFamily: ["Lato", "sans-serif"],
})

// Insert styles directly into the <head>
typography.injectStyles()

export default typography
