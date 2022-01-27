module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#FFF',
      primary: '#781D42',
      secondary: '#FFC900',
      red: '#c9321f',
      grenadine: '#781D42',
      purple: '#5c6ac4',
      yellow: '#FFC900',
      dark: '#303330',
      light: '#e3ddce',
    },
    extend: {
      backgroundImage: {
        designCover: "url('/assets/images/cover1.jpg')",
        codeCover: "url('/assets/images/cover2.jpg')",
        portrait: "url('/assets/images/me.png')",
      },
    },
    fontFamily: {
      Oswald: ['"Oswald"', 'system-ui'],
      RobotoC: ['"Roboto Condensed"', 'Georgia'],
      display: ['Oswald'],
      body: ['"Roboto Condensed"'],
    },
  },
  plugins: [],
}
