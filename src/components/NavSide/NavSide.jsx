import { Link } from "react-router-dom";
import {
  HomeRoundedIcon,
  LabelRoundedIcon,
  ArchiveRoundedIcon,
  DeleteRoundedIcon,
} from "../../components";
import "./nav-side.css";

const NavSide = () => {
  return (
    <nav className="navbar-side" id="aside">
      <div className="subheading-navside">
        <Link to="/addnote" className="link-no-decor">
          <div className="flex-row p-5 m-5">
            <HomeRoundedIcon />
            <span>Notes</span>
          </div>
        </Link>
        <a className="link-no-decor" href="">
        <div className="flex-row p-5 m-5">
            <LabelRoundedIcon />
            <span>Labels</span>
          </div>
        </a>
        <Link to="/archive" className="link-no-decor">
        <div className="flex-row p-5 m-5">
            <ArchiveRoundedIcon />
            <span>Archive</span>
          </div>
        </Link>
        <Link to="/trash" className="link-no-decor">
        <div className="flex-row p-5 m-5">
            <DeleteRoundedIcon />
            <span>Trash</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export { NavSide };
