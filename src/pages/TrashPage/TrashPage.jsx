import { useLocation } from "react-router-dom";
import { useNote } from "../../contexts";
import { NavSide, NoteCard } from "../../components";
import "../NotesPage/notes-page.css";

const TrashPage = () => {
  const {
    noteState: { notesTrash },
  } = useNote();

  const { pathname } = useLocation();
  return (
    <main className="grid-col-2">
      <div className="grid-col-item">
        <NavSide />
      </div>
      <div className="grid-col-item flex-col">
          <h1 className="h1">Trashed Notes (These will get deleted permanently after 30 days)</h1>
          <section className="notes-display">
            {notesTrash.length > 0 ? (
              notesTrash.map((item) => <NoteCard note={item} key={item._id} pathname={pathname} />)
            ) : (
              <h3 className="h3">No trashed notes</h3>
            )}
          </section>
      </div>
    </main>
  );
};

export { TrashPage };
