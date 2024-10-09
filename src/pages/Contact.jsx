import hand from "../assets/4.png";
import maze from "../assets/maze.png";
function Contact() {
  return (
    <section className="mt-5 p-6 bg-[#131825]">
      <div className="flex flex-col space-y-5 space-x-0  md:justify-around md:items-center md:flex-row-reverse">
        {/* Contact Image */}
        <div className="flex justify-center">
          <img src={hand} alt="" className="w-[60%] " />
        </div>
        {/* constent */}
        <div className="pt-10 md:w-1/2">
          <span className="text-[#6dda84] text-md">[Email us]</span>
          <h1 className="text-white mt-8 text-4xl tracking-wide font-bold font-ppFormula md:text-5xl">
            Prefer to Start with an <br className="hidden md:block" /> Email?{" "}
            <br /> <span className="text-[#6dda84]">No Problem.</span>
          </h1>

          <p className="text-sm md:text-md  text-gray-400 md:w-1/2 md:text-left md:mt-5 ">
            Just fire us an email at
            <a href="mailto:hello@makersden.io" className="text-[#6dda84]">
              hello@zygrixsolution.com
            </a>{" "}
            with whatever inquiries you may have, and we’re sure to reply within
            the next business day.
          </p>
        </div>
      </div>
      <div className="mt-20 flex flex-col  space-x-0 space-y-3 md:flex-row md:space-x-1 md:space-y-0">
        <div className="flex justify-center">
          <img src={maze} alt="" className="w-[70%] md:w-[50%]" />
        </div>
        <div className="mt-5">
          <span className="text-[#6dda84] text-sm md:text-lg">[Address]</span>
          <h1 className="text-4xl text-white font-ppFormula mt-5 tracking-wide md:text-5xl">
            Company details
          </h1>
          <h3 className="pt-2 font-semibold text-white">Invoicing Address</h3>
          <span className="text-gray-400 pt-4 inline-flex text-md tracking-wide">
            Zygrix Solutions <br />
            Shah Faisal #3 <br /> 75230 Karachi <br />
            Pakistan.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
