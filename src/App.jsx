import Clients from "./components/Clients";
import GrothSection from "./components/GrothSection";
import HeroSection from "./components/HeroSection";
import LearnMore from "./components/LearnMore";
import Nav from "./components/Nav";

import LearnMore0 from "./assets/LearnMoreFrames1/learn0.svg";
import LearnMore1 from "./assets/LearnMoreFrames1/learn1.svg";
import LearnMore2 from "./assets/LearnMoreFrames1/learn2.svg";
import LearnMore3 from "./assets/LearnMoreFrames1/learn3.svg";

import LoginMobile0 from "./assets/LearnMoreFrames2/frame0.svg";
import LoginMobile1 from "./assets/LearnMoreFrames2/frame1.svg";
import LoginMobile2 from "./assets/LearnMoreFrames2/frame2.svg";
import LoginMobile3 from "./assets/LearnMoreFrames2/frame3.svg";

import ReviewSection from "./components/ReviewSection";
import IdeasSection from "./components/IdeasSection";
import LastSection from "./components/LastSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Clients />
      <LearnMore
        img0={LearnMore0}
        img1={LearnMore1}
        img2={LearnMore2}
        img3={LearnMore3}
        heading="The unseen of spending three years at Pixelgrade"
        context="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
      />
      <GrothSection />
      <LearnMore
        img0={LoginMobile0}
        img1={LoginMobile1}
        img2={LoginMobile2}
        img3={LoginMobile3}
        animation="animate-wiggle animate-infinite animate-duration-[3000ms]"
        heading="How to design your site footer like we did"
        context="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
      />
      <ReviewSection />
      <IdeasSection />
      <LastSection />
      <Footer />
    </>
  );
}

export default App;
