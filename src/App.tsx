import { Application } from "@splinetool/runtime";

import Logo from "./assets/icons/logo.svg";
import Desktop from "./assets/icons/icon-laptop.svg";
import Youtube from "./assets/icons/icon-youtube.svg";
import Twitter from "./assets/icons/icon-twitter.svg";

export default function App() {
  // for spline screen
  const canvas = document.createElement("canvas");
  if (canvas === null) return <div>canvas is null</div>;
  const app = new Application(canvas);
  app.load("https://prod.spline.design/jlrOy04cRrMlIiWT/scene.splinecode");

  return (
    <div>
      <div class="absolute t-0 r-0">{canvas}</div>
      <div class="absolute t-0 ml-20 mt-20">
        <h1 class="text-white text-5xl mb-5">
          Hello, World! 👋
        </h1>
        <p class="text-white font-bold max-w-xs leading-loose mb-10">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <button class="bg-custom flex items-center space-x-2 rounded-md px-1 mb-2 border-1 border-slate-900 hover:border-slate-300">
          <img class="w-10" src={Twitter} alt="Youtube" />
          <span class="text-white hover:font-bold">Tweet</span>
        </button>
        <button class="bg-custom flex items-center space-x-2 rounded-md px-1 mb-2">
          <img class="w-10" src={Youtube} alt="Youtube" />
          <span class="text-white">Subscribe</span>
        </button>
        <button class="bg-custom flex items-center space-x-2 rounded-md px-1 ">
          <img class="w-10" src={Desktop} alt="Youtube" />
          <span class="text-white">Download for Mac</span>
        </button>
      </div>
    </div>
  );
}
