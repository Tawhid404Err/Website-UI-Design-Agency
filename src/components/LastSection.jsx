import { GoArrowRight } from "react-icons/go";

const LastSection = () => {
  return (
    <div className="bg-[var(--nav-color)] p-4">
      <div className="container mx-auto flex flex-col items-center py-12">
        <h1 className="mb-10 text-center text-5xl font-bold text-[var(--headin-text)] sm:w-[600px]">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <a
          href="#"
          className="flex items-center justify-center rounded-[5px] bg-[var(--action-color)] px-8 py-3 text-[20px] text-white duration-300 hover:bg-[var(--action-dark)] focus:bg-[var(--action-dark)]"
        >
          Get a Demo
          <GoArrowRight className="animate-shake animate-infinite animate-duration-1500 animate-ease-linear animate-fill-forwards ml-4 text-[2rem]" />
        </a>
      </div>
    </div>
  );
};

export default LastSection;
