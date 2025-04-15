import ClientImg1 from "../assets/client-logo1.svg";
import ClientImg2 from "../assets/client-logo2.svg";
import ClientImg3 from "../assets/client-logo3.svg";
import ClientImg5 from "../assets/client-logo5.svg";
import ClientImg6 from "../assets/client-logo6.svg";
import ClientImg7 from "../assets/client-logo7.svg";
import Card1 from "./Card1";

import ClientIcon1 from "../assets/client-icon1.svg";
import ClientIcon2 from "../assets/client-icon2.svg";
import ClientIcon3 from "../assets/client-icon3.svg";

const Clients = () => {
  return (
    <div className="mt-8 w-full bg-[var(--nav-color)]">
      <div className="container mx-auto w-dvw py-8">
        <div className="mb-8 px-4 text-center">
          <h1 className="text-[44px] text-[var(--headin-text)]">Our Clients</h1>
          <p className="text-[var(--context-color)]">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <div className="w-full py-4 sm:flex [&>*]:flex [&>*]:justify-evenly [&>*]:py-2 sm:[&>*]:w-full">
          <span>
            <img
              className="box-shaddow-card rounded-2xl"
              src={ClientImg1}
              alt="OD"
            />
            <img
              className="box-shaddow-card rounded-2xl"
              src={ClientImg2}
              alt="ParDocs"
            />
          </span>

          <span>
            <img
              className="box-shaddow-card rounded-2xl"
              src={ClientImg3}
              alt="Synchro"
            />
            <img
              className="box-shaddow-card rounded-2xl"
              src={ClientImg5}
              alt="Apex Low-Code Solutions "
            />
          </span>

          <span>
            <img
              className="box-shaddow-card rounded-2xl"
              src={ClientImg6}
              alt="ArcX Protocol"
            />
            <img
              className="box-shaddow-card rounded-2xl"
              src={ClientImg7}
              alt="Synchro"
            />
          </span>
        </div>

        <div className="mt-12">
          <h1 className="mx-auto mb-4 px-4 text-center text-[44px] leading-[3.5rem] text-[var(--headin-text)] md:w-[45rem]">
            Manage your entire community in a single system
          </h1>
          <p className="text-center text-[var(--context-color)]">
            Who is Nextcent suitable for?
          </p>
        </div>

        <div className="my-8 block lg:flex lg:justify-evenly [&>*]:mx-auto [&>*]:my-4">
          <Card1
            icon={ClientIcon1}
            heading="Membership Organisations"
            context="Our membership management software provides full automation of membership renewals and payments"
          />
          <Card1
            icon={ClientIcon2}
            heading="National Associations"
            context="Our membership management software provides full automation of membership renewals and payments"
          />
          <Card1
            icon={ClientIcon3}
            heading="Clubs And Groups"
            context="Our membership management software provides full automation of membership renewals and payments"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
