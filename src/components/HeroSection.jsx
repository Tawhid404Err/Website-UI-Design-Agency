import HeroImg from "../assets/hero.svg";

const HeroSection = () => {
  return (
    <div className="relative container mx-auto h-[max-content] w-dvw p-4 lg:flex lg:justify-between">
      <div className="flex justify-center lg:order-last">
        <img src={HeroImg} className="xl:w-[522px]" alt="Hero Image" />
      </div>
      <div className="flex flex-col items-start justify-center pb-8">
        <div className="h-[max-content]">
          <h1 className="mt-4 text-7xl font-bold text-[var(--headin-text)]">
            Lessons and insights
          </h1>
          <span className="text-7xl font-bold text-[var(--action-color)]">
            from 8 years
          </span>
        </div>
        <p className="my-4 mb-8 text-[18px] text-[var(--context-color)] sm:w-[280px]">
          Where to grow your business as a photographer: site or social media?
        </p>

        <a href="#" className="common-btn">
          Register
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
