import Link from "next/link";
import { FaBurger } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-300 text-gray-600 body-font mt-20">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <FaBurger />
              <span className="ml-3 text-xl text-orange-600">𝕲𝖗𝖎𝖑𝖑𝖀𝖕!</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Satisfy your cravings with the best burgers, sandwiches, and biryani in town!
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                MENU
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-orange-600">Burgers</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-orange-600">Sandwiches</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-orange-600">Biryani</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                SPECIALS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-orange-600">GrillUp Special Burger</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-orange-600">Spicy Chicken Sandwich</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-orange-600">Biryani Fiesta</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                ABOUT US
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-orange-600">Our Story</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-orange-600">Chef’s Special</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                CONTACT US
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-orange-600">Location & Hours</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-orange-600">Order Online</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2024 GrillUp —
              <a
                href="https://twitter.com/grillup"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1 hover:text-orange-600"
                target="_blank"
              >
                @GrillUp
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <span className="text-gray-500 flex text-3xl gap-10">
                <Link href="https://www.linkedin.com/in/huzaifa-abdulrab/">
                  <span className="hover:text-orange-600">
                    <FaLinkedin />
                  </span>
                </Link>
                <Link href="https://github.com/Huzaifaabdulrab?tab=repositories">
                  <span className="hover:text-orange-600">
                    <FaGithub />
                  </span>
                </Link>
              </span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
