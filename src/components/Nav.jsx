import React from "react";
import NavLogo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    <nav className="bg-[#F5F7FA]">
      <div className="container relative flex w-dvw justify-between h-21 items-center [&>*]:h-[max-content] mx-auto px-4">
        <div>
          <img src={NavLogo} alt="Nav Logo" />
        </div>
        <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-[960px]:block [&>*]:px-2 lg:[&>*]:px-3.5 xl:[&>*]:px-6  [&>*]:py-2 [&>*]:rounded-full [&>*]:mx-1 [&>*]:duration-300 [&>*]:hover:bg-[var(--action-lite)]">
          <a href="#home">Home</a>
          <a href="#service">Service</a>
          <a href="#feature">Feature</a>
          <a href="#product">Product</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="flex">
          <div className="hidden sm:block [&>*]:px-6 [&>*]:py-2 [&>*]:rounded-md [&>*]:mx-3 [&>*]:cursor-pointer">
            <button className="text-[var(--action-color)] duration-300 cursor-pointer border border-transparent hover:border-[var(--action-color)]">
              Login
            </button>

            <button className="text-white duration-300 hover:bg-[var(--action-dark)] bg-[var(--action-color)]">
              Sign up
            </button>
          </div>

          <div className="min-[960px]:hidden flex items-center ml-4">
            <RxHamburgerMenu className="size-8 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
