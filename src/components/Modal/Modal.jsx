import { useState } from "react";
import { editNote } from "../../utilities";
import { useNote } from "../../contexts";
import { LabelRoundedIcon, PaletteRoundedIcon } from "../../components";
import { ColorPalette } from "../../components";
import "./modal.css";

const Modal = () => {
  const { noteState, noteDispatch } = useNote();
  const [editedTitle, setEditedTitle] = useState(noteState.noteToEdit.title);
  const [editedContent, setEditedContent] = useState(
    noteState.noteToEdit.content
  );
  const [editedColor, setEditedColor] = useState(
    noteState.noteToEdit.noteColor
  );
  const [editedLabel, setEditedLabel] = useState(
    noteState.noteToEdit.noteLabel
  );

  const editedNote = {
    ...noteState.noteToEdit,
    title: editedTitle,
    content: editedContent,
    noteColor: editedColor,
    noteLabel: editedLabel,
  };

  return (
    <div className="editnote-demo-wrapper">
      <div className="editnote-container">
        <div className="editnote-text-container p-4">
          <input
            type="text"
            placeholder="Add title"
            className="add-note-title p-3"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            className="add-note-content p-3"
            placeholder="Enter note..."
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          ></textarea>
          <div className="add-note-footer flex-row my-3">
            <div className="flex-row add-note-footer">
              <div className="flex-row add-note-icons">
                <PaletteRoundedIcon
                  className="icons-display"
                  onClick={() =>
                    noteDispatch({
                      type: "SHOW_COLOR_PALETTE_MODAL",
                      payload: !noteState.pickColorModal,
                    })
                  }
                />
                {noteState.pickColorModal && (
                  <ColorPalette setNoteColor={setEditedColor} />
                )}
                <label htmlFor="select-label">
                  <LabelRoundedIcon />
                </label>
                <select
                  id="select-label"
                  value={editedLabel}
                  className="select-label"
                  onChange={(e) => setEditedLabel(e.target.value)}
                >
                  {noteState.labels.map((labelOption) => {
                    return <option value={labelOption} key={labelOption}>{labelOption}</option>;
                  })}
                </select>
              </div>
            </div>
            <button
              className="button btn-solid button-primary"
              onClick={() => editNote(noteState, noteDispatch, editedNote)}
            >
              Edit Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
