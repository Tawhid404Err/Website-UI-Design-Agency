const Card1 = ({ icon, heading, context }) => {
  return (
    <div className="box-shaddow-card flex h-[19rem] w-full flex-col items-center justify-between rounded-2xl border-[1px] border-[var(--action-lite)] p-8 text-center sm:w-[20rem]">
      <span>
        <img src={icon} alt="ClientIcon 1" />
      </span>

      <h1 className="text-[2rem] leading-[2.3rem] text-[var(--headin-text)]">
        {heading}
      </h1>
      <p className="text-[var(--context-color)]">{context}</p>
    </div>
  );
};

export default Card1;
