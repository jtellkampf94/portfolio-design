import NavBar from "../NavBar";
import Header from "../Header";
import About from "../About";
import Skills from "../Skills";
import Work from "../Work";
import Contact from "../Contact";

import "./index.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
