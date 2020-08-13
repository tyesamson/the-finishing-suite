const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
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
