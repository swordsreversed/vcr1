/** @type {import('tailwindcss').Config} */
export default {
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
  theme: {
    colors: {
      pblue: '#052E5E',
      porange: '#FF8200',
      pmint: '#BDE8C9',
      white: '#FFFFFF',
      sblue: '#004C97',
      pred: '#b13841',
	plightblue: '#e2ebf5',
	    tblue: '#1d3655',
      grey: 'grey',
    },
    backgroundColor: {
      pblue: '#052E5E',
      white: '#FFFFFF',
      pmint: '#BDE8C9',
      porange: '#FF8200',
      grey: '#eee',
      dblue: '#0a2245',
	plightblue: '#e2ebf5'
    },
    borderColor: {
      pblue: '#052E5E',
      white: '#FFFFFF',
      pmint: '#BDE8C9',
      sblue: '#004C97',
      grey: '#eee',
    },
    extend: {},
  },
  plugins: [
	
  ],
};
