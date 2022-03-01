/** @format */
import error from "../../../assets/error.png";
const Error = () => {
  return (
    <div>
      <div className="pt-36 p-2">
        <img
          src={error}
          alt="not found"
          className="delay-300 animate-bounce duration-300"
        />
      </div>
    </div>
  );
};
export default Error;
