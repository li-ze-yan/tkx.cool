import { useNavigate } from "@remix-run/react";
import clsx from "clsx";
import type { Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { cons_base_header } from "~/constants";
import type { IOptions } from "~/types";

const BaseHeader = () => {
  const { menu, githubLink } = cons_base_header;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <header className="relative z-10 w-full pt-6 pb-20 sm:pb-24 lg:pb-32 lg:pt-8 flex items-center justify-between font-semibold text-sm leading-6">
      <div
        className="flex gap-1 items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src="/img/common/icon.svg" alt="coffee" className="w-10" />
        <span className="leading-none text-lg mt-[6px] font-bold">
          Vector.cool
        </span>
      </div>
      {/* pc 菜单 */}
      <div className="lg:flex hidden gap-10 items-center">
        {menu.map((_: IOptions, index: number) => (
          <p
            key={`menu_${index}`}
            className={twMerge("flex gap-1 cursor-pointer link-underline")}
            onClick={() => navigate(_.value)}
          >
            <motion.span
              animate={{
                rotate: [0, -10, 10, -10, 10, 0],
                transformOrigin: "center",
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            >
              {_.emoji}
            </motion.span>
            <span className="font-bold">{_.label}</span>
          </p>
        ))}
        <div className="border-l border-slate-200">
          <a
            href={`${githubLink}`}
            className="ml-6 block text-slate-400 hover:text-slate-500"
          >
            <span className="sr-only">Lizeyan on GitHub</span>
            <svg
              viewBox="0 0 16 16"
              className="w-5 h-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </div>
      </div>
      {/* mobile 菜单 */}
      <motion.nav
        initial={false}
        animate={open ? "open" : "closed"}
        className="lg:hidden block"
      >
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-slate-500 w-8 h-8 items-center justify-center hover:text-slate-600 lg:hidden flex"
        >
          <svg width="24" height="24" fill="none" aria-hidden="true">
            <path
              d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 6px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 6px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                },
              },
            }}
            className={clsx(
              open ? "pointer-events-auto" : "pointer-events-none",
              "fixed z-20 bg-white w-[80vw] right-4 top-4 p-4 grid grid-cols-1 gap-3"
            )}
          >
            {menu.map((_: IOptions, index: number) => (
              <motion.li
                key={`mobile_menu_${index}`}
                className="flex justify-between items-center col-span-1"
                variants={itemVariants}
                animate={open ? "open" : "closed"}
              >
                <p
                  onClick={() => {
                    setOpen(false);
                    navigate(_.value);
                  }}
                  className="flex gap-5"
                >
                  <motion.div
                    animate={{
                      rotate: [0, -10, 10, -10, 10, 0],
                      transformOrigin: "center",
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                  >
                    {_.emoji}
                  </motion.div>
                  {_.label}
                </p>
                {!index && (
                  <button
                    type="button"
                    className="w-8 h-8 flex items-center justify-center"
                    onClick={() => setOpen(false)}
                  >
                    <svg
                      viewBox="0 0 10 10"
                      className="w-2.5 h-2.5 overflow-visible"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 0L10 10M10 0L0 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </button>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </button>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={{
              open: {
                opacity: 1,
              },
              closed: {
                opacity: 0,
              },
            }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-10 bg-black/10 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export { BaseHeader };
