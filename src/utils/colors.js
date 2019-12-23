/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

const darkBlue = `#007acc`
const lightBlue = `#66E0FF`
const blue = `#00aacc`
const blueGray = `#282c35`

export default {
  text: blue,
  primary: blue,
  heading: blueGray,
  background: blue,
  modes: {
    dark: {
      background: blueGray,
      primary: lightBlue,
      highlight: lightBlue,
    },
  },
}