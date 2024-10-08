import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaAngleLeft } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  return (
    <header className="sticky top-0 backdrop-blur-lg max-w-6xl">
      {/* main header  */}
      <div className="flex  justify-between p-3 md:items-center">
        {/* LOGO */}
        <div>
          <img src="" alt="" />
          <h3 className="text-white font-bold md:text-2xl uppercase">
            Zygrix Solutions
          </h3>
        </div>
        {/* hamburger */}
        <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <CgClose size={30} color="#6dda84" />
          ) : (
            <RxHamburgerMenu color="#6dda84" size={30} />
          )}
        </div>
        {/* here  */}
        <nav className="hidden text-md md:flex md:space-x-10  md:items-center  lg:space-x-20 text-white">
          <a href="">Services</a>
          <a href="">Blog</a>
          <a href="">Company</a>
          <a href="">Work</a>
          <button className="p-2 rounded-md border-[#6dda84]  border-2 text-[#6dda84] font-semibold px-5">
            Talk to maker{" "}
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="menu mt-3 bg-[#131825] text-white p-10 font-semibold min-h-screen">
          <div className="flex justify-end text-xl h-auto">
            <ul className="relative">
              <span className="flex items-center top-0">
                {isListOpen ? (
                  <RiArrowDropDownLine onClick={() => setIsListOpen(false)} />
                ) : (
                  <FaAngleLeft onClick={() => setIsListOpen(true)} />
                )}
                <li>Services</li>
              </span>
              {isListOpen && (
                <div className="flex flex-col absolute  mt-2  text-sm space-y-1">
                  <a href="">ReactJS Web Frontend</a>
                  <a href="">Fast Websites @ Headless CMS</a>
                </div>
              )}
              
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
