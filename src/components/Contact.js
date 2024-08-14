import {
  GITHUB_LINK,
  LEETCODE_LINK,
  LINKEDIN_LINK,
  MY_PHOTO,
} from "../utils/constants";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <div className="flex-1 flex justify-center items-center font-poppins">
      <div className="flex flex-col justify-center items-center mt-4 gap-5 shadow-xl border w-fit max-w-screen-sm rounded-lg bg-slate-300">
        <p className="text-2xl w-full text-center py-2 font-extrabold ">
          About Me
        </p>
        <img
          className="rounded-lg w-[200px] h-[170px] border-none align-middle"
          src={MY_PHOTO}
          alt="user photo"
        />
        <div className="flex flex-col w-full justify-center text-black px-5 font-bold">
          <p>
            <span>Name - </span>Nagbhushan Tirth
          </p>
          <p>
            <span>Phone - </span>919404835050
          </p>
          <p>
            <span>Email - </span>tirthnagbhushan56@gmail.com
          </p>
        </div>
        <div className="bg-slate-900 text-white p-4 rounded-sm">
          <p className="pb-4 text-lg text-slate-300 text-center font-bold">
            Front end Developer | React Js | JavaScript | HTML5 | CSS3 |
            Tailwind CSS | Exploring MERN | Exploring DSA
          </p>
          <div className=" text-[2em] text-center w-full flex items-center mt-2 justify-evenly">
            <a
              href={GITHUB_LINK}
              className="mb-2 pr-4 hover:scale-105"
              target="_blank"
            >
              <i className="bg-[#333] icon--i">
                <SiGithub className="m-auto" />
              </i>
            </a>
            <a
              href={LINKEDIN_LINK}
              className="mb-2 pr-4 hover:scale-105"
              target="_blank"
            >
              <i className="bg-[#0e76a8] icon--i">
                <SiLinkedin className="m-auto" />
              </i>
            </a>
            <a href={LEETCODE_LINK} className="mb-2 hover:scale-105">
              <i className="bg-[#ea4335] icon--i">
                <SiLeetcode className="m-auto" />
              </i>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
