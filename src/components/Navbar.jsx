import { useState } from "react";
import { Link } from "react-router-dom";
import { CiCircleChevRight } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi"; // Menu and Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[98%] mx-auto top-4 fixed backdrop-blur-2xl p-3 rounded-r-2xl flex justify-between items-center z-50">
      {/* Logo */}
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

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`md:flex gap-x-5 items-center p-2 font-[500] absolute md:static bg-white md:bg-transparent top-[70px] right-4 md:right-0 w-[90%] md:w-auto shadow-lg md:shadow-none rounded-lg md:rounded-none transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link to="/">
          <li className="hover:text-violet-700 cursor-pointer border-b border-transparent hover:border-b p-2">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="hover:text-violet-700 cursor-pointer border-b border-transparent hover:border-b p-2">
            About
          </li>
        </Link>
        <Link to="/service">
          <li className="hover:text-violet-700 cursor-pointer border-b border-transparent hover:border-b p-2">
            Services
          </li>
        </Link>
        <Link to="/contact">
          <li className="hover:text-violet-700 cursor-pointer border-b border-transparent hover:border-b p-2">
            Users
          </li>
        </Link>
      </ul>

      {/* Get Started Button */}
      <button className="hidden md:flex text-md border-1 p-3 border-violet-500 px-3 rounded-md hover:bg-violet-400 hover:text-white duration-300 items-center gap-x-2">
        Get Started
        <CiCircleChevRight className="text-xl" />
      </button>
    </nav>
  );
};

export default Navbar;
