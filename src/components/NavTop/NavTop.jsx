import { Link, useNavigate } from "react-router-dom";
import { ScriptusLogo } from "../../assets";
import { useAuth, useNote } from "../../contexts";
import "./nav-top.css";

const NavTop = () => {
  const { auth, setAuth } = useAuth();
  const { noteState, noteDispatch } = useNote();
  const redirect = useNavigate();

  const signOutFunc = (setAuth) => {
    localStorage.removeItem("SCRIPTUS_AUTH_TOKEN");
    localStorage.removeItem("scriptus_user");
    setAuth({
      isAuth: false,
      token: null,
      user: {},
    });
    noteDispatch({type: "RESET_NOTES"})
    redirect("/login");
  };

  return (
    <header id="simple-nav-header">
      <nav className="simple-nav-bar">
        <div className="nav-logo-box">
          <Link to="/">
            <img src={ScriptusLogo} alt="logo" className="simple-nav-logo" />
          </Link>
        </div>
        <div className="simple-nav">
          <ul className="simple-nav-links ul-no-decor display-flex">
            <li className="notes-nav-item">
              <Link to="/" className="btn">
                Home
              </Link>
            </li>
            {auth.isAuth === true ? (
              <>
                <li className="notes-nav-item">
                  <Link to="/addnote" className="btn">
                    Add Note
                  </Link>
                </li>
                <li className="notes-nav-item">
                  <button
                    className="btn btn-logout"
                    onClick={() => signOutFunc(setAuth)}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="notes-nav-item">
                <Link to="/login" className="btn">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export { NavTop };
