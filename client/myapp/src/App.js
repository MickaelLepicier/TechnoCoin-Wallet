import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home.js";
import { PageTwo } from "./pages/pageTwo/PageTwo.js";
import { MenuBar } from "./components/menuBar/MenuBar.js";
import { Footer } from "./components/footer/Footer.js";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageTwo" element={<PageTwo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

/*

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Events from "./pages/events";
import AnnualReport from "./pages/annual";
import Teams from "./pages/team";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/annual" component={AnnualReport} />
        <Route path="/team" component={Teams} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/sign-up" component={SignUp} />
      </Routes>
    </Router>
  );
}

export default App;
*/
