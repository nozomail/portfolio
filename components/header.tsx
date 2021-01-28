import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  function handleLink(page) {
    // if (router.pathname === "/") {
    //   setTimeout(() => {
    //     router.push(page);
    //   }, 1500);
    //   return;
    // }
    router.push(page);
  }

  return (
    <header className="w-full flex items-center justify-between sm:justify-start">
      <div className="flex">
        <a className="flex-shrink-0 flex content-center" href="https://github.com/nozomail" target="_blank">
          <img className="w-5" src="/github.svg" alt="GitHub" />
        </a>
        <a
          className="flex-shrink-0 flex content-center ml-4"
          href="https://www.linkedin.com/in/nozomi-mail"
          target="_blank"
        >
          <img className="w-4" src="/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
      <nav className="w-64 sm:w-96 flex justify-between text-white ml-14">
        <span className="cursor-pointer" onClick={() => handleLink("/")}>
          Home
        </span>
        <span className="cursor-pointer" onClick={() => handleLink("/about")}>
          About
        </span>
        <span className="cursor-pointer" onClick={() => handleLink("/work")}>
          Work
        </span>
        <span className="cursor-pointer" onClick={() => handleLink("/contact")}>
          Contact
        </span>
      </nav>
    </header>
  );
}
