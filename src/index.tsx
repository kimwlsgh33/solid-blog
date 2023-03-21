/* @refresh reload */
import "./index.css";
import { render } from "solid-js/web";

import App from "./App";
import { Route, Router, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

const root = document.getElementById("root");

const About = lazy(() => import("./screens/About"));
const Contact = lazy(() => import("./screens/Contact"));

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?",
  );
}

render(() => (
  <Router>
    <Routes>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Routes>
  </Router>
), root!);
