import Nav from "./Nav";
import construction from "../assets/construction.png";
import { Link } from "react-router-dom";
const Features = () => {
  return (
    <>
      <div class="flex flex-col justify-center px-6 pb-16 pt-6 w-full ">
        <div>
          <Nav />
        </div>
        <div className="w-full flex items-center justify-center mt-16">
          <img src={construction} alt="site-on-hold" />
        </div>
        <div className="w-28 mt-10 border-b border-blue-600">
          <Link to={"/"}>Click to Home</Link>
        </div>
      </div>
    </>
  );
};

export default Features;
