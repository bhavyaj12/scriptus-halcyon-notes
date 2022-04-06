import { Link } from "react-router-dom";
import { LandingImg } from "../../assets";
import { Footer } from "../../components";
import { useAuth } from "../../contexts";
import "./home-page.css";

const HomePage = () => {
  const { auth, setAuth } = useAuth();

  return (
    <>
      <main className="page-container">
        <div className="container-landing ">
          <img src={LandingImg} alt="girl notes" className="img-landing" />

          <div className="container-landing-text">
            <div className="heading-main">
              <h1 className="h1">
                Meet your{" "}
                <span style={{ color: "var(--cta-notes)" }}>
                  Modern Note Taking App
                </span>
              </h1>
            </div>
            <div className="subheading-main">
              Scribble down all your unique and amazing ideas, give yourself a
              productivity boost by managing your task list and more, using
              Scriptus.
            </div>
            <div className="button-landing">
              {auth.isAuth === true ? (
                <Link to="/addnote">
                  <button className="btn-notes-home btn-primary">
                    Start Taking Notes
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="btn-notes-home btn-primary">
                    Start Taking Notes
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export { HomePage };
