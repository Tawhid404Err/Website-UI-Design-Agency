const LearnMore = ({ img, heading, context }) => {
  return (
    <div className="container flex flex-col p-4 lg:flex-row">
      <div className="flex justify-center pt-14 pb-12 lg:flex-1">
        <img className="w-[522px]" src={img} alt="" />
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
