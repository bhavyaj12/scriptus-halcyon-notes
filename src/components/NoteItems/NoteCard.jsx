import dayjs from "dayjs";
import { useNote } from "../../contexts";
import { trashNote, archiveNote, restoreNote, trashArchivedNote } from "../../utilities";
import {
  ArchiveRoundedIcon,
  DeleteRoundedIcon,
  PushPinRoundedIcon,
  EditRoundedIcon,
  UnarchiveRoundedIcon,
} from "../../components";
import "./note-card.css";

const NoteCard = ({ note, pathname }) => {
  const { noteState, noteDispatch } = useNote();

  const editNoteHandler = () => {
    noteDispatch({ type: "SHOW_MODAL", payload: !noteState.showModal });
    noteDispatch({ type: "SET_NOTE_TO_EDIT", payload: note });
  };
  const { title, content, createdOn, noteColor, noteLabel } = note;

  return (
    <div className="note-container flex-col p-4 m-4" style={{ backgroundColor: noteColor }}>
      {(pathname !== "/trash" && pathname !== "/archive") && (
          <PushPinRoundedIcon className="pin-icon icons-display" />
        )}
      <p className="txt-small note-label my-2">{noteLabel}</p>
      <p className="note-title mb-3">{title}</p>
      <p className="note-content">{content}</p>
      <div className="flex-row note-footer mt-7">
        <p className="text-sm">{dayjs(new Date(createdOn)).format("DD/MM/YYYY, HH:mm:ss")}</p>
        {pathname !== "/trash" && (
          <div className="flex-row note-icons">
            {pathname !== "/archive" && (
              <EditRoundedIcon
                className="icons-display"
                onClick={editNoteHandler}
              />
            )}
            {noteState.notesArchive.includes(note) ? (
              <>
                <UnarchiveRoundedIcon
                  className="icons-display"
                  onClick={() => restoreNote(noteDispatch, note)}
                />
                <DeleteRoundedIcon
                  className="icons-display"
                  onClick={() => trashArchivedNote(noteDispatch, note)}
                />
              </>
            ) : (
              <>
                <ArchiveRoundedIcon
                  className="icons-display"
                  onClick={() => archiveNote(noteDispatch, note)}
                />
                <DeleteRoundedIcon
                  className="icons-display"
                  onClick={() => trashNote(noteState, noteDispatch, note)}
                />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { NoteCard };
