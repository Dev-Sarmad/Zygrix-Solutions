import hero from "../assets/image.png"
function Hero() {
  return (
    <section className="flex items-center justify-around flex-col md:flex-row-reverse space-x-0 space-y-4 max-w-6xl">
      {/* hero image */}
      <div className="hero-image">
        <img src={hero} alt="" />
      </div>
      {/* hero content */}
      <div className="hero-content flex flex-col space-y-5 space-x-0 items-center md:items-start md:space-x-5 md:space-y-0">
        <p className="text-[#6dda84] text-sm md:text-lg md:mb-6 md:ml-4">[#1 ReactJS Web & App Agency in Karachi]</p>
        <span className="text-6xl text-center md:text-8xl text-white font-ppFormula md:text-left">Your Vision.</span>
          <br className="hidden md:block" />
        <span  className="text-[#6dda84] uppercase text-6xl text-center md:text-8xl  font-ppFormula md:text-justify">Expert Makers.</span>
        <p className="text-gray-300 text-center text-md md:text-lg md:text-left p-3">Full-stack ReactJS Web and Mobile Apps
          <br className="md:block hidden" />
        Built with passion and precision</p>
        <div className="flex space-y-3 flex-col items-center md:flex-row md:space-x-3 md:space-y-0 md:mt-10 ">
            <button className="bg-[#6dda84] p-3 px-10 md:px-5 rounded-md font-bold md:font-medium">Talk to maker  </button>
            <button className="border-[#6dda84] border-2 text-[#6dda84]  p-3  md:px-5 px-10 rounded-md font-bold">Our work</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
