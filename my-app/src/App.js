import React from "react";
//import components
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

export default function App() {
  return (
    <main>
      <Navbar />
      <About Me />
      <Portfolio />
      <Contact me />
      <Resume />
    </main>
  );
}