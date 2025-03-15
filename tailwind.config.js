module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      sans: ['Inter', 'sans-serif'],
    },
    container: {
     
    },
    extend: {
      colors: {
        primary: '#101828',
        secondary: '#7F56D9',
      },
      boxShadow: {
        1: '0px 4px 30px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
