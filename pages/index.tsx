import styles from "../styles/home.module.scss";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-end font-display text-white text-shadow-md absolute inset-y-0 left-1/2 portrait:bottom-1/4 portrait:transform portrait:-translate-x-1/2 landscape:left-1/7 sm:left-1/7 2xl:left-1/7 z-20 pointer-events-none">
        <h1 className="text-7xl md:text-8xl lg:text-9xl 2xl:text-10xl font-bold tracking-wider text-right mb-2">
          Nozomi
          <br />
          Mail
        </h1>
        <div className="text-lg md:text-2xl lg:text-3xl 2xl:text-4xl text-right tracking-widest pr-2">
          Front-End Developer
        </div>
      </div>
      <div className={styles.rocket}></div>
    </Layout>
  );
}
