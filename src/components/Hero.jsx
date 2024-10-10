import { useRef } from "react";
import hero from "../assets/image.png";
import piece1 from "../assets/p1.png";
import piece2 from "../assets/p2.png";
import piece3 from "../assets/p3.png";
import { useScroll, useTransform, motion } from "framer-motion";
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  return (
    <section
      className="flex items-center justify-around flex-col md:flex-row-reverse space-x-0 space-y-4 max-w-6xl relative md:overflow-hidden"
      ref={ref}
    >
      {/* hero image */}
      <div className="hero-image">
        <img src={hero} alt="" />
        <motion.div
          style={{ translateY: y }}
          className="hidden md:-right-96  md:-top-8 md:block md:absolute w-full"
        >
          <img src={piece1} alt="" className="w-[60%]" />
        </motion.div>
        <motion.div
          className="hidden md:-right-30  md:-top-8 md:block md:absolute "
          style={{ translateY: y }}
        >
          <img src={piece2} alt="" />
        </motion.div>
        <motion.div
          className="hidden md:left-30  md:-top-8 md:block md:absolute "
          style={{ translateY: y }}
        >
          <img src={piece3} alt="" />
        </motion.div>
      </div>
      {/* hero content */}
      <div className="hero-content flex flex-col space-y-5 space-x-0 items-center md:items-start md:space-x-5 md:space-y-0">
        <p className="text-[#6dda84] text-sm md:text-lg md:mb-6 md:ml-4">
          [#1 ReactJS Web & App Agency in Karachi]
        </p>
        <span className="text-6xl text-center md:text-8xl text-white font-ppFormula md:text-left">
          Your Vision.
        </span>
        <br className="hidden md:block" />
        <span className="text-[#6dda84] uppercase text-6xl text-center md:text-8xl  font-ppFormula md:text-justify">
          Expert Makers.
        </span>
        <p className="text-gray-300 text-center text-md md:text-lg md:text-left p-3">
          Full-stack ReactJS Web and Mobile Apps
          <br className="md:block hidden" />
          Built with passion and precision
        </p>
        <div className="flex space-y-3 flex-col items-center md:flex-row md:space-x-3 md:space-y-0 md:mt-10 ">
          <button className="bg-[#6dda84] p-3 px-10 md:px-5 rounded-md font-bold md:font-medium">
            Talk to maker{" "}
          </button>
          <button className="border-[#6dda84] border-2 text-[#6dda84]  p-3  md:px-5 px-10 rounded-md font-bold">
            Our work
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
