/** @format */
import { useEffect, useState } from "react/cjs/react.development";
import "../../App.css";
import newLetterImg from "../../assets/newsletter_banner.jpg";
import { useCookies } from "react-cookie";

const NewsLetter = () => {
  const [newLetter, setNewLetter] = useState(true);
  const [cookies, setCookie] = useCookies(["Subscribe"]);

  // setTimeout(() => {
  //   setNewLetter(false);
  // }, 10000);

  const handleClose = () => {
    setNewLetter(false);
  };

  const handleChange = () => {
    setCookie("Subscribe", false);
  };

  return (
    <div>
      {cookies.Subscribe === true ? (
        <div className="newLetterOverlay flex bg-white w-full max-w-screen-lg border">
          <div>
            <img
              src={newLetterImg}
              className="max-w-none hidden 2xl:block xl:block lg:block md:hidden sm:hidden"
            />
          </div>
          <div>
            <div className="p-8">
              <h3 className="text-3xl font-['Poppins'] font-semibold text-[#ca8757]">
                Subscribe NewLetter
              </h3>
              <p className="pt-2 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, repudiandae quod dignissimos tenetur exercitationem qui
                officiis sunt nesciunt, explicabo mollitia possimus maxime esse
                inventore dolorem voluptates consequuntur porro labore
                molestiae.
              </p>

              <div className="w-full max-w-xs">
                <form className="pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      className="bg-black hover:bg-[#ca8757] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Subscribe
                    </button>

                    <div className="flex items-center justify-center gap-1">
                      <input type="checkbox" onClick={handleChange} />
                      <span className="text-gray-500">
                        Don't show this again
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <button
            className="absolute ml-auto right-0 bg-black font-semibold text-white p-2 px-4 hover:text-[#ca8757]"
            onClick={handleClose}
          >
            X
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default NewsLetter;
