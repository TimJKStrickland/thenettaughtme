import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui"
import wavesTheme from "gatsby-theme-waves/src/gatsby-plugin-theme-ui"
import colors from "../utils/colors"
import styles from "../utils/styles"

export default {
  ...baseTheme,
  ...wavesTheme,
  styles,
  colors: {
    ...colors,
  //   initialColorModeName: `dark`
  }
}