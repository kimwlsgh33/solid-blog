import { Application } from "@splinetool/runtime";

import Desktop from "./assets/icons/icon-laptop.svg";
import MyHeader from "./components/MyHeader";
import Social from "./components/Social";

export default function App() {
  // for spline screen
  const canvas = document.createElement("canvas");
  if (canvas === null) return <div>canvas is null</div>;
  const app = new Application(canvas);
  app.load("https://prod.spline.design/jlrOy04cRrMlIiWT/scene.splinecode");

  return (
    <div class="w-full h-fit text-white max-lg:-translate-x-5 max-md:-translate-x-12 origin-top">
      <div class="absolute t-0 r-0 max-lg:scale-[0.8] max-md:scale-[0.7] max-sm:scale-50 overflow-x-hidden">
        {canvas}
      </div>
      <div class="absolute top-12 left-20 space-y-10 ">
        <MyHeader />
        <h1 class="text-5xl leading-tight">
          Hello, World! 👋
        </h1>
      </div>
      <div class="absolute top-80 left-20 space-y-10">
        <p class="font-bold max-w-xs leading-loose ">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <button class="bg-gradient-to-r from-[#0D112B] flex items-center space-x-2 rounded-md p-1 border-1 border-slate-900 hover:border-slate-300 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 ">
          <img class="w-10" src={Desktop} alt="Desktop" />
          <span class="">Download for Mac</span>
        </button>
      </div>
      <Social />
    </div>
  );
}
