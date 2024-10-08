import hand1 from "../assets/1.png";
import hand2 from "../assets/2.png";
import hand3 from "../assets/3.png";
function WhyUs() {
  return (
    <section className="p-6 mt-7">
      <h3 className="text-[#6dda84] text-sm font-thin md:ml-4 md:text-lg">
        [ What we do ]
      </h3>
      <h1 className="font-ppFormula text-4xl mt-7 text-white md:ml-4 md:text-5xl">
        Why Zygrix Solutions ?
      </h1>
      {/* card container */}
      <div className="flex flex-col space-x-0 space-y-3 mt-10 md:flex-row md:space-x-3 md:space-y-0 ">
        {/* card */}
        <div className="card flex flex-col justify-center items-center bg-[#1d2230] md:w-[400px] lg:[500px]">
        <span className="text-[#6dda84] hidden md:block">[ 01 ]</span>
          <h1 className="text-3xl font-bold text-white  text-center px-3 pt-5 capitalize font-ppFormula lg:text-4xl">Ship fast</h1>
          <div className="w-full flex justify-center p-4">
            <img src={hand1} alt="" className="w-[40%] lg:w-[20%]"/>
          </div>
          <p className="text-center px-4 text-gray-400 lg:p-6 lg:text-lg">
          Deliver the biggest business impact first. Go to market on your
          terms with our help.
          </p>
        </div>
        <div className="card flex flex-col justify-center items-center bg-[#1d2230] md:w-[400px] lg:[500px]">
        <span className="text-[#6dda84] hidden md:block">[ 02 ]</span>
          <h1 className="text-3xl font-bold text-white  text-center px-3 pt-5 capitalize font-ppFormula lg:text-4xl">Bespoke Apps</h1>
          <div className="w-full flex justify-center p-4">
            <img src={hand2} alt="" className="w-[40%] lg:w-[20%]"/>
          </div>
          <p className="text-center px-4 text-gray-400 lg:p-6 lg:text-lg">
          Bring your ideas and we’ll do the rest. We build custom web and mobile applications to your unique specifications.
          </p>
        </div>
        <div className="card flex flex-col justify-center items-center bg-[#1d2230] md:w-[400px] lg:[500px]">
        <span className="text-[#6dda84] hidden md:block">[ 03 ]</span>
          <h1 className="text-3xl font-bold text-white  text-center px-3 pt-5 capitalize font-ppFormula lg:text-4xl">Unmatched Service</h1>
          <div className="w-full flex justify-center p-4">
            <img src={hand3} alt="" className="w-[40%] lg:w-[20%]"/>
          </div>
          <p className="text-center px-4 text-gray-400 lg:p-6  lg:text-lg ">
          Our clients aren’t just happy, they become long-term partners. We
            keep a lean team so we can focus on our select group of clients.
          </p>
        </div>
        
      </div>
    </section>
  );
}

export default WhyUs;

<div className="card flex flex-col justify-center items-center bg-[#1d2230] ">
        <span className="text-[#6dda84] hidden md:block">[ 01 ]</span>
          <h1 className="text-3xl font-bold text-white  text-center px-3 pt-5 capitalize font-ppFormula lg:text-4xl">Ship fast</h1>
          <div className="w-full flex justify-center p-4">
            <img src={hand1} alt="" className="w-[40%] lg:w-[20%]"/>
          </div>
          <p className="text-center px-4 text-gray-400 lg:p-5 lg:text-lg">
          Deliver the biggest business impact first. Go to market on your
          terms with our help.
          </p>
        </div>