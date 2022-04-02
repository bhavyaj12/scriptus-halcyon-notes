import "./home-page.css";
import { LandingImg } from "../../assets";

const HomePage = () => {
    return (
        <div className="container-landing ">
            <img src={LandingImg} alt="girl notes" className="img-landing" />

            <div className="container-landing-text">
                <div className="heading-main">
                    <h1 className="h1">Meet your <span style={{color:"var(--cta-notes)"}}>Modern Note Taking App</span></h1>
                </div>
                <div className="subheading-main">
                    Scribble down all your unique and amazing ideas, give yourself a productivity boost by managing your task list and more, using Scriptus.
                </div>
                <div className="button-landing">
                    <a href="">
                        <button className="btn-notes-home btn-primary">Start Taking Notes</button>
                    </a>
                </div>
            </div>
        </div>
    )
};

export { HomePage };