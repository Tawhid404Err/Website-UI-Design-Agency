import grothIcon1 from "../assets/groth-icon1.svg";
import grothIcon2 from "../assets/groth-icon2.png";
import grothIcon3 from "../assets/groth-icon3.svg";
import grothIcon4 from "../assets/groth-icon4.svg";

const GrothSection = () => {
  return (
    <div className="w-full bg-[var(--nav-color)] p-4">
      <div className="container mx-auto flex flex-col py-10 lg:flex-row lg:justify-evenly">
        <div className="mt-10 lg:mt-0">
          <h1 className="mb-4 text-[44px] leading-[3.2rem] text-[var(--headin-text)] lg:leading-normal">
            Helping a local
            <div className="text-[var(--action-color)]">
              business reinvent itself
            </div>
          </h1>
          <p className="mb-[18px] text-[var(--context-color)]">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="flex justify-between [&>div>div>div>h1]:text-[1.8rem] [&>div>div>div>h1]:text-[var(--headin-text)] [&>div>div>div>p]:text-[var(--context-color)]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div>
                <img src={grothIcon1} alt="" />
              </div>

              <div>
                <h1>2,245,341</h1>
                <p className="text-[18px]">Members</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <img src={grothIcon2} alt="" />
              </div>

              <div>
                <h1>46,328</h1>
                <p className="text-[18px]">Clubs</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div>
                <img src={grothIcon3} alt="" />
              </div>

              <div>
                <h1>828,867</h1>
                <p className="text-[18px]">Event Bookings</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <img src={grothIcon4} alt="" />
              </div>

              <div>
                <h1>1,926,436</h1>
                <p className="text-[18px]">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrothSection;
