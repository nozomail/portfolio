import { motion } from "framer-motion";
import Link from "next/link";

import { header, icon } from "../utils/framerMotion";

const menu = [
  {
    name: "Home",
    path: "/",
    color: "#FDE047",
  },
  {
    name: "About",
    path: "/about",
    color: "#67E8F9",
  },
  {
    name: "Work",
    path: "/work",
    color: "#6EE7B7",
  },
  {
    name: "Contact",
    path: "/contact",
    color: "#F9A8D4",
  },
];

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between sm:justify-start px-4 md:px-8 py-2 md:py-4">
      <div className="flex">
        <a className="flex-shrink-0 flex content-center" href="https://github.com/nozomail" target="_blank">
          <motion.img whileHover={icon} whileTap={icon} className="w-5" src="/github.svg" alt="GitHub" />
        </a>
        <a
          className="flex-shrink-0 flex content-center ml-4"
          href="https://www.linkedin.com/in/nozomi-mail"
          target="_blank"
        >
          <motion.img whileHover={icon} whileTap={icon} className="w-4" src="/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
      <nav className="w-64 sm:w-96 flex justify-between text-white ml-14">
        {menu.map((item, i) => (
          <Link href={item.path} key={i}>
            <motion.span whileHover={header(item.color)} whileTap={header(item.color)} className="cursor-pointer">
              {item.name}
            </motion.span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
