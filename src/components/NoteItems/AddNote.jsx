import { addNotes } from "../../utilities";
import { useNote } from "../../contexts";

import {
  LabelRoundedIcon,
  PushPinRoundedIcon,
} from "../../components";
import "./add-note.css";

const AddNote = () => {
  const emptyNote = {
    title: "",
    content: "",
  };
  const { note, setNote, noteDispatch } = useNote();

  const addNoteHandler = (e) => {
    e.preventDefault();
    if(!(note.title === "" && note.content === "")) {
      addNotes(noteDispatch, {note: note});
      setTimeout(() => {
        setNote(emptyNote);
      }, 1500)
    }
  }

  return (
    <form
      className="add-note-container flex-col mb-3 p-3"
      onSubmit={(e) => addNoteHandler(e)}
    >
      <PushPinRoundedIcon className="add-note-pin" />
      <input
        type="text"
        placeholder="Add title"
        className="add-note-title p-3"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <textarea
        className="add-note-content p-3"
        placeholder="Enter note..."
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
      ></textarea>
      <div className="add-note-footer flex-row my-3">
        <button type="submit" className="button btn-solid button-primary">Save Note</button>
        <div className="flex-row add-note-footer">
          <div className="flex-row add-note-icons">
            <LabelRoundedIcon className="icons-display"/>
          </div>
        </div>
      </div>
    </form>
  );
};

export { AddNote };
