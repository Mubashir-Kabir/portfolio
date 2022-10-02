import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Componants/Navbar/Navbar";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Portfolio from "./Pages/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
