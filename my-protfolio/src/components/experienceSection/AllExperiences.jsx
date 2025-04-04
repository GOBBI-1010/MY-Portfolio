import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [


  {
    job: "Self-Learning",
    company: "Full-Stack Web Development",
    date: "ongoing",
    responsibilities: [
      "Mastering front-end and back-end technologies independently.",
      "Building real-world projects to enhance development skills.",
      "Continuously improving problem-solving and debugging skills."
    ],
  },

  {
    job: "Front-End Developer",
    company: "SIT-IT solution",
    date: "2024-2025",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "BE-CSE Graduate",
    company: "First class",
    date: "Passout 2024",
    responsibilities: [
      "Gained expertise in JavaScript, React, and Tailwind CSS.",
      "Lern on various programming and development projects.",
      "Collaborated on learning and implementing web development technologies."
    ]
},
  
];

const AllExperiences = () => {
  return (
    <div className=" flex md:flex-row max-sm:block sm:flex-col items-center justify-between max-sm:]">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block  max-sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
