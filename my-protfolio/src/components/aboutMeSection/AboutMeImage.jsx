const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative max-sm:hidden">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden ">
        <img
          src="../../public/images/about-me.jpg"
          alt="About Me Image"
          className="h-full w-auto object-cover  max-sm:hidden"
        />
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10  max-sm:hidden"></div>
    </div>
  );
};

export default AboutMeImage;
