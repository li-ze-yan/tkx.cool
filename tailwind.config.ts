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
        rebound: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        rebound: "rebound 1s ease-in-out",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/common/bg.jpg')",
        "top-pattern": "url('/img/common/bgTop.svg')",
        "icon-before-pattern": "url('/img/common/titleIconBefore.svg')",
        "icon-after-pattern": "url('/img/common/titleIconAfter.svg')",
      },
      boxShadow: {
        "hover-rounded":
          "0 6px 16px -8px #00000014, 0 9px 28px #0000000d, 0 12px 48px 16px #00000008",
        rounded:
          "0 3px 8px -4px #0000000a, 0 4.5px 14px #00000007, 0 6px 24px 8px #00000004",
        "more-inner":
          "inset 0 2px 4px 0 rgb(0 0 0 / 0.05), 0 4px 8px 0 rgb(0 0 0 / 0.1)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.215,0.610,0.355,1.000)",
      },
      cursor: {
        fancy: "url(/img/common/cursor.cur), pointer",
      },
    },
  },
  plugins: [],
} satisfies Config;
