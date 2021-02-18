import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SpinIcon from "../components/spinIcon";
import { variants, contact, form, glowBtn, btn } from "../utils/framerMotion";

export default function Contact() {
  const formRef = useRef(null);
  const [isSebmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(formRef.current);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setIsSubmitted(true);
      })
      .catch(() => {
        setIsError(true);
      })
      .then(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={contact.exit}
      className="min-h-full sm:min-h-none sm:h-full flex items-center"
    >
      <Head>
        <title>Contact | Nozomi Mail</title>
      </Head>
      <AnimatePresence exitBeforeEnter>
        {isSubmitted ? (
          <motion.div key="1" variants={variants.staggerDelayed} className="text-center mx-auto">
            <motion.div
              variants={variants.springInUp}
              className="font-display text-2xl sm:text-3xl md:text-4xl text-white text-shadow-sw text-center"
            >
              <span className="block">Thank you for contacting me.</span>
              <span className="block mt-2 sm:mt-4 md:mt-6">I will get back to you soon!</span>
            </motion.div>
            <motion.button
              variants={variants.springInUp}
              whileHover={glowBtn}
              whileTap={glowBtn}
              className="text-white border border-white rounded-full py-2 px-4 mt-8"
            >
              <Link href="/">Go back Home</Link>
            </motion.button>
          </motion.div>
        ) : (
          <div key="2" className="w-full h-lg sm:h-auto relative">
            <motion.form
              initial={form.initial}
              animate={form.animate}
              exit={form.exit}
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="w-lg h-lg sm:w-full sm:h-full flex flex-col justify-center items-center text-gray-600 bg-cloud bg-center bg-contain bg-no-repeat absolute sm:static left-1/2 transform -translate-x-1/2 sm:transform-none">
                <div className="w-full max-w-xs md:max-w-sm lg:max-w-md py-16 sm:py-20 md:py-24 px-10 mx-auto">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 md:mb-12">
                    Send Nozomi a Message
                  </h1>

                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="w-full h-10 border-b border-gray-300 focus:border-teal-500"
                    />
                  </div>

                  <div className="mt-4 md:mt-8">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full h-10 border-b border-gray-300 focus:border-teal-500"
                    />
                  </div>

                  <div className="pt-2 mt-4 md:mt-8">
                    <textarea
                      name="message"
                      placeholder="Message"
                      required
                      className="block w-full h-24 sm:h-32 border-b border-gray-300 focus:border-teal-500 resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={btn}
                    whileTap={btn}
                    className={`${
                      isSebmitting ? "pointer-events-none" : ""
                    } w-full max-w-xs flex items-center justify-center h-12 text-white font-bold tracking-wider rounded-md bg-gradient-to-r from-teal-500 to-lightBlue-500 mt-8 transition-opacity focus:opacity-50 mx-auto`}
                  >
                    {isSebmitting && <SpinIcon />}
                    Send
                  </motion.button>

                  {isError && (
                    <p className="max-w-xs text-rose-600 leading-tight mt-2 mx-auto">Sorry, please try again.</p>
                  )}
                </div>
              </div>
            </motion.form>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
