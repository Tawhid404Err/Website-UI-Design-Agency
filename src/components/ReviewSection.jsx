import ReviewImg from "../assets/review-section.png";
import { GoArrowRight } from "react-icons/go";

import ClientImg1 from "../assets/client-logo1.svg";
import ClientImg2 from "../assets/client-logo2.svg";
import ClientImg3 from "../assets/client-logo3.svg";
import ClientImg4 from "../assets/client-logo4.svg";
import ClientImg5 from "../assets/client-logo5.svg";
import ClientImg6 from "../assets/client-logo6.svg";

const ReviewSection = () => {
  return (
    <div className="w-full bg-[var(--nav-color)] py-[2rem]">
      <div className="container mx-auto p-4 lg:flex">
        <div className="mb-8 flex w-full items-center justify-center lg:mb-0">
          <div className="size-[370px] overflow-hidden rounded-2xl">
            <img
              src={ReviewImg}
              className="h-full w-full object-cover"
              alt="Tesla Logo"
            />
          </div>
        </div>

        <div className="lg:pl-6">
          <p className="text-[var(--context-color)]">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h1 className="my-4 text-[1.8rem] text-[var(--action-color)]">
            Tim Smith
          </h1>
          <p className="text-[var(--context-color)]">
            British Dragon Boat Racing Association
          </p>
          <div className="lg:flex lg:justify-between lg:pt-4">
            <div className="my-7 flex flex-1 justify-between lg:my-0 lg:pr-8">
              <img src={ClientImg1} alt="Icon 1" />
              <img src={ClientImg2} alt="Icon 2" />
              <img src={ClientImg3} alt="Icon 3" />
              <img src={ClientImg4} alt="Icon 4" />
              <img src={ClientImg5} alt="Icon 5" />
              <img src={ClientImg6} alt="Icon 6" />
            </div>

            <a
              href="#"
              className="my-4 flex items-center text-[1.8rem] text-[var(--action-color)] underline lg:my-0"
            >
              Meet all customers
              <GoArrowRight className="animate-shake animate-infinite animate-duration-1500 animate-ease-linear animate-fill-forwards ml-4 text-[2.5rem]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
