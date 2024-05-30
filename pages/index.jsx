import PagesMetaHead from "../components/PagesMetaHead";
import AboutCounter from "../components/about/AboutCounter";
import AppBanner from "../components/shared/AppBanner";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <PagesMetaHead title="Home" />

        <AppBanner />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
      >
        <AboutCounter />
      </motion.div>
    </div>
  );
}
