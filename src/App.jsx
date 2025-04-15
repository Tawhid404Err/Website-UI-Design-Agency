import Clients from "./components/Clients";
import GrothSection from "./components/GrothSection";
import HeroSection from "./components/HeroSection";
import LearnMore from "./components/LearnMore";
import Nav from "./components/Nav";

import LoginMobile from "./assets/rafiki.svg";
import LoginMobile2 from "./assets/login-mobile.svg";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Clients />
      <LearnMore
        img={LoginMobile}
        heading="The unseen of spending three years at Pixelgrade"
        context="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
      />
      <GrothSection />
      <LearnMore
        img={LoginMobile2}
        heading="How to design your site footer like we did"
        context="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
      />
    </>
  );
}

export default App;
