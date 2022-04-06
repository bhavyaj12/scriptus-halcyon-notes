import { useState } from "react";
import { editNote } from "../../utilities";
import { useNote } from "../../contexts";
import { LabelRoundedIcon } from "../../components";
import "./modal.css";

const Modal = () => {
  const { noteState, noteDispatch } = useNote();
  const [editedTitle, setEditedTitle] = useState(noteState.noteToEdit.title);
  const [editedContent, setEditedContent] = useState(
    noteState.noteToEdit.content
  );

  const editedNote = {
    ...noteState.noteToEdit,
    title: editedTitle,
    content: editedContent,
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
            <button
              className="button btn-solid button-primary"
              onClick={() => editNote(noteState, noteDispatch, editedNote)}
            >
              Edit Note
            </button>
            <div className="flex-row add-note-footer">
              <div className="flex-row add-note-icons">
                <LabelRoundedIcon className="icons-display" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
