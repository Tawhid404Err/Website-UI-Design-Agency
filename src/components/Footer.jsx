import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaPaperPlane } from "react-icons/fa";

import FooterImg from "../assets/footer-logo.svg";

const Footer = () => {
  return (
    <div className="w-full bg-[var(--footer-color)] p-4">
      <div className="container mx-auto">
        <div className="md:flex md:justify-between">
          <div className="py-8 md:flex-1">
            <div>
              <img src={FooterImg} alt="" />
            </div>

            <div className="my-8 flex gap-4 [&>*]:rounded-full [&>*]:border [&>*]:border-[var(--action-color)] [&>*]:p-2 [&>a]:[&>*]:size-6 [&>a]:[&>*]:fill-[white]">
              <a
                href="#"
                className="duration-300 hover:bg-[var(--headin-text)]"
              >
                <SlSocialInstagram />
              </a>
              <a
                href="#"
                className="duration-300 hover:bg-[var(--headin-text)]"
              >
                <SlSocialFacebook />
              </a>
              <a
                href="#"
                className="duration-300 hover:bg-[var(--headin-text)]"
              >
                <SlSocialLinkedin />
              </a>
              <a
                href="#"
                className="duration-300 hover:bg-[var(--headin-text)]"
              >
                <SlSocialTwitter />
              </a>
            </div>

            <div>
              <h1 className="mb-2 text-[1.5rem] text-white">Stay up to date</h1>
              <div className="flex h-[2.7rem] w-full overflow-hidden rounded-[10px] border border-[var(--action-color)] bg-[var(--input-box)]">
                <input
                  className="flex-1 px-2 text-[var(--footer-link)] focus:outline-none"
                  type="email"
                  placeholder="Drop Your Email ...."
                />
                <button className="bg-[var(--action-color)] px-3 hover:cursor-pointer hover:bg-[#4caf4fb7] hover:duration-200">
                  <FaPaperPlane className="size-6 h-full fill-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="md:flex md:flex-2 md:justify-evenly">
            <div className="mb-4 flex flex-col md:mb-0 md:py-8 [&>a]:w-[max-content] [&>a]:text-[var(--footer-link)]">
              <h1 className="mb-2 text-[1.5rem] text-white">Company</h1>

              <a href="#">About us</a>
              <a href="">Blog</a>
              <a href="">Contact us</a>
              <a href="">Pricing</a>
              <a href="">Testimonials</a>
            </div>

            <div className="mb-4 flex flex-col md:mb-0 md:py-8 [&>a]:w-[max-content] [&>a]:text-[var(--footer-link)]">
              <h1 className="mb-2 text-[1.5rem] text-white">Support</h1>

              <a href="#">Help center</a>
              <a href="#">Terms of service</a>
              <a href="#">Legal</a>
              <a href="#">Privacy policy</a>
              <a href="#">Status</a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center border-t border-[var(--action-color)] pt-4 text-center text-white">
          © {new Date().getFullYear()} Tawhid Islam | All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
