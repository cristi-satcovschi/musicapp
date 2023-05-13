/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  // @ts-ignore
  // presets: [require("@acme/tailwind-config")],

  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};

module.exports = config;
