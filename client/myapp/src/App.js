import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home.js";
import { PageTwo } from "./pages/PageTwo/PageTwo.js";
import { MenuBar } from "./pages/MenuBar/MenuBar.js";
import { Footer } from "./pages/Footer/Footer.js";
// import "./App.css";

function App() {
  return (
    <div className="app-container">
      BLA
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
