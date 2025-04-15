const Card1 = ({ icon, heading, context }) => {
  return (
    <div className="box-shaddow-card flex h-[19rem] w-[20rem] flex-col items-center justify-between rounded-2xl border-[1px] border-[var(--action-lite)] p-8 text-center">
      <span>
        <img src={icon} alt="ClientIcon 1" />
      </span>

      <h1 className="text-[var(--headin-text) text-[2rem] leading-[2.3rem]">
        {heading}
      </h1>
      <p className="text-[var(--context-color)]">{context}</p>
    </div>
  );
};

export default Card1;
