import "./index.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="#header">
          <img
            src="abcd"
            alt="Jonathan Tellkampf Logo"
            className="navbar__logo"
          />
        </a>

        <div className="navbar__nav-container">
          <ul className="navbar__nav">
            <li className="navbar__nav-item">
              <a href="#about">About Me</a>
            </li>

            <li className="navbar__nav-item">
              <a href="#skills">Skills</a>
            </li>

            <li className="navbar__nav-item">
              <a href="#work">Work</a>
            </li>

            <li className="navbar__nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
