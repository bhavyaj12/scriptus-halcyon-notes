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
        <a className="link-no-decor" href="">
          <div className="flex-row p-5 m-5">
            <HomeRoundedIcon />
            <span>Home</span>
          </div>
        </a>
        <a className="link-no-decor" href="">
        <div className="flex-row p-5 m-5">
            <LabelRoundedIcon />
            <span>Labels</span>
          </div>
        </a>
        <a className="link-no-decor" href="">
        <div className="flex-row p-5 m-5">
            <ArchiveRoundedIcon />
            <span>Archive</span>
          </div>
        </a>
        <a className="link-no-decor" href="">
        <div className="flex-row p-5 m-5">
            <DeleteRoundedIcon />
            <span>Trash</span>
          </div>
        </a>
      </div>
    </nav>
  );
};

export { NavSide };
