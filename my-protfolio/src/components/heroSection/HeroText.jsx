import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center  max-sm:text-center max-sm:justify-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-[2rem] md:text-[2.1rem]  sm:text-xl   max-sm:text-[2.5rem] uppercase text-lightGrey "
      >
        HI, I'M 
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl max-sm:text-[1.5rem] text-orange font-bold uppercase"
      >
        GOBBI
      </motion.h1>
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  max-sm:text-[1.5rem] uppercase text-lightGrey "
      >
        Front-End Web Developer
      </motion.h2>
      <motion.h1 variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}>
        <button className=" px-4 py-2 rounded text-xl font-bold font-body text-white1 border-cyan border   gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow ">
          <a href="https://drive.google.com/file/d/1cBlYTv-9LPA7yYsY4ODKscd53ZWqMv2A/view?usp=drivesdk">Resume</a>


        </button>
      </motion.h1>
    </div>
  );
};

export default HeroText;
