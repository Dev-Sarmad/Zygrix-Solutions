import slider from "../assets/challenges.png";
function ChallengesSolve() {
  return (
    <>
      <section className="mt-5 p-5 bg-gray-700">
        <h1 className="text-4xl text-white font-ppFormula">
          Challenges We <br className="md:hidden" /> Solve{" "}
        </h1>
        {/* challenges and image container */}
        <div className="mt-5 flex xl:justify-between xl:items-center md:items-center h-full w-full  gap-8 lg:gap-24">
          <div className="flex flex-col md:hidden space-y-3 space-x-0  md:items-center text-center md:flex-row md:space-x-3 md:space-y-0">
            <h4 className="bg-[#1d2230] p-3 text-[#6dda84]">
              [ Missed deadlines ]
            </h4>
            <h4 className="bg-[#1d2230] p-3 text-[#6dda84]">
              [ Unpredictable Budgets ]
            </h4>
            <h4 className="bg-[#1d2230] p-3 text-[#6dda84]">
              [ Bad Communication ]
            </h4>
            <h4 className="bg-[#1d2230] p-3 text-[#6dda84]">
              [ Inflexible Teams ]
            </h4>
            <h4 className="bg-[#1d2230] p-3 text-[#6dda84]">
              [ Shoddy Product ]
            </h4>
            <h4 className="bg-[#1d2230] p-3 text-[#6dda84]">
              [ 2nd-rate Talent ]
            </h4>
          </div>
          <div className="hidden  md:flex md:flex-col md:space-y-3 xl:text-xl ">
            <div className="flex space-x-2 space-y-0">
              <span className="bg-[#1d2230] p-3 text-[#6dda84]">[ Missed deadlines ]</span>
              <span className="bg-[#1d2230] p-3 text-[#6dda84]">[upredictable changes ]</span>
              <span className="bg-[#1d2230] p-3 text-[#6dda84]">[ Bad communication ]</span>
            </div>
            <div className="flex space-x-2 space-y-0">
              <span className="bg-[#1d2230] p-3 text-[#6dda84]">[ Inflexible teams ]</span>
              <span className="bg-[#1d2230] p-3 text-[#6dda84]">[ Shoddy product ]</span>
              <span className="bg-[#1d2230] p-3 text-[#6dda84]">[ 2nd-rate talent ]</span>
            </div>
          </div>
          <div className="sticky top-[120px] h-[100px] xl:static md:static">
            <img src={slider} alt="" className="w-[100px] md:w-[200px] xl:w-[250px] xl:-mt-16" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ChallengesSolve;
