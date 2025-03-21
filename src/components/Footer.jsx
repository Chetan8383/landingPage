import React from "react";
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-teal-600 ">
            <div className="flex gap-3 items-center">
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/officel/80/logo.png"
                alt="logo"
              />
              <h1 className="font-bold text-xl">
                Otaku<span className="text-violet-800">Mart</span>
              </h1>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75 "
                to="#"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                to="#"
              >
                Careers
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                to="#"
              >
                History
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                to="#"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75 "
                to="#"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75 "
                to="#"
              >
                Blog
              </Link>
            </li>
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <Link
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75 "
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="text-2xl" />
              </Link>
            </li>

            <li>
              <Link
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75 "
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram  className="text-2xl"/>
              </Link>
            </li>

            <li>
              <Link
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75 "
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter  className="text-2xl"/>
              </Link>
            </li>

            <li>
              <Link
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75 "
              >
                <span className="sr-only">GitHub</span>
                <FaGithub  className="text-2xl"/>
              </Link>
            </li>

            <li>
              <Link
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">Dribbble</span>
                <FaDribbble className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
