import React from 'react';
import ReactDOM from 'react-dom';
import ReactBreakpoints from 'react-breakpoints'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Aboutpage, Storefrontcase, ClimateDonorcase, CScase, Illustrationpage, Passwordpage } from './App';
import ScrollToTop from './Components/ScrollToTop';
import ProtectedRoutes from './ProtectedRoutes';

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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Aboutpage />} />
          <Route exact path="/play" element={<Illustrationpage />} />
          <Route element={<ProtectedRoutes /> && <Passwordpage/>}>
            <Route exact path="/work/ptc" element={<Storefrontcase />} />
          </Route>
          <Route exact path="/work/climate-donor" element={<ClimateDonorcase />} />
          <Route exact path="/work/covidsupport" element={<CScase />} />
        </Routes>
    </Router>,
  </ReactBreakpoints>,
  document.getElementById('root')
);
