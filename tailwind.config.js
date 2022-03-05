const colorGen = require('tailwind-color-generator');

module.exports = {
  content: [
    './{pages,components,lib,hooks}/**/*.{html,js,jsx}',
    // './pages/**/*.{html,js,jsx}',
    // './components/**/*.{html,js,jsx}',
    // './{pages,components,lib,hooks}/**/*.{html,js,jsx}',
    // './{pages,components,lib,hooks}/**/*.{html,js,jsx}',
    // './{pages,components,lib,hooks}/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
        height: 'height',
        margin: 'margin',
      },
      width: (theme) => ({
        'screen/2': '50vw',
        'screen/3': 'calc(100vw / 3)',
        'screen/4': 'calc(100vw / 4)',
        'screen/5': 'calc(100vw / 5)',
      }),
      height: (theme) => ({
        'screen/2': '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
      }),
      backgroundSize: {
        'size-200': '200% 200%',
        'size-100': '100% 100%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-50': '50% 50%',
        'pos-100': '100% 100%',
      },
      boxShadow: {
        inset: '5px 1000px 1px #fff inset',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      // colors: {
      //   primary: '#e85e6d',
      //   // secondary: '#8ec7d4',
      //   // secondary: '#f8ba62',
      //   secondary: '#e5e698',
      // },
      fontFamily: {
        // sans: ['Baskerville', 'sans-serif'],
        // sans: ['Archivo', 'sans-serif'],
        // sans: ['MerriWeather', 'serif'],
        // font-family: 'Monda', sans-serif;
        // sans: ['Monda', 'serif'],
        // sans: ['Nunito', 'sans-serif'],
        sans: ['Quicksand', 'sans-serif'],
        // sans: ['Nunito', 'sans-serif'],
        // sans: ['Varela Round', 'sans-serif'],
        // sans: ['Horta', 'serif'],
        // sans: ['Oatmeal Stout', 'sans-serif'],
        // serif: ['Merriweather', 'serif'],
        // serif: ['K2D', 'sans-serif'],
        // serif: ['Quicksand', 'sans-serif'],
        serif: ['Nunito', 'sans-serif'],
        // Colus: ['Colus', 'sans-serif'],
      },
    },
  },
  plugins: [
    colorGen('primary', '0cd9e3'),
    // colorGen("primary", "#A06AB4"),
    // colorGen('secondary', '#e5e698'),
    colorGen('secondary', 'bf4387'),
    //
  ],
};
