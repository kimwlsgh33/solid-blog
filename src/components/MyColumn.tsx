import { Component } from "solid-js";

const MyColumn: Component = () => {
  return (
    <div class="column-3">
      <img
        class="w-full aspect-video"
        src="https://raw.githubusercontent.com/solidjs/solid/master/assets/logo.png"
        alt="SolidJS"
      />
    </div>
  );
};

export default MyColumn;
