/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        primary: '#232325',
      },
      fontFamily: {
        rcomfortaa: [ "Comfortaa-Regular" , "sans-serif" ],
        bcomfortaa: [ "Comfortaa-Bold" , "sans-serif" ],
        rInter: ["Inter-Regular", "sans-serif"], //400
        mInter: ["Inter-Medium", "sans-serif"], //500
        sbInter: ["Inter-SemiBold", "sans-serif"], //600
        bInter: ["Inter-Bold", "sans-serif"], //700
        ebInter: ["Inter-ExtraBold", "sans-serif"], //800
        chivo: ["Chivo-Regular", "sans-serif"]
      }
    },
  },
  plugins: [],
}