import Layout from "../components/layout";
import Header from "../components/header";

export default function Home() {
  return (
    <Layout>
      <Header />
      <div className="flex flex-col justify-center items-end font-display text-white text-shadow-md absolute inset-y-0 left-1/2 portrait:bottom-1/4 portrait:transform portrait:-translate-x-1/2 landscape:left-1/7 sm:left-1/7 2xl:left-1/7 z-20">
        <h1 className="text-7xl md:text-8xl lg:text-9xl 2xl:text-10xl font-bold tracking-wider text-right mb-2">
          Nozomi
          <br />
          Mail
        </h1>
        <div className="text-lg md:text-2xl lg:text-3xl 2xl:text-4xl text-right tracking-widest pr-2">
          Front-End Developer
        </div>
      </div>
      <div className="g_rocket"></div>
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-rose-600 to-white absolute top-1/7 left-1/10 landscape:left-2 sm z-10"></div>
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-rose-600 to-white absolute bottom-1/4 md:bottom-1/5 right-1/20 z-10"></div>
      <div className="hidden md:block w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-white absolute bottom-1/10 right-1/5 z-10"></div>
      <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-pink-500 to-white absolute bottom-1/20 left-1/5 z-10"></div>
      <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-orange-700 md:from-emerald-700 to-white absolute bottom-1/4 left-1/20 z-10"></div>
      <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-emerald-700 to-white absolute top-1/10 right-1/3 z-10"></div>
    </Layout>
  );
}
