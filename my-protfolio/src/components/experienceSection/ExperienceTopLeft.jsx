import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        INTERNSHIP
      </p>
      <div className="flex justify-center items-center gap-4 ">
        <ExperienceInfo number="2" text="Month" />
        <p className="font-bold text-6xl m-4 text-lightBrown ">-</p>
        <ExperienceInfo number="8" text="Websites" />
      </div>
      <p className="text-center">
        With 2 month of <span className="font-bold text-white ">
          Internship
        </span> experience building dynamic and user-friendly website.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
