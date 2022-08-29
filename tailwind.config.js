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
