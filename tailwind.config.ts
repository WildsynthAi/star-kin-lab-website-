import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sk-black": "#050810",
        "sk-dark": "#080d1a",
        "sk-card": "#0d1425",
        "sk-border": "#1a2540",
        "sk-blue": "#1a6fff",
        "sk-blue-light": "#4d8fff",
        "sk-blue-glow": "#0047cc",
        "sk-cyan": "#00d4ff",
        "sk-white": "#f0f4ff",
        "sk-muted": "#8899bb",
      },
      fontFamily: {
        display: ["'Rajdhani'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(26,111,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,111,255,0.03) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(26,111,255,0.15) 0%, transparent 60%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(26,111,255,0.08) 0%, rgba(0,212,255,0.03) 100%)",
        "blue-glow":
          "radial-gradient(circle at center, rgba(26,111,255,0.2) 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      boxShadow: {
        "blue-sm": "0 0 20px rgba(26,111,255,0.15)",
        "blue-md": "0 0 40px rgba(26,111,255,0.2)",
        "blue-lg": "0 0 80px rgba(26,111,255,0.25)",
        card: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "scan-line": "scanLine 3s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
