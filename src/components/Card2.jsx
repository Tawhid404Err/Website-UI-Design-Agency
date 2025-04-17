import { GoArrowRight } from "react-icons/go";

const Card2 = ({ context, img }) => {
  return (
    <div className="h-[max-content] w-full">
      <div className="w-full overflow-hidden sm:rounded-2xl">
        <img src={img} alt="Image 1" />
      </div>

      <div className="box-shaddow-card relative m-4 mt-[-70px] rounded-2xl border border-[var(--action-color)] bg-[var(--ideas-color)] p-4">
        <h1 className="text-shaddow-class mx-auto w-[200px] text-center text-white">
          {context}
        </h1>

        <a
          href="#"
          className="group mx-auto mt-2 flex w-[max-content] items-center text-center text-[1.2rem] text-[var(--action-color)] underline lg:my-0"
        >
          learn More
          <GoArrowRight className="animate-shake animate-infinite animate-duration-1500 animate-ease-linear animate-fill-forwards lg:group-hover:animate-shake lg:group-hover:animate-infinite lg:group-hover:animate-duration-1500 lg:group-hover:animate-ease-linear lg:group-hover:animate-fill-forwards ml-4 lg:animate-none" />
        </a>
      </div>
    </div>
  );
};

export default Card2;
