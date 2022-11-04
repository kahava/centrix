import Home from "../components/Home";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import { useState } from "react";
import MobileNav from "../components/MobileNav";
import About from "../components/About";
import ContactUs from "../components/Contact";
import Work from "../components/Work";
import Technology from "../components/Technology";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNav toggle={toggle} isOpen={isOpen} /> <Nav toggle={toggle} />{" "}
      <Home />
      <About />
      <Work />
      <Technology />
      <Portfolio />
      <ContactUs />
    </>
  );
}
