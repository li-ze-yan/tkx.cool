import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SafeZone } from "~/components";
import { cons_base_header } from "~/constants";

export const meta: MetaFunction = () => {
  return [
    { title: "tkx.cool" },
    { name: "description", content: "Welcome to tkx.cool!" },
    { viewport: "width=device-width, initial-scale=1" },
    { charset: "utf-8" },
  ];
};

export default function Index() {
  const navigate = useNavigate();
  const windowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: windowRef,
  });
  const rotateX = useTransform(scrollYProgress, [0.18, 1], [0, -90], {
    ease: easeOut,
  });
  const { menu } = cons_base_header;
  return (
    <section className="w-full min-h-screen" ref={windowRef}>
      <section>
        <section className="absolute lg:h-[137vh] h-[90vh] inset-0 bg-hero-pattern bg-center bg-cover bg-no-repeat bg-slate-50">
          <div
            className="absolute inset-0 bg-grid-slate-900/[0.04] bg-top-pattern"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
            }}
          ></div>
        </section>
        <SafeZone>
          <motion.div
            variants={{
              show: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                  when: "beforeChildren",
                  delayChildren: 0.5,
                  staggerChildren: 0.5,
                  delay: 1,
                },
              },
              hidden: {
                opacity: 0,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                  when: "beforeChildren",
                  delayChildren: 0.5,
                  staggerChildren: 0.5,
                  delay: 1,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="capitalize lg:text-5xl text-2xl text-center leading-snug relative z-0 before:absolute before:bg-icon-before-pattern before:bg-no-repeat before:bg-contain before:-top-12 before:right-10 before:w-[159px] before:h-[212px] before:-z-10 after:absolute after:-z-10 after:bg-icon-after-pattern  after:bg-no-repeat after:bg-contain after:-top-9 after:left-2 after:w-[159px] after:h-[212px] select-none"
          >
            <motion.h1
              variants={{
                show: {
                  opacity: 1,
                  y: 0,
                },
                hidden: {
                  opacity: 0,
                  y: -20,
                },
              }}
            >
              Never accept the world as it to be
            </motion.h1>
            <motion.h1
              variants={{
                show: {
                  opacity: 1,
                  y: 0,
                },
                hidden: {
                  opacity: 0,
                  y: -20,
                },
              }}
              className="mt-3"
            >
              always dare to see it what it could be.
            </motion.h1>
          </motion.div>
        </SafeZone>
        <motion.section
          variants={{
            show: {
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
                delay: 1,
              },
            },
            hidden: {
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: "easeOut",
                delay: 1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          animate="show"
          className="flex justify-center items-center gap-4 mt-12 relative z-10"
        >
          <motion.button
            variants={{
              shake: {},
              push: {
                scale: [1, 0.9, 0.85],
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              },
            }}
            whileHover="shake"
            whileTap={["push", "shake"]}
            className="inline-flex justify-center rounded-lg font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 transition-all duration-300 ease-linear"
            onClick={() => navigate(`${menu[0].value}`)}
          >
            <div className="text-sm flex gap-1">
              <motion.div
                variants={{
                  shake: {
                    rotate: [0, -10, 10, -10, 10, 0],
                    transformOrigin: "center",
                  },
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              >
                👻
              </motion.div>
              认识我 ~
            </div>
          </motion.button>
          <motion.button
            variants={{
              finger: {},
              push: {
                scale: [0.95, 0.9, 0.85],
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              },
            }}
            whileHover="finger"
            whileTap={["push", "finger"]}
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 transition-all duration-300 ease-linear"
            onClick={() => navigate(`${menu[1].value}`)}
          >
            <div className="flex gap-1">
              开始使用
              <motion.div
                variants={{
                  finger: {
                    x: [0, 10, 0],
                    transition: {
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  },
                }}
                className="sm:inline"
              >
                👉
              </motion.div>
            </div>
          </motion.button>
        </motion.section>
      </section>
      {/* 首页翻转的DOM */}
      <motion.section
        style={{
          rotateX,
          transformPerspective: 2000,
        }}
        className="border-2 border-[#f0f0f0] border-solid rounded-xl max-w-screen-2xl mx-auto mt-10 shadow-rounded hover:shadow-hover-rounded transition-shadow duration-300 ease-smooth bg-transparent relative z-10 box-border p-2 sm:p-4 md:p-6 group/change origin-[top_center]"
      >
        <div className="flex justify-between items-center">
          <ul className="flex lg:gap-2 gap-1 group">
            <li className="lg:w-[12px] w-[10px] lg:h-[12px] h-[10px] border border-black/20 rounded-full relative">
              <span className="absolute top-0 left-0 w-full h-full rounded-full bg-[#F36C5F] opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-linear"></span>
            </li>
            <li className="lg:w-[12px] w-[10px] lg:h-[12px] h-[10px] border border-black/20 rounded-full relative">
              <span className="absolute top-0 left-0 w-full h-full rounded-full bg-[#F8BD4D] opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-linear"></span>
            </li>
            <li className="lg:w-[12px] w-[10px] lg:h-[12px] h-[10px] border border-black/20 rounded-full relative">
              <span className="absolute top-0 left-0 w-full h-full rounded-full bg-[#53C14F] opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-linear"></span>
            </li>
          </ul>
          <ul className="flex lg:gap-3 gap-1">
            <li className="lg:p-3 p-2 shadow-more-inner border-black/20 lg:rounded-xl rounded-full hover:scale-110 transition-transform duration-300 ease-linear cursor-pointer">
              <img
                src="/img/common/lightning.svg"
                alt=""
                className="lg:w-4 w-3 lg:h-4 h-3"
              />
            </li>
            <li className="lg:p-3 p-2 shadow-more-inner border-black/20 lg:rounded-xl rounded-full hover:scale-110 transition-transform duration-300 ease-linear cursor-pointer">
              <img
                src="/img/common/font.svg"
                alt=""
                className="lg:w-4 w-3 lg:h-4 h-3"
              />
            </li>
            <li className="lg:p-3 p-2 shadow-more-inner border-black/20 lg:rounded-xl rounded-full hover:scale-110 transition-transform duration-300 ease-linear cursor-pointer">
              <img
                src="/img/common/picture.svg"
                alt=""
                className="lg:w-4 w-3 lg:h-4 h-3"
              />
            </li>
            <li className="lg:p-3 p-2 shadow-more-inner border-black/20 lg:rounded-xl rounded-full hover:scale-110 transition-transform duration-300 ease-linear cursor-pointer">
              <img
                src="/img/common/folder.svg"
                alt=""
                className="lg:w-4 w-3 lg:h-4 h-3"
              />
            </li>
          </ul>
          <div className="pr-6">
            <ul className="flex relative">
              <div className="relative lg:translate-x-[24px] translate-x-[20px] group-hover/change:-translate-x-0 transition-transform duration-300 ease-linear">
                <li className="lg:w-[30px] w-[24px] lg:h-[30px] lg:flex hidden h-[24px] absolute top-0 left-0 -translate-y-1/2 -translate-x-[320%] z-10 text-xs bg-[#a088cc] rounded-full text-white justify-center items-center border-2 border-white border-solid">
                  J
                </li>
                <li className="lg:w-[30px] w-[24px] lg:h-[30px] h-[24px] lg:flex hidden absolute top-0 left-0 -translate-y-1/2 -translate-x-[240%] z-20 text-xs bg-[#7155ff] rounded-full text-white justify-center items-center border-2 border-white border-solid">
                  M
                </li>
                <li className="lg:w-[30px] w-[24px] lg:h-[30px] h-[24px] absolute top-0 left-0 -translate-y-1/2 -translate-x-[160%] z-30 text-xs bg-[#4295ff] rounded-full text-white flex justify-center items-center border-2 border-white border-solid">
                  S
                </li>
                <li className="lg:w-[30px] w-[24px] lg:h-[30px] h-[24px] absolute top-0 left-0 -translate-y-1/2 -translate-x-[80%] z-40 text-xs bg-[#30ba70] rounded-full text-white flex justify-center items-center border-2 border-white border-solid">
                  Y
                </li>
              </div>
              <li className="lg:w-[30px] w-[24px] lg:h-[30px] h-[24px] absolute top-0 left-0 -translate-y-1/2 z-50 rounded-full text-base flex justify-center items-center text-black leading-none bg-white border border-black/20 border-solid">
                +
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:hidden grid grid-cols-1">
          <div className="cols-span-1 w-full border-2 border-[#f0f0f0] border-solid rounded-lg shadow-rounded mt-3 px-2 py-2 flex items-center">
            <ul className="grid grid-cols-2 w-4 h-2">
              <li className="col-span-1 grid place-items-center leading-none">
                <span className="w-[2px] h-[2px] bg-black rounded-full mb-[2px]" />
              </li>
              <li className="col-span-1 grid place-items-center leading-none">
                <span className="w-[2px] h-[2px] bg-black rounded-full mb-[2px]" />
              </li>
              <li className="col-span-1 grid place-items-center leading-none">
                <span className="w-[2px] h-[2px] bg-black rounded-full mb-[2px]" />
              </li>
              <li className="col-span-1 grid place-items-center leading-none">
                <span className="w-[2px] h-[2px] bg-black rounded-full mb-[2px]" />
              </li>
              <li className="col-span-1 grid place-items-center leading-none">
                <span className="w-[2px] h-[2px] bg-black rounded-full" />
              </li>
              <li className="col-span-1 grid place-items-center leading-none">
                <span className="w-[2px] h-[2px] bg-black rounded-full" />
              </li>
            </ul>
            <span className="pl-2">前端/设计/动效</span>
          </div>
          <div className="col-span-1 mt-4 border-2 border-[#f0f0f0] border-solid rounded-lg shadow-rounded overflow-hidden">
            <video
              src="/video/jb.mp4"
              autoPlay
              controls={false}
              muted
              loop
              x5-playsinline="true"
              playsInline
              webkit-playsinline="true"
              className="w-full h-full object-cover"
            ></video>
          </div>
        </div>
        <div className="w-full lg:flex hidden lg:gap-2 gap-0 shadow-rounded p-2 sm:p-4 md:p-12 bg-transparent rounded-xl mt-6">
          {/* left */}
          <div className="lg:w-2/5 w-0 pt-28 pb-40">
            <motion.p
              className="bg-[#7053ff] rounded-full text-white px-5 p-1 inline-block"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  ease: [0.215, 0.61, 0.355, 1.0],
                  delay: 1,
                },
              }}
            >
              ✨&nbsp;打造一个独一无二的个人网站，彰显个性与风采&nbsp;✨
            </motion.p>
            <p className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#13547a] to-[#80d0c7] tracking-widest my-8 ">
              以卓越之力量散发深远的影响
            </p>
            <p className="text-sm tracking-widest text-[#787878]">
              打造一个属于自己的独特网站，是一次充满创意与潜力的冒险，网站不仅仅是一个虚拟的存在，更是你自我表达和展示的窗口，一个数字化的身份证明，也是一个展示你的影响力和专业能力的平台，通过在网站上提供有价值的内容，你可以吸引更多的人关注你的领域，建立起你在该领域的声誉和影响力，总之，打造一个属于自己的网站是一个有趣且具有潜力的项目，它不仅可以让你实现自我表达，还可以成为展示你的独特价值和影响力的强大工具。精心设计和管理你的网站，将为你的个人和职业生涯带来更多机会和成就！
            </p>
          </div>
          {/* right */}
          <div className="lg:w-3/5 w-full flex justify-center items-center lg:text-base text-sm">
            <div className="w-full h-5/6">
              <div className="w-full border-2 border-[#f0f0f0] border-solid rounded-lg shadow-rounded px-4 py-3 flex items-center">
                <ul className="grid grid-cols-2 w-6 h-4">
                  <li className="col-span-1 grid place-items-center leading-none">
                    <span className="w-[2px] h-[2px] bg-black rounded-full mb-[4px]" />
                  </li>
                  <li className="col-span-1 grid place-items-center leading-none">
                    <span className="w-[2px] h-[2px] bg-black rounded-full mb-[4px]" />
                  </li>
                  <li className="col-span-1 grid place-items-center leading-none">
                    <span className="w-[2px] h-[2px] bg-black rounded-full mb-[4px]" />
                  </li>
                  <li className="col-span-1 grid place-items-center leading-none">
                    <span className="w-[2px] h-[2px] bg-black rounded-full mb-[4px]" />
                  </li>
                  <li className="col-span-1 grid place-items-center leading-none">
                    <span className="w-[2px] h-[2px] bg-black rounded-full" />
                  </li>
                  <li className="col-span-1 grid place-items-center leading-none">
                    <span className="w-[2px] h-[2px] bg-black rounded-full" />
                  </li>
                </ul>
                <span className="pl-2">前端/设计/动效</span>
              </div>
              <div className="w-full h-full mt-5 border-2 border-[#f0f0f0] border-solid rounded-lg shadow-rounded overflow-hidden">
                <video
                  src="/video/jb.mp4"
                  autoPlay
                  controls={false}
                  muted
                  loop
                  x5-playsinline="true"
                  playsInline
                  webkit-playsinline="true"
                  className="w-full h-full object-cover"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <section className="w-full h-screen">haha</section>
    </section>
  );
}
