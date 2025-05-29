/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        primary: "hsl(var(--primary))",
        "primary-hover": "hsl(var(--primary-hover))",
        "primary-pressed": "hsl(var(--primary-pressed))",
        secondary: "hsl(var(--secondary))",
        tertiary: "hsl(var(--tertiary))",
        error: "hsl(var(--error))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
      },
    },
  },
  plugins: [],
}

