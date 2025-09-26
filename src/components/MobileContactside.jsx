import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Contact from './Contact';
import profileImg from '../assets/profile.jpg'; // adjust if needed

function MobileContactSide() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex flex-col bg-[#1e1e1f]  min-w-[375px] max-w-[1210px] w-[70vw]  rounded-[1.4rem] border-[1px] border-[#383838] relative duration-700 lg:w-[300px] overflow-hidden ${
        isExpanded ? "h-[580px]" : "h-[110px]"
      }`}
    >
      {/* Toggle Arrow */}
      <span
        onClick={toggleExpand}
        className={`absolute top-2 right-3 cursor-pointer duration-300 ${
          isExpanded ? "rotate-180" : "rotate-0"
        }`}
      >
        <FontAwesomeIcon
          icon={faAngleDown} bounce
          className={`text-[1.2rem] transform duration-00 ${
            isExpanded ? "text-red-400" : "text-green-300"
          }`}
        />
      </span>

      {/* Profile Image */}
      <img
        src={profileImg}
        alt="My Pic"
        className="w-[85px] rounded-2xl absolute top-3 left-3"
      />

      {/* Name */}
      <p className="absolute top-5 left-28 font-semibold text-lg text-white">
        SAMIAN SIKDAR 🙂
      </p>

      {/* Role */}
      <div className="absolute top-14 left-28 w-fit bg-[#44594d77] font-light px-4 py-1 text-[12px] rounded-[5px] text-white">
        &lt; webDeveloper /&gt;
      </div>

      {/* Divider */}
      <div className=" w-[90%] h-px bg-gray-600 my-6 mt-[140px] ml-5"></div>

      {/* Contact Component (Only shows when expanded) */}
      <div className=''>
      {isExpanded && <Contact />}</div>
    </div>
  );
}

export default MobileContactSide;
