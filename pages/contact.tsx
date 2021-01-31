import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout pageTitle="Contact">
      <form className="w-full max-w-lg sm:max-w-xl md:max-w-2xl flex flex-col justify-center items-center text-gray-600 bg-cloud bg-center bg-cover sm:bg-contain bg-no-repeat mx-auto">
        <div className="w-full max-w-xs md:max-w-sm py-16 sm:py-20 md:py-24 px-10 mx-auto">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 md:mb-12">
            Send Nozomi a Message
          </h1>
          <div>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full h-10 border-b border-gray-300 focus:border-teal-500"
            />
          </div>

          <div className="mt-4 md:mt-8">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full h-10 border-b border-gray-300 focus:border-teal-500"
            />
          </div>

          <div className="pt-2 mt-4 md:mt-8">
            <textarea
              placeholder="Message"
              required
              className="block w-full h-24 sm:h-32 border-b border-gray-300 focus:border-teal-500 resize-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full max-w-xs h-12 text-white font-bold tracking-wider rounded-md bg-gradient-to-r from-teal-500 to-lightBlue-500 mt-8"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
}
