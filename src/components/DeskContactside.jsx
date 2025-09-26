import Contact from "./Contact";
import profileImg from '../assets/profile.jpg';
function Deskcontactside() {
  return (
    <div className="flex flex-col items-center bg-[#1e1e1f]  max-w-[300px] h-[800px] rounded-[1.4rem] border border-[#383838] p-6 duration-700">
      
      
      <div className="w-[100%] flex justify-center mt-4">
        <img
          src={profileImg}
          alt="my pic"
          className="w-[78%] rounded-2xl"
        />
      </div>

     
      <p className="mt-8 text-white font-semibold text-lg text-center">
        SAMIAN SIKDAR 🙂
      </p>

     
      <div className="mt-2 bg-[#44594d77] text-white font-light px-4 py-1 text-xs rounded-[5px] text-center">
        &lt; webDeveloper /&gt;
      </div>
<div className="w-full h-px bg-gray-600 my-6"></div>
 <Contact/>

    </div>
    
  );
}

export default Deskcontactside;
