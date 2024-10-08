import pc from "../assets/pc.png";
import shop  from "../assets/shop.png";
import tap  from "../assets/tape.png";
function Services() {
  return (
    <section className="mt-5 p-6 md:flex md:justify-around md:items-start ">
      <div className="md:sticky md:top-[120px]">
        <span className="text-[#6dda84]">[ Our Service ]</span>
        <h1 className="mt-3 text-3xl font-bold font-ppFormula text-[#6dda84] lg:text-5xl xl:text-6xl">
          Focus Of What Matters.{" "}
        </h1>
        <h1 className="mt-3 text-3xl font-bold font-ppFormula text-white lg:text-6xl xl:text-7xl">
          Deliver the biggest business impact.
        </h1>
      </div>
      <div className="flex flex-col items-center mt-10 space-x-0 space-y-3">
        <div className="card w-[300px] md:w-[400px] h-[350px] md:h-[400px] lg:w-[500px] xl:w-[600px] bg-[#1d2230] rounded-md flex items-center justify-center flex-col space-y-3">
          {/* image */}
          <div className="w-full flex items-center justify-center">
            <img src={pc} alt="" className="w-[50%]" />
          </div>
          <h2 className="font-bold text-2xl text-center text-white">
            Web Application Development
          </h2>
          <p className="md:px-4 text-gray-400 text-base md:text-lg leading-[1.38] md:leading-[1.44] font-primary text-center font-light text-grey-200 md:text-left">
            Front-end web applications - build with ReactJS and Typescript -
            that will be easy to deploy and iterate over time. Optionally with
            backend, data and cloud.
          </p>
        </div>
        <div className="card w-[300px] md:w-[400px] h-[350px] md:h-[400px] lg:w-[500px] xl:w-[600px] bg-[#1d2230] rounded-md flex items-center justify-center flex-col space-y-3">
          {/* image */}
          <div className="w-full flex items-center justify-center">
            <img src={shop} alt="" className="w-[50%]" />
          </div>
          <h2 className="font-bold text-2xl text-center text-white">
            Backend Development
          </h2>
          <p className="md:px-4 text-gray-400 text-base md:text-lg leading-[1.38] md:leading-[1.44] font-primary text-center font-light text-grey-200 md:text-left">
          Back-end dev - leveraging NodeJS, Typescript and Express with REST/GraphQL/tRPC APIs - that will provide you a flexible architecture, either serverless or containerized.
          </p>
        </div>
        <div className="card w-[300px] md:w-[400px] h-[350px] md:h-[400px] lg:w-[500px] xl:w-[600px] bg-[#1d2230] rounded-md flex items-center justify-center flex-col space-y-3">
          {/* image */}
          <div className="w-full flex items-center justify-center">
            <img src={tap} alt="" className="w-[50%]" />
          </div>
          <h2 className="font-bold text-2xl text-center text-white">
            Wordpress Development
          </h2>
          <p className="md:px-4 text-gray-400 text-base md:text-lg leading-[1.38]  md:leading-[1.44] font-primary text-center font-light text-grey-200 md:text-left">
          Build responsive, SEO-friendly websites to elevate your online presence.
          Extend your site’s functionality with custom-built WordPress plugins.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
