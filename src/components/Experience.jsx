import hand4 from "../assets/4.png"
import hand5 from "../assets/5.png"
import hand6 from "../assets/6.png"
function Experience() {
  return (
    <section className="mt-10 p-6">
       <h1 className="text-4xl font-ppFormula text-white lg:text-5xl tracking-wide">
        What <br className="md:hidden"/> <span className="text-[#6dda84] ">Working with Us</span>{" "}
        <br  className="md:hidden"/>
        Looks Like{" "}
      </h1>
      {/* Working with us container  */}
      <div className="flex flex-col space-x-0 space-y-3 mt-10 md:flex-row md:space-x-3 md:space-y-0 ">
        {/* card container */}
        <div className="card flex flex-col justify-center items-center bg-[#1d2230] ">
        <span className="text-[#6dda84] hidden md:block">[ 01 ]</span>
          <h1 className="text-3xl font-bold text-white font-ppFormula pt-5 px-3 capitalize lg:text-4xl">Talk to the Makers</h1>
          <div className="w-full flex justify-center p-4">
            <img src={hand4} alt="" className="w-[40%] lg:w-[20%]"/>
          </div>
          <p className="text-center px-4 text-gray-400 lg:p-5 lg:text-lg">
            Share you vision. We will start our journey with a meeting
            discussing the details of your projects and how we can help.
          </p>
        </div>
        <div className="card flex flex-col justify-center items-center bg-[#1d2230] ">
        <span className="text-[#6dda84] hidden md:block">[ 02 ]</span>
          <h1 className="text-3xl font-bold text-white  text-center px-3 pt-5 capitalize font-ppFormula lg:text-4xl">Scale into the Future</h1>
          <div className="w-full flex justify-center p-4">
            <img src={hand5} alt="" className="w-[40%] lg:w-[20%]"/>
          </div>
          <p className="text-center px-4 text-gray-400 lg:p-5 lg:text-lg">
          Launch is just the beginning. We build our apps to scale, so you’ll be set to grow and evolve over time. And, of course, we are here when you need us.
          </p>
        </div>
        <div className="card flex flex-col justify-center items-center bg-[#1d2230] ">
        <span className="text-[#6dda84] hidden md:block">[ 03 ]</span>
          <h1 className="text-3xl font-bold text-white  text-center px-3 pt-5 capitalize font-ppFormula lg:text-4xl">Build your vision</h1>
          <div className="w-full flex justify-center p-4">
            <img src={hand6} alt="" className="w-[40%] lg:w-[20%]"/>
          </div>
          <p className="text-center px-4 text-gray-400 lg:p-5 lg:text-lg">
          Upon approval, we will build your application to our agreed-to specs and go live to the world when you’re ready.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Experience;
