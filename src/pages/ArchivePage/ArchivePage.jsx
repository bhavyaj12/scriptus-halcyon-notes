import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { fetchArchivedNotes } from "../../utilities";
import { useNote } from "../../contexts";
import { NavSide, NoteCard } from "../../components";
import "../NotesPage/notes-page.css";

const ArchivePage = () => {
  const {
    noteState: { notesArchive },
    noteDispatch,
  } = useNote();

  useEffect(() => {
    (async () => {
      const archivedNotes = await fetchArchivedNotes();
      noteDispatch({ type: "FETCH_ARCHIVED_NOTES", payload: archivedNotes });
    })();
  }, []);

  const { pathname } = useLocation();
  return (
    <main className="grid-col-2">
      <div className="grid-col-item">
        <NavSide />
      </div>
      <div className="grid-col-item flex-col">
        <h1 className="h1">Archived Notes</h1>
        <section className="notes-display">
          {notesArchive.length > 0 ? (
            notesArchive.map((item) => (
              <NoteCard note={item} key={item._id} pathname={pathname} />
            ))
          ) : (
            <h3 className="h3">No archived notes</h3>
          )}
        </section>
      </div>
    </main>
  );
};

export { ArchivePage };
