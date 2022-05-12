import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNote, useAuth } from "../../contexts";
import { sortDateTime, fetchNotes } from "../../utilities";
import { NavSide, NoteCard, AddNote, Modal } from "../../components";
import "./notes-page.css";

const NotesPage = () => {
  const {
    noteState: { notes, showModal, sortByDateTime },
    noteDispatch,
  } = useNote();

  useEffect(() => {
    (async () => {
      const notes = await fetchNotes();
      noteDispatch({ type: "FETCH_NOTES", payload: notes });
    })();
  }, []);

  const sortedNotes = sortDateTime(notes, sortByDateTime);
  return (
    <main className="grid-col-2">
      <div className="grid-col-item">
        <NavSide />
      </div>
      <div className="grid-col-item flex-col">
        <section className="notes-editor-container">
          <div className="filter-container flex-row">
            <h5 className="h5">Sort By:</h5>
            <div className="radio-container">
              <label htmlFor="latest-first">Latest First</label>
              <input
                type="radio"
                id="latest-first"
                name="notes-sort-date"
                className="mx-3"
                value="new-to-old"
                checked={sortByDateTime === "NEWEST_FIRST"}
                onChange={(e) =>
                  noteDispatch({
                    type: "SORT_BY_CREATED_ON",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className="radio-container">
              <label htmlFor="oldest-first">Oldest First</label>
              <input
                type="radio"
                id="oldest-first"
                name="notes-sort-date"
                className="mx-3 text-normal"
                value="old-to-new"
                checked={sortByDateTime === "OLDEST_FIRST"}
                onChange={(e) =>
                  noteDispatch({
                    type: "SORT_BY_CREATED_ON",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <p
              className="button button-link"
              onClick={() => {
                noteDispatch({ type: "SORT_BY_CREATED_ON", payload: "" });
              }}
            >
              Clear
            </p>
          </div>
          <AddNote />
          <section className="notes-display">
            {sortedNotes.length > 0 ? (
              sortedNotes.map((item) => <NoteCard note={item} key={item._id} />)
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
