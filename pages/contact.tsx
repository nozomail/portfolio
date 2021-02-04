import { useRef, useState } from "react";
import Layout from "../components/layout";

export default function Contact() {
  const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
      });
  }

  return (
    <Layout pageTitle="Contact">
      <div className={`${isSubmitted ? "animate-messageSent" : ""}`}>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center text-gray-600 bg-cloud bg-center bg-cover sm:bg-contain bg-no-repeat mx-auto"
        >
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

            <div className="text-center">
              <button
                type="submit"
                className="w-full max-w-xs h-12 text-white font-bold tracking-wider rounded-md bg-gradient-to-r from-teal-500 to-lightBlue-500 mt-8 transform transition-transform focus:outline-none focus:scale-90"
              >
                Send
              </button>
            </div>

            {isError && (
              <p className="max-w-xs text-rose-600 leading-tight mt-2 mx-auto">
                Something went wrong. please try again.
              </p>
            )}
          </div>
        </form>
      </div>

      <div
        className={`flex flex-col items-center justify-center font-display text-2xl sm:text-3xl md:text-4xl text-shadow-sw text-center absolute inset-0 pointer-events-none transition-opacity delay-300 duration-1000 ${
          isSubmitted ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="block">Thank you for contacting me.</span>
        <span className="block mt-2 sm:mt-4 md:mt-6">I will get back to you soon!</span>
      </div>
    </Layout>
  );
}
