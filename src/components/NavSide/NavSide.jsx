import { useNote } from "../../contexts";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeRoundedIcon,
  LabelRoundedIcon,
  ArchiveRoundedIcon,
  DeleteRoundedIcon,
} from "../../components";
import "./nav-side.css";

const NavSide = () => {
  const { noteState, noteDispatch } = useNote();
  const [addLabel, setAddLabel] = useState("");
  const [error, setError] = useState("");

  const createNewLabel = () => {
    addLabel !== ""
      ? noteDispatch({ type: "CREATE_LABEL", payload: addLabel })
      : setError("Can't add empty label");
    
    setTimeout(() => {
      setAddLabel("");
      setError("");
    }, 2000);
  };

  return (
    <nav className="navbar-side" id="aside">
      {error !== "" && <p className="alert-container alert-error">{error}</p>}
      <div className="subheading-navside">
        <Link to="/addnote" className="link-no-decor">
          <div className="flex-row p-5 m-5">
            <HomeRoundedIcon />
            <span>Notes</span>
          </div>
        </Link>
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
        <div className="flex-row p-5 m-5 label-nav">
          <LabelRoundedIcon />
          <span>Labels</span>
        </div>
        <div className="flex-col">
          {noteState.labels.map((label) => (
            <div key={label} className="label-nav-item m-1">
              {label}
            </div>
          ))}
        </div>
        <div className="flex-row create-label-row">
          <input
            className="create-label"
            placeholder="create label..."
            value={addLabel}
            onChange={(e) => setAddLabel(e.target.value)}
          />
          <button
            onClick={createNewLabel}
            className="button btn-solid button-primary"
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export { NavSide };
