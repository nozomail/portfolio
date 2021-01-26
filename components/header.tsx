import Link from "next/link";

export default function Header() {
  return (
    <header className="flex content-center">
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
      <nav className="w-96 flex justify-between text-white ml-14">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
