import HeroImg0 from "../assets/HeroFrames/hero0.svg";
import HeroImg1 from "../assets/HeroFrames/hero1.svg";
import HeroImg2 from "../assets/HeroFrames/hero2.svg";
import HeroImg3 from "../assets/HeroFrames/hero3.svg";
import HeroImg4 from "../assets/HeroFrames/hero4.svg";

const HeroSection = () => {
  return (
    <div className="relative container mx-auto h-[max-content] w-dvw p-4 lg:flex lg:justify-between">
      <div className="h-[522px]justify-center relative flex lg:order-last">
        <img src={HeroImg0} className="xl:w-[522px]" alt="Hero Image" />

        <img
          src={HeroImg1}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-[522px]"
          alt="Hero Image"
        />

        <img
          src={HeroImg2}
          className="animate-oscillate absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-[522px]"
          alt="Hero Image"
        />

        <img
          src={HeroImg3}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-[522px]"
          alt="Hero Image"
        />

        <img
          src={HeroImg4}
          className="animate-oscillate-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-[522px]"
          alt="Hero Image"
        />
      </div>
      <div className="flex flex-col items-start justify-center pb-8">
        <div className="h-[max-content]">
          <h1 className="mt-4 text-6xl font-bold text-[var(--headin-text)]">
            Lessons and insights
          </h1>
          <span className="text-6xl font-bold text-[var(--action-color)]">
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
