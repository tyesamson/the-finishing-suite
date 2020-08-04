const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {
      sans: [
        'Open Sans',
        ...defaultTheme.fontFamily.mono
      ]
    }
  }
}
