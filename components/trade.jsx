const Trade = () => {
  return (
    <div>
      <section className="relative text-black py-24 mt-6 px-6 lg:px-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 md:text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Trade Finance
          </h2>
            <p className="text-[16px] text-secondary mb-8">
            Finance on the go, Your working capital and<span className="md:block">invoices</span> 
            </p>
            <div className="flex md:justify-center lg:justify-start space-x-4">
              <a
                href="#"
                className="bg-primary text-white py-3 px-6 rounded-lg text-lg font-medium transition duration-300"
              >
                Get Started
              </a>
            
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="/assets/Frame 1171280270.png" 
              alt="Hero"
              className="w-full h-full object-cover rounded-lg "
            />
          </div>
        </div>
      </section>



         <div className="max-w-7xl mx-auto px-6 py-16 ">
        <div className="flex flex-col justify-between lg:flex-row lg:items-start lg:gap-10">
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <h2 className="text-2xl font-semibold text-gray-900">
            What is Trade Finance ?            </h2>
          </div>

          <div className="">
               <p className="">
               Trade finance is a type of financing that helps businesses<span className="md:block">manage the risks and costs associated with international trade. It</span>  provides access to funds, manages payment risks, and optimizes<span className="md:block">cash flow, allowing businesses to grow and compete globally. By </span>  using trade finance, businesses can mitigate the risks of non<span className="md:block">-payment, currency fluctuations, and other trade-related risks.</span> 
               </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
