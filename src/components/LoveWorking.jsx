import hand7 from "../assets/8.png";
function LoveWorking() {
  return (
    <section className="mt-5 p-5 bg-gray-700">
      <h1 className="text-4xl text-white font-ppFormula tracking-wide">
        Why you will <span className="text-[#6dda84]">love working</span> with
        us
      </h1>
      {/* challenges and image container */}
      <div className="mt-5 flex xl:justify-between xl:items-center md:items-center h-full w-full  gap-8 lg:gap-24">
        <div className="flex flex-col md:hidden space-y-3 space-x-0  md:items-center text-center md:flex-row md:space-x-3 md:space-y-0">
          <div className="flex flex-col space-x-0 space-y-1 bg-[#1d2230]">
            <h4 className=" p-3 text-[#b0e2bb]">[ fast turnaround ]</h4>
            <p className="p-3 text-white text-sm">
              We iterate your product faster for quicker market feedback.
            </p>
          </div>
          <div className="flex flex-col space-x-0 space-y-1 bg-[#1d2230]">
            <h4 className=" p-3 text-[#b0e2bb]">[ Hitting Budgets ]</h4>
            <p className="p-3 text-white text-sm">
              We iterate your product faster for quicker market feedback.
            </p>
          </div>
          <div className="flex flex-col space-x-0 space-y-1 bg-[#1d2230]">
            <h4 className=" p-3 text-[#b0e2bb]">[ Transparency ]</h4>
            <p className="p-3 text-white text-sm">
              Timely messages, consistent communication and progress reports.
            </p>
          </div>
          <div className="flex flex-col space-x-0 space-y-1 bg-[#1d2230]">
            <h4 className=" p-3 text-[#b0e2bb]">[ Attentiveness ]</h4>
            <p className="p-3 text-white text-sm">
              A small, mighty team that focuses on your product.
            </p>
          </div>
          <div className="flex flex-col space-x-0 space-y-1 bg-[#1d2230]">
            <h4 className=" p-3 text-[#b0e2bb]">[ Keeping Commitments ]</h4>
            <p className="p-3 text-white text-sm">
              We stake our success on your success
            </p>
          </div>

          <div className="flex flex-col space-x-0 space-y-1 bg-[#1d2230]">
            <h4 className=" p-3 text-[#b0e2bb]">[ Business Impact ]</h4>
            <p className="p-3 text-white text-sm">
              Tech experts that have business chops.
            </p>
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-3 md:gap-3 xl:text-xl">
          <div className="bg-[#1d2230] p-3 space-y-3">
            <h4 className="text-[#b0e2bb]">[ fast turnaround ]</h4>
            <p className="text-white text-sm">
              We iterate your product faster for quicker market feedback.
            </p>
          </div>
          <div className="bg-[#1d2230] p-3 space-y-3">
            <h4 className="text-[#b0e2bb]">[ Hitting Budgets ]</h4>
            <p className="text-white text-sm">
              Upfront costs that align with your budget.
            </p>
          </div>
          <div className="bg-[#1d2230] p-3 space-y-3">
            <h4 className="text-[#b0e2bb]">[ Transparency ]</h4>
            <p className="text-white text-sm">
              Timely messages, consistent communication and progress reports.
            </p>
          </div>
          <div className="bg-[#1d2230] p-3 space-y-3">
            <h4 className="text-[#b0e2bb]">[ Attentiveness ]</h4>
            <p className="text-white text-sm">
              A small, mighty team that focuses on your product.
            </p>
          </div>
          <div className="bg-[#1d2230] p-3 space-y-3">
            <h4 className="text-[#b0e2bb]">[ Keeping Commitments ]</h4>
            <p className="text-white text-sm">
              We stake our success on your success.
            </p>
          </div>
          <div className="bg-[#1d2230] p-3 space-y-3">
            <h4 className="text-[#b0e2bb]">[ Business Impact ]</h4>
            <p className="text-white text-sm">
              Tech experts that have business chops.
            </p>
          </div>
        </div>

        <div className="sticky top-[120px] h-[100px] ">
          <img
            src={hand7}
            alt=""
            className="w-[200px] md:w-[250px] md:h-[250px] xl:w-[350px] xl:-mt-16"
          />
        </div>
      </div>
    </section>
  );
}

export default LoveWorking;
