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
      boxShadow: {
        rounded:
          "0 6px 16px -8px #00000014, 0 9px 28px #0000000d, 0 12px 48px 16px #00000008",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.215,0.610,0.355,1.000)",
      },
    },
  },
  plugins: [],
} satisfies Config;
