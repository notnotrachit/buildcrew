/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'lvoilet': '#36104C',
      'lblue': '#00C6F4',
      'gattention1': '#FDC506',
      'gattention2': '#882EFF',
      'gattention3': '#FF04C8',
      'postive': '#9FFE00',
      'pending': '#CCABE1',
    },
  },
  plugins: [require("daisyui")],
}

