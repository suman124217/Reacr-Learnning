import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import  "./navbar.css";
import myImage from "./assets/myImage.png";

function Home() {
  return (
    <Link to="/new">
      <img src={myImage} alt="New page" />    
    </Link>
  );
}

function About() {
  return <h1>Welcome to About</h1>;
}

function Contact() {
  return <h1>Welcome to Contact</h1>;
}

function New() {
  return <h2>Welcome to new page</h2>;
}
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;    