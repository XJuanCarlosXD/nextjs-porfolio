import { motion } from "framer-motion";
import AboutClients from "../components/about/AboutClients";
import AboutCounter from "../components/about/AboutCounter";
import AboutMeBio from "../components/about/AboutMeBio";
import PagesMetaHead from "../components/PagesMetaHead";
import { clientsData, clientsHeading } from "../data/clientsData";
import { dataKill, KillsHeading } from "../data/killHability";

function about() {
  return (
    <div>
      <PagesMetaHead title="About Me" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutMeBio />
      </motion.div>

      {/** Counter without paddings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
      >
        <AboutCounter />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutClients data={clientsData} title={clientsHeading} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutClients data={dataKill} title={KillsHeading} />
      </motion.div>
    </div>
  );
}

export default about;
