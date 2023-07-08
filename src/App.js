import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SelectedWork from "./SelectedWork";
import Gallery from "./Gallery";
import Footer from "./Footer";
import About from "./About";
import CovidSupport from "./CovidSupport";
import ClimateDonor from "./Climate Donor";
import PTC from "./PTC";
import Writing from "./Writing";
import "./App.scss"
// import Password from "./Password";
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import Themer from "./Themer";
dotenv.config();

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

const Playpage = () => {
  return (
    <div>
      <Navbar />
      <Gallery />
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

const PTCcase = () => {
  return (
    <div>
      <Navbar />
      <PTC />
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

const CScase = () => {
  return (
    <div>
      <Navbar />
      <CovidSupport />
      <Footer />
    </div>
  )
}

const Themercase = () => {
  return (
    <div>
      <Navbar />
      <Themer />
      <Footer />
    </div>
  )
}

// const Passwordpage = ({ setIsAuthed }) => {
//   return (
//     <div>
//       <Navbar />
//       <Password setIsAuthed={setIsAuthed} />
//     </div>
//   )
// }

const Writingpage = () => {
  return (
    <div>
      <Navbar />
      <Writing />
      <Footer />
    </div>
  )
}

const Missing = () => {
  return (
    <div>
      <Navbar />
      <div class="page-not-found">
        <h1>404. Page not found.</h1>
      </div>
    </div>
  )
}

export { Home, Aboutpage, Playpage, ClimateDonorcase, CScase, PTCcase, Writingpage, Missing, Themercase };
