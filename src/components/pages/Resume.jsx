import { Briefcase, GraduationCap } from "lucide-react";

const Resume = () => {
  const education = [
    {
      title: "Higher Secondary Certificate (HSC) – Business Studies",
      subtitle: "Sreenagar GOVT. College, Bangladesh",
      year: "2022 – 2024",
      description:
        "Completed HSC in Business Studies while pursuing a passion for programming and technology.",
    },
    {
      title: "Self-Taught Web Developer",
      subtitle: "Online Learning (Udemy, Docs, Projects)",
      year: "2023 – Present",
      description:
        "Learning WordPress, React, JavaScript, Node.js, and backend development through hands-on projects and courses.",
    },
    {
      title: "Future Goal – Ausbildung in Germany",
      subtitle: "Career Development",
      year: "Upcoming",
      description:
        "Aiming to pursue Ausbildung in Germany and grow into a professional full-stack developer.",
    },
  ];

  const experience = [
    {
      title: "Freelance WordPress Developer",
      subtitle: "Fiverr / Self-Employed",
      year: "2024 – Present",
      description:
        "Building WordPress Elementor landing pages, custom websites, and funnels. Delivered clean, fast, and optimized sites for clients.",
    },
    {
      title: "Personal Projects",
      subtitle: "Portfolio & Practice Work",
      year: "2023 – Present",
      description:
        "Developed React portfolio, GSAP animation demos, Node.js practice projects, and experimental WordPress builds.",
    },
    {
      title: "Learning Backend Development",
      subtitle: "Node.js & API Fundamentals",
      year: "2025 – Ongoing",
      description:
        "Expanding expertise to become full-stack by learning server-side development, REST APIs, and database integration.",
    },
  ];

  const Section = ({ title, Icon, data }) => (
    <section className="mt-12">
      {/* Section title */}
      <h2 className="text-2xl font-bold text-white flex items-center gap-3">
        <Icon className="text-green-400 w-6 h-6" />
        {title}
      </h2>

      {/* Timeline */}
      <div className="relative mt-8">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-green-500/40"></div>

        <div className="space-y-10">
          {data.map((item, i) => (
            <div key={i} className="relative pl-12">
              {/* Dot */}
              <span className="absolute left-[9px] top-1.5 w-3.5 h-3.5 bg-green-400 rounded-full ring-4 ring-[#0f0f0f]"></span>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-green-400 text-sm font-medium mt-1">
                {item.year}
              </p>
              <p className="text-gray-400 text-sm">{item.subtitle}</p>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className=" w-[97%] lg:w-[80%] lg:min-h-[760px] scrollbar-hide min-h-[530px] flex p-1 rounded-[10px] max-h-64 overflow-y-scroll flex-col justify-start items-start ">
      {/* Header */}
      <h1 className=" text-lg font-bold ml-4 lg:text-2xl">
        Resume
      </h1>
      <span className="bg-green-400 min-h-[3px] w-20 lg:w-[100px] mt-1 ml-3 rounded-[20px] mb-1 block"></span>

      {/* Sections */}
      <Section title="Education" Icon={GraduationCap} data={education} />
      <Section title="Experience" Icon={Briefcase} data={experience} />
    </div>
  );
};

export default Resume;
