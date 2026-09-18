/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        ice: "#F7FAF8",
        "green-darkest": "#003527",
        "green-dark": "#004D36",
        "green-primary": "#18B85B",
        "green-light": "#7BE35B",
        "green-soft": "#EAF8EF",
        "green-mist": "#F3FBF6",
        ink: "#063B32",
        muted: "#64748B",
        line: "#E4EFE8",
      },
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Plus Jakarta Sans",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(6, 59, 50, 0.10)",
        card: "0 20px 45px -20px rgba(6, 59, 50, 0.12)",
        glow: "0 30px 80px -20px rgba(24, 184, 91, 0.35)",
        ring: "0 0 0 1px rgba(24, 184, 91, 0.15)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "green-gradient":
          "linear-gradient(135deg, #18B85B 0%, #12A050 55%, #0E8A44 100%)",
        "mist-gradient":
          "linear-gradient(180deg, #FFFFFF 0%, #F3FBF6 60%, #EAF8EF 100%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        pulseRing: "pulseRing 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};
