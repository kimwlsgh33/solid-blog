import { Component } from "solid-js";
import Twitter from "../assets/icons/icon-twitter.svg";
import Youtube from "../assets/icons/icon-youtube.svg";

const Social: Component = () => {
  return (
    <div class="absolute top-40 left-5 flex-col gap-3 flex items-center max-lg:hidden">
      <div class="w-px h-[40rem] bg-gradient-to-r from-violet-500 to-fuchsia-500">
      </div>
      <button class="bg-custom flex items-center space-x-2 rounded-md px-1 mb-2 border-1 border-slate-900 hover:border-slate-300 transition ease-in-out delay-150 duration-300 hover:-translate-y-1">
        <img src={Twitter} alt="Twitter" />
      </button>
      <button class="bg-custom flex items-center space-x-2 rounded-md px-1 mb-2 border-1 border-slate-900 hover:border-slate-300 transition ease-in-out delay-150 duration-300 hover:-translate-y-1">
        <img src={Youtube} alt="Youtube" />
      </button>
    </div>
  );
};

export default Social;
