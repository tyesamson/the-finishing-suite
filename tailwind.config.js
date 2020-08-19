const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: [
      './site/**/*.html',
      './site/**/*.njk',
    ]
  },
  theme: {
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
