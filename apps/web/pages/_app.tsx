import { motion } from "framer-motion";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../stores/AuthContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
      className="bg-white dark:bg-black"
    >
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </motion.div>
  );
}

export default MyApp;
