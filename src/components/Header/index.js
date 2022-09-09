import NavBar from "../NavBar";

import "./index.scss";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header__image">
        <div className="header__title ">
          <h5>Jonathan Tellkampf</h5>
          <h1>Full Stack Web Developer</h1>
          <h2>I create beautiful and functional websites for the web.</h2>
          <a href="#contact">
            <button>Contact Me</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
