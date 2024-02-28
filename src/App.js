import { Route, Routes } from "react-router-dom";

// IMPORT PAGES
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Project";
import Skills from "./pages/Skills/Skills";

function App() {
  // URL should have YOUR HEROKU URL for your backend (will build later), make sure you include the trailing slash
  const URL = "http://localhost:4000/";

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects URL={URL} />} />
        <Route path="/about" element={<About URL={URL} />} />
        <Route path="/skills" element={<Skills URL={URL} />} />
      </Routes>
    </div>
  );
}

export default App;
