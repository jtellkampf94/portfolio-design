import NavBar from "../NavBar";

import "./index.scss";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header__image">
        <NavBar />

        <h1>Full Stack Web Developer & Web Designer</h1>
        <h2>
          Hi, I am Jonathan Tellkampf a full stack web developer and designer
          based in North London. I love to create beautiful websites for the
          web.
        </h2>
        <button>Contact Me</button>
      </div>
    </header>
  );
};

export default Header;
