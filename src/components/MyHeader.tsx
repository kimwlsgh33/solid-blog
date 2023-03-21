import { Component } from "solid-js";
import { A } from "@solidjs/router"; // 👈 Import the A component
import Logo from "../assets/icons/logo.svg";

const MyHeader: Component = () => {
  return (
    <header class="flex items-center space-x-14">
      <A
        href="/"
        activeClass="underlined"
      >
        <img class="w-10" src={Logo} alt="Logo" />
      </A>
      {[
        ["Contact", "/contact"],
        ["Download", "/download"],
        ["My App", "/my-app"],
        ["Login", "/login"],
      ].map(([title, href]) => (
        <A
          class="max-md:hidden"
          href={href}
          activeClass="underlined"
        >
          {title}
        </A>
      ))}
      <A
        class="bg-[#0D112B]/50 p-3 rounded-lg"
        href="/get-started"
        activeClass="underlined"
      >
        Get Started
      </A>
    </header>
  );
};

export default MyHeader;
