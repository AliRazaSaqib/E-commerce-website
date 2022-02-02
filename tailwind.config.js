/** @format */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
