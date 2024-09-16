import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="header bg-white fixed top-0 right-0 left-0 z-10 flex justify-around py-5 px-16 border-b border-1 border-gray-300">
        <div id="headerMenu" className="">
          <Link
            href="/"
            className="font-bold px-5 py-2 rounded-md transition hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-bold px-4 py-2 rounded-md transition hover:bg-gray-50"
          >
            About
          </Link>
          <Link
            href="/skills"
            className="font-bold px-4 py-2 rounded-md transition hover:bg-gray-50"
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className="font-bold px-4 py-2 rounded-md transition hover:bg-gray-50"
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            className="font-bold px-4 py-2 rounded-md transition hover:bg-gray-50"
            target="_blank"
          >
            Blogs
          </Link>
        </div>
        <div id="lightDarkMode" className=""></div>
      </header>
    </>
  );
}
