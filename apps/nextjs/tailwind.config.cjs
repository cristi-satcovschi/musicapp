/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  // @ts-ignore
  // presets: [require("@acme/tailwind-config")],

  theme: {
    extend: {
      colors: {
        primary: "#F2F2F2",
      },
      boxShadow: {
        neumorphic:
          "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};

module.exports = config;
