import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Apple-airpods-Clone",
    year: "Apr-2025",
    align: "right",
    image: "/images/website-img-6.jpg", // Fixed path
    link: "https://airpods-cbg.netlify.app/",
  },
  {
    name: "Spotify-clone",
    year: "Jan-2025",
    align: "left",
    image: "/images/website-img-0.jpg", // Fixed path
    link: "https://spotify-cbg.netlify.app/",
  },
  {
    name: "Foodie.",
    year: "feb-2025",
    align: "right",
    image: "/images/website-img01.jpg", // Fixed path
    link: "https://foodie-delivery-60033703633.development.catalystserverless.in/app/index.html",
  },
  {
    name: "Taxi-service",
    year: "Nov-2024",
    align: "left",
    image: "/images/website-img-1.jpg", // Fixed path
    link: "https://taxi-booking-60033703633.development.catalystserverless.in/app/index.html",
  },
  {
    name: "Livi-Institute",
    year: "Nov-2024",
    align: "right",
    image: "/images/website-img-2.jpg",
    link: "https://education-institute-60033703633.development.catalystserverless.in/app/index.html",
  },
  {
    name: "SK-Fitness GYM",
    year: "Dec-2024",
    align: "left",
    image: "/images/website-img-3.jpg",
    link: "https://surl.li/cheeuw",
  },
 
  {
    name: "Nostra Mens-Cloth",
    year: "sep-2024",
    align: "right",
    image: "/images/website-img-4.jpg",
    link: "https://nostra-60031289896.development.catalystserverless.in/app/index.html",
  },

  {
    name: "Apple-airpad",
    year: "Aug-2024",
    align: "left",
    image: "/images/website-img-5.jpg",
    link: "https://www.figma.com/proto/B91xffNXCAYFuynpFZdjz6/apple2?node-id=0-1&t=H86OZdF0fny6vv9Z-1",
  },
  
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link} // ✅ Added link
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
