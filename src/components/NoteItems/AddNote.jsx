import { useState } from "react";
import { addNotes } from "../../utilities";
import { useNote } from "../../contexts";
import { ColorPalette } from "../../components";
import "../../styles/main.css";
import {
  LabelRoundedIcon,
  PushPinRoundedIcon,
  PaletteRoundedIcon,
} from "../../components";
import "./add-note.css";

const AddNote = () => {
  const emptyNote = {
    title: "",
    content: "",
    noteColor: "",
  };
  const { note, setNote, noteState, noteDispatch } = useNote();
  const [noteColor, setNoteColor] = useState("var(--cta-ultralight)");
  const [noteLabel, setNoteLabel] = useState("no-label");

  const getDate = () => {
    const date = new Date();
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth()+1;
    const year = date.getFullYear();
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const min =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${day}/${month}/${year}  ${hour}:${min}`;
  };

  const noteDate = getDate();

  const addNoteHandler = (e) => {
    e.preventDefault();
    if (!(note.title === "" && note.content === "")) {
      addNotes(noteDispatch, {
        note: {
          ...note,
          createdOn: noteDate,
          noteColor: noteColor,
          noteLabel: noteLabel,
        },
      });
      setTimeout(() => {
        setNote(emptyNote);
        setNoteColor("var(--cta-ultralight)");
        setNoteLabel("no-label");
      }, 1500);
    }
  };

  const noteFormColor =
    noteColor === "var(--cta-ultralight)" ? "white" : noteColor;

  return (
    <form
      className="add-note-container flex-col mb-3 p-3"
      onSubmit={(e) => addNoteHandler(e)}
      style={{
        backgroundColor: noteFormColor,
        boxShadow:
          "0px 0px 20px 0px rgba(0, 0, 0, 0.2), 15px 17px 60px var(--grey-bg)",
        width: "50%",
        height: "20rem",
        position: "relative",
        borderRadius: "0.5rem",
      }}
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
        <button type="submit" className="button btn-solid button-primary">
          Save Note
        </button>
        <div className="flex-row add-note-footer">
          <div className="flex-row add-note-icons">
            <PaletteRoundedIcon
              className="icons-display"
              onClick={(e) =>
                noteDispatch({
                  type: "SHOW_COLOR_PALETTE",
                  payload: !noteState.pickColor,
                })
              }
            />
            {noteState.pickColor && (
              <ColorPalette setNoteColor={setNoteColor} />
            )}
            <label htmlFor="select-label">
              <LabelRoundedIcon />
            </label>
            <select
              id="select-label"
              value={noteLabel}
              className="select-label"
              onChange={(e) => setNoteLabel(e.target.value)}
            >
              {noteState.labels.map((labelOption) => (
                <option value={labelOption} key={labelOption}>
                  {labelOption}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};

export { AddNote };
