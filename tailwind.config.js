const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    container: {
      padding: {
        default: '2rem',
        lg: '5rem'
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
