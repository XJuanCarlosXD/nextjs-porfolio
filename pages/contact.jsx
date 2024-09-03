import { motion } from "framer-motion";
import ContactDetails from "../components/contact/ContactDetails";
import PagesMetaHead from "../components/PagesMetaHead";
import { RiTelegramLine, RiWhatsappLine } from "react-icons/ri";

function contact() {
  return (
    <div>
      <PagesMetaHead title="Contact" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
        className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5 mb-96"
      >
        <ContactDetails />
        <div>
          <a
            href="https://t.me/XjuancarlosXD"
            target="_blank"
            className="font-general-medium text-center text-4xl bg-sky-500 hover:bg-sky-600 text-white shadow-sm rounded-sm px-4 py-4 mt-2 duration-300 flex gap-2 justify-center items-center"
            aria-label="Hire Me Button"
            rel="noreferrer"
          >
            <RiTelegramLine /> Telegram
          </a>
          <a
            href="https://wa.me/+18297557294"
            target="_blank"
            className="font-general-medium text-center text-4xl bg-green-500 hover:bg-green-600 text-white shadow-sm rounded-sm px-4 py-4 mt-2 duration-300 flex gap-2 justify-center items-center"
            aria-label="Hire Me Button"
            rel="noreferrer"
          >
            <RiWhatsappLine /> Whatsapp
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default contact;
