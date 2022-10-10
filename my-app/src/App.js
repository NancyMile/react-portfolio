import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}