import { FaFacebook, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer className=" mt-10  md:max-w-6xl mx-auto w-5/6 md:w-full  bg-[#232837] container md:text-lg">
      <div className="md:hidden">
        <div className="flex flex-col space-y-2 space-x-0 items-center justify-center p-4">
          <h3 className="text-white font-ppFormula text-xl tracking-widest">
            Zygrix Solutions
          </h3>
          <p className="text-[#7999ae] text-sm text-left">
            We love listening to you, prototyping your ideas and creating
            together.
          </p>
        </div>
        <hr className="w-1/2 text-center mt-4 ml-20  border-[#7999ae]" />
        <div className="mt-8 flex gap-20 items-center  text-[#7999ae] p-4">
          <div className="flex flex-col space-y-2 space-x-0">
            <a href="">Work</a>
            <a href="">Contact</a>
            <a href="">About</a>{" "}
          </div>
          <div className="flex flex-col space-x-0 space-y-2 ">
            <a href="">Privacy</a>
            <a href="">Impressum</a>
            <a href="">Cokkie Settings</a>
            <div className=" flex space-x-3 space-y-0 items-center pt-2">
              <FaLinkedin />
              <FaFacebook />
              <SiGmail />
              <FaPhoneAlt />
            </div>
          </div>
        </div>
        <hr className=" w-1/2 text-center mt-4 ml-20  border-[#7999ae]" />
        <div className=" font-thin mt-8 text-[#7999ae] flex flex-col space-y-5 p-4 justify-around">
          <span>ReactJS Web Frontends</span>
          <span>Wordpress</span>
          <span>.Net Core Full Stack</span>
        </div>
      </div>
      <div className="hidden md:flex justify-around  text-[#666b7b] items-center p-9">
        <div className="img">
          <img src="" alt="" />
          <h1 className="text-lg font-ppFormula">Zygrix Solutions</h1>
          <p className="text-sm">Based in Berlin</p>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="">Work</a>
          <a href="">Contact</a>
          <a href="">About</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="">ReactJS Web Frontends</a>
          <a href="">.Net Full Stack</a>
          <a href="">Wordpress</a>
        </div>
        <div className="flex flex-col space-y-3 mt-3 items-center">
          <div className="flex space-x-2">
            <FaFacebook    />
            <FaLinkedin />
            <FaPhoneAlt />
          </div>
          <p className="text-sm">hello@gmail.como</p>
          <p className="text-sm"> zygrix solutions Gmbh <br  /> karachi Pakistan</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
