import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className=" pt-40 pb-1">
      <div className="flex md:flex-row max-sm:block max-md:block max-w-[1200px] mx-auto justify-between items-center relative px-4">
  <HeroText />
  <HeroPic />
</div>

    </div>
  );
};

export default HeroMain;
