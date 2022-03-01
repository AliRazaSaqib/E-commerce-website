/** @format */

const Contact = () => {
  return (
    <div className="bg-gray-100 rounded-lg mt-12">
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="font-['Poppins'] text-black font-bold 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl text-4xl">
              Contact Us
            </h1>
            <p className="font-['Poppins'] lg:w-2/3 mx-auto leading-relaxed text-base">
              We are here for your help!
            </p>
          </div>
          <div className="lg:w-[50%] md:w-[50%] mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#e4853f] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#e4853f] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#e4853f] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-[#e4853f] border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
