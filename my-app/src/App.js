import React from "react";
//import components
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
    </main>
  );
}