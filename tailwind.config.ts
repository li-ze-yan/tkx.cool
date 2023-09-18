import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/common/bg.jpg')",
        "top-pattern": "url('/img/common/bgTop.svg')",
        "icon-before-pattern": "url('/img/common/titleIconBefore.svg')",
        "icon-after-pattern": "url('/img/common/titleIconAfter.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
