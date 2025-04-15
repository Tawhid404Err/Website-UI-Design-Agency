import Card2 from "./Card2";
import IdeaImg1 from "../assets/Card-image1.avif";
import IdeaImg2 from "../assets/Card-image2.avif";
import IdeaImg3 from "../assets/Card-image3.avif";

const IdeasSection = () => {
  return (
    <div className="container mx-auto">
      <h1 className="p-4 pb-0 text-center text-[44px] text-[var(--headin-text)]">
        Caring is the new marketing
      </h1>
      <p className="text-[var(--context-color) p-4 text-center sm:mx-auto sm:w-[38rem]">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.​
      </p>
      <div className="flex flex-col items-center gap-4 py-4 pt-8 lg:flex-row lg:justify-evenly [&>*]:h-[max-content] [&>*]:w-full sm:[&>*]:w-[350px] lg:[&>*]:w-[320px]">
        <div>
          <Card2
            img={IdeaImg1}
            context="Creating Streamlined Safeguarding Processes with OneRen"
          />
        </div>
        <div>
          <Card2
            img={IdeaImg2}
            context="What are your safeguarding responsibilities and how can you manage them?"
          />
        </div>
        <div>
          <Card2
            img={IdeaImg3}
            context="Revamping the Membership Model with Triathlon Australia"
          />
        </div>
      </div>
    </div>
  );
};

export default IdeasSection;
