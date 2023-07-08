import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import SelectedWork from "./Components/Projects/SelectedWork";
import IllusGallery from "./Components/IllusGallery/IllusGallery";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import CovidSupport from "./Components/Projects/CSupport/CovidSupport";
import ClimateDonor from "./Components/Projects/Climate Donor/Climate Donor";
import Storefront from "./Components/Projects/PTC/Storefront";
import "./App.scss"
import Password from "./Components/Password";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SelectedWork />
      <Footer />
    </div>
  )
};

const Illustrationpage = () => {
  return (
    <div>
      <Navbar />
      <IllusGallery />
      <Footer />
    </div>
  )
};

const Aboutpage = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  )
};

const Storefrontcase = () => {
  return (
    <div>
      <Navbar />
      <Storefront />
      <Footer />
    </div>
  )
}

const ClimateDonorcase = () => {
  return (
    <div>
      <Navbar />
      <ClimateDonor />
      <Footer />
    </div>
  )
}

const CScase = () =>{
  return (
    <div>
      <Navbar />
      <CovidSupport />
      <Footer />
    </div>
  )
}

const Passwordpage = () => {
  return (
    <div>
      <Navbar />
      <Password />
    </div>
  )
}

export { Home, Illustrationpage, Aboutpage, Storefrontcase, ClimateDonorcase, CScase, Passwordpage };
