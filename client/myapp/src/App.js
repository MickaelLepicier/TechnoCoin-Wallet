import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home.js";
import { PageTwo } from "./pages/pageTwo/PageTwo.js";
import { MenuBar } from "./components/menuBar/MenuBar.js";
import { Footer } from "./components/footer/Footer.js";
import "./App.css";
import { ActionPage } from "./pages/actionPage/ActionPage.js";
import { AnotherActionPage } from "./pages/anotherActionPage/AnotherActionPage.js";
// import { useState } from "react";

function App() {
  // const [darkModeOn, setDarkModeOn] = useState(false);

  return (
    <div className="app-container">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageTwo" element={<PageTwo />} />
        <Route path="/actionPage" element={<ActionPage />} />
        <Route path="/anotherActionPage" element={<AnotherActionPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
