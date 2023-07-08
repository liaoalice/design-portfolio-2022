import React from 'react';
import ReactDOM from 'react-dom';
import ReactBreakpoints from 'react-breakpoints'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Aboutpage, Playpage, ClimateDonorcase, CScase, PTCcase, Missing, Writingpage, Themercase } from './App';
import ScrollToTop from './ScrollToTop';
// import ProtectedRoutes from './ProtectedRoutes';



const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
}

ReactDOM.render(
  <ReactBreakpoints breakpoints={breakpoints}>
    <Router>
      <ScrollToTop />
      <Routes>
        {/* public routes */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<Aboutpage />} />
        <Route exact path="/play" element={<Playpage />} />

        {/* Case Studies */}
        <Route exact path="/work/ptc-tile" element={<PTCcase />} />
        <Route exact path="/work/climate-donor" element={<ClimateDonorcase />} />
        <Route exact path="/work/covidsupport" element={<CScase />} />
        <Route exact path="/work/ptc-themer" element={<Themercase />} />

        {/* protected routes */}
        {/* <Route element={AuthyComponent} /> */}

        {/* Blog */}
        <Route exact path="/writing" element={<Writingpage />} />

        {/*404 page*/}
        <Route path="*" element={<Missing />} />
      </Routes>
    </Router>,
  </ReactBreakpoints>,
  document.getElementById('root')
);
