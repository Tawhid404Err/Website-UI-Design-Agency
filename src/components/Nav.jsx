import React, { useState } from "react";
import NavLogo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [top, setTop] = useState("top-[-170px] min-[640px]:top-[-154px]");
  const [menuIcon, setMenuIcon] = useState("block");
  const [closeMenuIcon, setCloseMenuIcon] = useState("hidden");

  function handleMenu() {
    if (toggleMenu == false) {
      setToggleMenu(true);
      setMenuIcon("hidden");
      setCloseMenuIcon("block");
      setTop("top-[266px] min-[640px]:top-[237px] duration-500");
    } else {
      setTop("top-[-170px] min-[640px]:top-[-154px] duration-500");

      setMenuIcon("block");
      setCloseMenuIcon("hidden");
      setToggleMenu(false);
    }
  }

  return (
    <nav className="border border-gray-300 bg-[var(--nav-color)]">
      <div className="relative container mx-auto flex h-21 w-dvw items-center justify-between px-4 [&>*]:h-[max-content]">
        <div>
          <img src={NavLogo} alt="Nav Logo" />
        </div>
        <div
          className={`${top} absolute left-1/2 z-[-1] flex w-dvw -translate-x-1/2 -translate-y-1/2 flex-col items-center bg-[var(--nav-color)] py-2 min-[960px]:top-1/2 min-[960px]:z-[1] min-[960px]:block min-[960px]:w-[max-content] [&>a]:my-1 [&>a]:rounded-full [&>a]:px-4 [&>a]:py-2 [&>a]:duration-300 [&>a]:hover:bg-[var(--action-lite)] [&>a]:focus:bg-[var(--action-lite)] min-[960px]:[&>a]:mx-1 min-[960px]:[&>a]:px-2 lg:[&>a]:px-3.5 xl:[&>a]:px-6`}
        >
          <a href="#home">Home</a>
          <a href="#service">Service</a>
          <a href="#feature">Feature</a>
          <a href="#product">Product</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#faq">FAQ</a>
          <div className="my-2 block sm:hidden [&>*]:mx-3 [&>*]:cursor-pointer [&>*]:rounded-md [&>*]:px-6 [&>*]:py-2">
            <button className="cursor-pointer border border-transparent text-[var(--action-color)] duration-300 hover:border-[var(--action-color)] focus:border-[var(--action-color)]">
              Login
            </button>

            <button className="bg-[var(--action-color)] text-white duration-300 hover:bg-[var(--action-dark)] focus:bg-[var(--action-dark)]">
              Sign up
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="hidden sm:block [&>*]:mx-3 [&>*]:cursor-pointer [&>*]:rounded-md [&>*]:px-6 [&>*]:py-2">
            <button className="cursor-pointer border border-transparent text-[var(--action-color)] duration-300 hover:border-[var(--action-color)]">
              Login
            </button>

            <button className="bg-[var(--action-color)] text-white duration-300 hover:bg-[var(--action-dark)]">
              Sign up
            </button>
          </div>

          <div className="ml-4 flex items-center min-[960px]:hidden">
            <RxHamburgerMenu
              onClick={handleMenu}
              className={`${menuIcon} size-8 cursor-pointer`}
            />

            <MdClose
              onClick={handleMenu}
              className={`${closeMenuIcon} size-8 cursor-pointer`}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
