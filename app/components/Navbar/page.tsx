import React from "react";
import logoMBKS from "../../../public/image/MBKS-LOGO.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="rounded bg-[#F1DA54] items-center">
      <div className="flex flex-wrap justify-between">
        <div className="flex justify-center">
          <Image src={logoMBKS} alt="logo" width={100} height={100} />
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 px-[80px]">
          <ul className="flex flex-col p-4 rounded-lg md:flex-row md:space-x-[118px] md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 font-sans font-normal text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 text-2xl"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 font-sans font-normal text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 text-2xl"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 font-sans font-normal text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 text-2xl"
              >
                Member
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
