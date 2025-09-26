import { FaReact, FaCss3Alt, FaHtml5, FaJs, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiElementor, SiBootstrap } from "react-icons/si";
import WIDcard from "../WIDcard";

// define colors for each icon
const skills = [
  {
    title: "HTML",
    Icon: () => <FaHtml5 className="w-10 h-10 text-orange-500" />,
    description: "Markup language for structuring web content.",
  },
  {
    title: "CSS",
    Icon: () => <FaCss3Alt className="w-10 h-10 text-blue-500" />,
    description: "Styling language for beautiful web pages.",
  },
  {
    title: "JavaScript",
    Icon: () => <FaJs className="w-10 h-10 text-yellow-400" />,
    description: "Programming language for dynamic web experiences.",
  },
  {
    title: "Tailwind",
    Icon: () => <SiTailwindcss className="w-10 h-10 text-cyan-400" />,
    description: "Utility-first CSS framework for rapid design.",
  },
  {
    title: "Bootstrap",
    Icon: () => <SiBootstrap className="w-10 h-10 text-purple-400" />,
    description: "Popular CSS framework for responsive design.",
  },
  {
    title: "React",
    Icon: () => <FaReact className="w-10 h-10 text-blue-400" />,
    description: "Modern UI library for building interactive web apps.",
  },
  {
    title: "WordPress",
    Icon: () => <FaWordpress className="w-10 h-10 text-blue-600" />,
    description: "Popular CMS for building websites and blogs.",
  },
  {
    title: "Elementor",
    Icon: () => <SiElementor className="w-10 h-10 text-pink-500" />,
    description: "Drag-and-drop page builder for WordPress.",
  },
];

const Skills = () => {
  return (
    <div className="w-[97%] lg:w-[80%] lg:min-h-[760px] min-h-[530px] scrollbar-hide flex p-1 rounded-[10px] max-h-64 overflow-y-scroll flex-col justify-start items-start">
      <h1 className=" text-lg font-bold ml-4 lg:text-2xl">
        SKILLS
      </h1>
      <span className="bg-green-400 h-[2px] w-[70px] lg:w-[84px]  rounded-[20px] min-h-[2px] ml-3"></span>
      <section className=" w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center mt-4 lg:mt-8  p-1 rounded-[10px] gap-4 lg:gap-5 h-full">
        {skills.map((skill, index) => (
          <WIDcard key={index} {...skill} />
        ))}
      </section>
    </div>
  );
};

export default Skills;
