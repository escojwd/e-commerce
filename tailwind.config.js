module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#e9204f',
        secondary: '#1b1b1b',
        third: '#f3f3f3',
        fourth: '#161616',
      },
      fontFamily: {
        mainFont: ['Montserrat']
      },
      width: {
        container: '65%',
        customOne: '40rem',
        customTwo: '27rem',
        customThree: '37%',
        customFour: '100rem',
      },
      height: {
        customHOne: '37.5rem',
        customHTwo: '40rem',
      },
      backgroundSize: {
        '65%' : '65%',
      },
      padding: {
        '14px' : '0.875rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
