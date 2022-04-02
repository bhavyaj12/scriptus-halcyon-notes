import { ScriptusLogo } from "../../assets";
import "./nav-top.css";

const NavTop = () => {
  return (
    <header id="simple-nav-header">
      <nav className="simple-nav-bar">
        <div className="nav-logo-box">
          <a href="./">
            <img src={ScriptusLogo} alt="logo" className="simple-nav-logo" />
          </a>
        </div>
        <div className="simple-nav">
          <ul className="simple-nav-links ul-no-decor display-flex">
            <li className="nav-search-bar">
              <input type="search" placeholder="Search" />
              <label className="search-bar-icon">
                <span className="fas fa-search"></span>
              </label>
            </li>
            <li className="notes-nav-item">
              <a href="" className="btn">
                Home
              </a>
            </li>
            <li className="notes-nav-item">
              <a href="" className="btn">
                Login
              </a>
            </li>
            <li className="notes-nav-item">
              <a href="" className="btn">
                Add Note
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export { NavTop };
