import { FaEye } from "react-icons/fa";
import workableImg from "../../assets/projrctimg/workable.png";
import Eridimg from "../../assets/projrctimg/erid.png";
const projects = [
  {
    name: "Landing page for Workable",
    image:
      workableImg,
    link: "https://www.workable.com/", // Workable homepage
  },
  {
    name: "E-Commerce Store for Eride",
    image:
      Eridimg,
    link: "https://eride.madrasthemes.com/", // Erid homepage
  }
];



const Projects = () => {
  return (
    <div className="w-[97%] lg:w-[80%] lg:min-h-[760px] min-h-[530px] scrollbar-hide flex p-1 rounded-[10px] max-h-64 overflow-y-scroll flex-col justify-start ">
      <h1 className=" text-lg font-bold ml-4 lg:text-2xl">
        My Projects
      </h1>
      <span className="bg-green-400 min-h-[3px] lg:h-[3px] w-[110px] lg:w-[143px] mt-1 rounded-[20px] mb-3 block ml-3"></span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="relative group rounded-xl overflow-hidden shadow-lg">
            {/* Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-400 rounded-full text-black hover:bg-white transition-colors duration-300"
              >
                <FaEye className="w-6 h-6" />
              </a>
            </div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4">
              <h2 className="text-lg font-semibold">{project.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
