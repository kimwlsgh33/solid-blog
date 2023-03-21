import { Component } from "solid-js";
import styles from "../styles/App.module.css";
import { A } from "@solidjs/router"; // 👈 Import the A component

const MyHeader: Component = () => {
  return (
    <header class="p-6 items-center rounded-xl shadow-lg flex place-content-between">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <div class="space-x-4">
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <A
          class={styles.link}
          href="/about"
          activeClass="underlined"
        >
          About
        </A>
        {/* 👈 Add a link to the about page */}
        <A
          class={styles.link}
          href="/contact"
          activeClass="underlined"
        >
          Contact
        </A>
        {/* 👈 Add a link to the contact page */}
      </div>
    </header>
  );
};

export default MyHeader;
