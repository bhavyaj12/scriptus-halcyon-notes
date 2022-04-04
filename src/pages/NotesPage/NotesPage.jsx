import { NavSide } from "../../components";
import "./notes-page.css";

const NotesPage = () => {
  return (
    <main className="grid-col-2">
      <div className="grid-col-item">
        <NavSide />
      </div>
      <div className="grid-col-item">
        <h1>Here you take the notes</h1>
      </div>
    </main>
  );
};

export { NotesPage };
