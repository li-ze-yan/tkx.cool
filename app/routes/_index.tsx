import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { CanvasLoader, SafeZone } from "~/components";
import { cons_base_header } from "~/constants";

export const meta: MetaFunction = () => {
  return [
    { title: "tkx.cool" },
    { name: "description", content: "Welcome to tkx.cool!" },
    { viewport: "width=device-width, initial-scale=1" },
    { charset: "utf-8" },
  ];
};

const Computers = () => {
  const computer = useGLTF("/model/junkrat/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[0, 100, 100]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={2.5}
        position={[-2, -2.2, 0]}
        rotation={[-0.01, 1.2, -0.1]}
      />
    </mesh>
  );
};

export default function Index() {
  const navigate = useNavigate();
  const { menu } = cons_base_header;
  return (
    <div className="w-full">
      <div className="absolute inset-0 bg-hero-pattern bg-center bg-cover bg-no-repeat bg-slate-50 -z-10">
        <div
          className="absolute inset-0 bg-grid-slate-900/[0.04] bg-top-pattern"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
          }}
        ></div>
      </div>
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
      <motion.div
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
        className="flex justify-center items-center gap-4 mt-12"
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
      </motion.div>

      {/* <div className="w-full h-[50vh] relative z-0 text-white mt-10">
        <video
          src="/video/jb.mp4"
          muted
          loop
          className="z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full object-cover h-full rounded-2xl"
        />
      </div> */}
      <div className="flex justify-center items-center">
        <div style={{ width: 800, height: 800 }}>
          <Canvas
            frameloop="demand"
            // shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
              <Computers />
            </Suspense>
            <Preload all />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
