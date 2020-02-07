const darkBlue = '#062b50'
const lightBlue = '#66E0FF'
const purple60 = '#663399'
const purple30 = '#D9BAE8'
const white = '#fff'
const lightWhite = 'rgba(255, 255, 255, 0.86)'
const opaqueLightWhite = 'rgba(255,255,255, 0.2)'


export default {
  text: white,
  background: darkBlue,
  primary: darkBlue,
  secondary: lightBlue,
  muted: darkBlue,
  highlight: lightBlue,
  heading: darkBlue,
  prism: {
    background: '#011627',
    comment: '#809393',
    string: '#addb67',
    var: '#d6deeb',
    number: '#f78c6c',
    constant: '#82aaff',
    punctuation: '#c792ea',
    className: '#ffc98b',
    tag: '#ffa7c4',
    boolean: '#ff5874',
    property: '#80cbc4',
    namespace: '#b2ccd6',
    highlight: '#022a4b',
  },
  modes: {
    dark: {
      text: lightBlue,
      background: darkBlue,
      primary: purple30,
      secondary: lightWhite,
      muted: opaqueLightWhite,
      highlight: purple60,
      heading: white,
    },
  },
}