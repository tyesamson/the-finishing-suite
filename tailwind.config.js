const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: [
      './site/**/*.html',
      './site/**/*.njk',
    ]
  },
  theme: {
    extend: {
      colors: {
        black: '#111111',
        white: '#e6e6dc',
        red: '#cf2525'
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      }
    },
    fontFamily: {
      serif: [
        'Vollkorn',
        ...defaultTheme.fontFamily.serif
      ],
      sans: [
        'Open Sans',
        ...defaultTheme.fontFamily.sans
      ]
    }
  }
}
