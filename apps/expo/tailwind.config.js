/** @type {import("tailwindcss").Config} */
const nativewind = require("nativewind/tailwind");
const customConfig = require("@acme/tailwind-config");

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [customConfig, nativewind],

  theme: {
    extend: {},
  },
};
