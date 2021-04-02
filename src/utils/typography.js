import Typography from 'typography'
const headerFontFamily = ["Dela Gothic One", "Helvetica", "serif"];
const bodyFontFamily = ["Lato", "Georgia", "serif"];
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: headerFontFamily,
  bodyFontFamily: bodyFontFamily,
  bodyColor: "rgba(0,0,0,0.9)",
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: (options) => ({
    'h1,h2,h3,h4,h5,h6': {
      letterSpacing: `1px`
    },
    a: {
      fontFamily: "Dela Gothic One"
    }
  })
  // See below for the full list of options.
})

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

export default typography