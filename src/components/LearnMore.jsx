const LearnMore = ({ animation, img0, img1, img2, img3, heading, context }) => {
  return (
    <div className="container mx-auto flex flex-col p-4 lg:flex-row">
      <div className="relative flex justify-center pt-14 pb-12 lg:flex-1">
        <img className="w-[522px]" src={img0} alt="" />

        <img
          src={img1}
          className={`${animation} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-[522px]`}
          alt="Hero Image"
        />

        <img
          src={img2}
          className="animate-oscillate absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-[522px]"
          alt="Hero Image"
        />

        <img
          src={img3}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-[522px]"
          alt="Hero Image"
        />
      </div>
      <div className="flex flex-col items-start pb-10 lg:flex-1 lg:justify-center">
        <h1 className="mb-6 text-[44px] leading-[3.5rem] text-[var(--headin-text)]">
          {heading}
        </h1>
        <p className="mb-6 text-[var(--context-color)]">{context}</p>
        <a className="common-btn" href="#">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default LearnMore;
