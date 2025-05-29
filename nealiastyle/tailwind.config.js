/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        "primary-pressed": "var(--primary-pressed)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        error: "var(--error)",
        success: "var(--success)",
        warning: "var(--warning)",
      },
    },
  },
  plugins: [],
}

