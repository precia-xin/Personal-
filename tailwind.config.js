/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // 如果你的入口HTML在这里
    "./src/**/*.{vue,js,ts,jsx,tsx}", // ⚠️ 关键！扫描src目录下所有.vue, .js, .ts等文件
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}