import { Component } from "solid-js";

const MyVideo: Component = () => {
  return (
    <iframe
      class="w-full aspect-video hover:aspect-square"
      src="https://www.youtube.com/embed/4UZrsTqkcW4"
      allowfullscreen
    >
    </iframe>
  );
};

export default MyVideo;
