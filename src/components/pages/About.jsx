import { Computer, Target, ShoppingCart, Zap, Plug, Wrench } from "lucide-react";
import WIDcard from "../WIDcard";
const About = () => {
   const services = [
    {
      Icon: Computer,
      title: "Web Development",
      description: "Clean, fast, and functional websites using WordPress, React, and modern tools.",
    },
    {
      Icon: Target,
      title: "Landing Pages & Funnels",
      description: "High-converting landing pages and funnels designed to turn visitors into customers.",
    },
    {
      Icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Custom online stores with smooth checkout experiences that actually boost sales.",
    },
    {
      Icon: Zap,
      title: "Speed & SEO Optimization",
      description: "Making your site lightning-fast and search-engine-friendly so more people find you.",
    },
    {
      Icon: Plug,
      title: "Custom Integrations",
      description: "Connecting your website with CRMs, payment gateways, and any tools your business needs.",
    },
    {
      Icon: Wrench,
      title: "Website Maintenance",
      description: "Regular updates, security monitoring, and fixes to keep your site performing perfectly.",
    },
   ];
  
  
  return (
    <div className=" w-[97%] lg:w-[80%] lg:min-h-[760px] scrollbar-hide min-h-[530px] flex p-1 rounded-[10px] max-h-64 overflow-y-scroll flex-col justify-start items-start ">
      <h1 className=" text-lg font-bold ml-4 lg:text-2xl">
        About
      </h1>
      <span className="bg-green-400 h-[2px] w-[60px] lg:w-[80px] ml-3 rounded-[20px] min-h-[2px]"></span>
      <p className="text-base lg:text-lg leading-relaxed text-gray-300 mt-2  lg:mt-4 p-2">
    I&apos;m a <span className="font-semibold text-white ">Web Developer</span> passionate about 
    building fast, functional, and visually appealing websites. I take complex ideas and 
    turn them into clean, user-friendly solutions that actually work.  
    <br /><br />
    My job is to make your website smooth, reliable, and attractive — so users enjoy every 
    click. I add a personal touch to every project and make sure your site isn’t just 
    good-looking but also performs beautifully.  
    <br /><br />
    I’ve worked on a variety of projects helping businesses grow online by creating 
    websites that are practical, modern, and built to convert.
      </p>
       <h1 className=" text-lg font-bold ml-2 mt-8 lg:text-2xl">What I&apos;m doing</h1>
      <section className=" w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center mt-4 lg:mt-8  p-1 rounded-[10px] gap-4 lg:gap-5 h-full">
         {services.map((service, index) => (
        <WIDcard key={index} {...service} />
      ))}
      </section>
    </div>
  );
};

export default About;
