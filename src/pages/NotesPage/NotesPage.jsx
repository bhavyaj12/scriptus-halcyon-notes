import { useNote } from "../../contexts";
import { NavSide, NoteCard, AddNote, Modal } from "../../components";
import "./notes-page.css";

const NotesPage = () => {
  const {
    noteState: { notes, showModal },
  } = useNote();
  return (
    <main className="grid-col-2">
      <div className="grid-col-item">
        <NavSide />
      </div>
      <div className="grid-col-item flex-col">
        <section className="notes-editor-container">
          <AddNote />
          <section className="notes-display">
            {notes.length > 0 ? (
              notes.map((item) => <NoteCard note={item} key={item._id} />)
            ) : (
              <h3 className="h3">Saved Notes appear here</h3>
            )}
          </section>
        </section>
      </div>
      {showModal && <Modal />}
    </main>
  );
};

export { NotesPage };
