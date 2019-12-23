import Typography from 'typography'

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Girassol", "Helvetica", "serif"],
  bodyFontFamily: ["Lato", "Georgia", "serif"],
  bodyColor: "rgba(0,0,0,0.9)",
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
  // See below for the full list of options.
})

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

export default typography