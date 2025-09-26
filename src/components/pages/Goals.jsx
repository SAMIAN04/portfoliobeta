import {
  FaReact,
  FaNodeJs,
  FaUserTie,
  FaGlobeAmericas,
  FaBriefcase,
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb } from "react-icons/si";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const learningGoals = [
 
  {
    title: "Modern Front-End Frameworks",
    description:
      "Become proficient in React, Next.js, Tailwind CSS, Redux/Context API, React Query, and component-driven design.",
    Icon: FaReact,
    color: "text-cyan-400",
  },
  {
    title: "UI/UX & Advanced Tools",
    description:
      "Build polished interfaces using Framer Motion, Styled Components, ShadCN UI, and integrate APIs seamlessly.",
    Icon: FaReact,
    color: "text-blue-400",
  },
  {
    title: "Backend Development",
    description:
      "Learn Node.js, Express.js, REST APIs, GraphQL, WebSockets, MongoDB, PostgreSQL, authentication & security.",
    Icon: FaNodeJs,
    color: "text-green-500",
  },
  {
    title: "Full-Stack Projects",
    description:
      "Integrate front-end and back-end, handle deployments, CI/CD with GitHub Actions, Docker, and Nginx.",
    Icon: SiMongodb,
    color: "text-purple-400",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Master AWS, Vercel, Netlify, Firebase, serverless functions, database scaling, and caching strategies.",
    Icon: SiMongodb,
    color: "text-yellow-400",
  },
];


const careerGoals = [
  {
    title: "Build a Thriving Freelance Career",
    description: "Deliver high-quality projects, build long-term client relationships, and become a top-rated freelancer.",
    Icon: FaGlobeAmericas,
    color: "text-yellow-400",
  },
 
  {
    title: "Land My Dream Job",
    description: "Work with a leading tech company or launch my own venture as a full-stack developer.",
    Icon: FaBriefcase,
    color: "text-blue-400",
  },
];

const Section = ({ title, goals }) => (
  <div className="w-full my-12">
    <h2 className="text-xl font-bold text-white mb-8 tracking-wide">{title}</h2>
    <div className="relative w-full">
      {/* Center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-green-400/30"></div>

      <div className="flex flex-col space-y-12">
        {goals.map((goal, index) => {
          const isLeft = index % 2 === 0; // zigzag left-right
          return (
            <div
              key={index}
              className={`relative flex flex-col items-center md:items-${isLeft ? "end" : "start"}`}
            >
              {/* Connector line */}
              <span
                className={`absolute top-6 hidden md:block ${
                  isLeft ? "right-1/2 mr-6" : "left-1/2 ml-6"
                } w-8 h-0.5 bg-green-400/40`}
              ></span>

              {/* Milestone card */}
              <div
                className={`md:w-5/12 w-full p-6 rounded-xl border border-[#2e3830] backdrop-blur-xl bg-[#cefffa0d] shadow-xl transition-all duration-300 ${
                  isLeft ? "md:mr-auto text-right" : "md:ml-auto text-left"
                }`}
              >
                <div
                  className={`flex ${isLeft ? "justify-end" : "justify-start"} mb-3`}
                >
                  <goal.Icon
                    className={`w-8 h-8 ${goal.color} ${
                      isLeft ? "md:ml-4" : "md:mr-4"
                    }`}
                  />
                </div>
                <h3 className="text-white font-semibold text-lg">{goal.title}</h3>
                <p className="text-gray-300 text-sm">{goal.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const Goals = () => {
  return (
    <div className="w-[97%] lg:w-[80%] lg:min-h-[760px] min-h-[530px] scrollbar-hide flex p-1 rounded-[10px] max-h-64 overflow-y-scroll flex-col justify-start items-start  hide-scrollbar">
      <h1 className=" text-lg font-bold ml-4 lg:text-2xl">
        Goals
     </h1>
      <span className="bg-green-400 h-[3px] w-14 lg:w-[80px] rounded-[20px] mb-1 block min-h-[3px] ml-3"></span>

      {/* Learning Goals */}
      <Section title="Learning Goals" goals={learningGoals} />

      {/* Career Goals */}
      <Section title="Career Goals" goals={careerGoals} />
    </div>
  );
};

export default Goals;
