import Slider from "./Slider";

function Client() {
  return (
    <section className="max-w-6xl mt-5 bg-[#131825]">
      <div className="mt-10 p-6">
        <span className="text-[#6dda84] font-sm">[Our clients]</span>
        <div className="heading flex flex-col space-x-0 space-y-3 mt-5 md:flex-row   md:space-x-3 md:space-y-0 md:justify-between">
          <h1 className="text-white text-4xl font-bold font-ppFormula tracking-wide md:text-5xl">
            Our Clients <br  />{" "}
            <span className="text-[#6dda84]">are important to us </span>
          </h1>
        <p className="mt-4 text-gray-400 text-sm  text-balance md:w-[50%] md:text-lg ">
          We're proud to be working with these incredible companies, and
          thankful for their feedback, suggestions, and support. Projects start
          and end, but the relationships with our clients usually span multiple
          years.
        </p>
        </div>
      </div>
      <Slider />
    </section>
  );
}

export default Client;
