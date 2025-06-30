/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // App Router 配下
    "./pages/**/*.{js,ts,jsx,tsx}", // pages/ を使っていれば
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: { extend: {} },
  plugins: []
};
