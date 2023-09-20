import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLocation,
  useOutlet,
} from "@remix-run/react";
import styles from "./tailwind.css";
import { BaseFooter, BaseHeader } from "./components";
import { AnimatePresence, motion } from "framer-motion";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  const outlet = useOutlet();
  const location = useLocation();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="px-4 sm:px-6 md:px-8 min-h-screen relative z-0">
        <div className="w-full h-full">
          <BaseHeader />
          <AnimatePresence mode="wait">
            <motion.main
              key={location?.pathname}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4, type: "tween" }}
              layout
            >
              {outlet}
            </motion.main>
          </AnimatePresence>
          <BaseFooter />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
