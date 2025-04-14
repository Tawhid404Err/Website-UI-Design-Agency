import HeroImg from "../assets/hero.svg";

const HeroSection = () => {
  return (
    <div className="absolute left-1/2 z-[-2] container h-[calc(100dvh-5.25rem)] w-dvw -translate-x-1/2 transform p-4 lg:flex lg:justify-between">
      <div className="flex justify-center lg:order-last">
        <img src={HeroImg} className="xl:w-[622px]" alt="Hero Image" />
      </div>
      <div className="flex flex-col items-start justify-center pb-8">
        <div className="h-[max-content]">
          <h1 className="mt-4 text-5xl font-bold text-[var(--headin-text)]">
            Lessons and insights
          </h1>
          <span className="text-5xl font-bold text-[var(--action-color)]">
            from 8 years
          </span>
        </div>
        <p className="my-4 mb-8 w-[370px] text-[18px] text-[var(--context-color)]">
          Where to grow your business as a photographer: site or social media?
        </p>

        <a
          href="#"
          className="rounded-[5px] bg-[var(--action-color)] px-13 py-3.5 text-[20px] text-white duration-300 hover:bg-[var(--action-dark)]"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
