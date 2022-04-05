import {
  ArchiveRoundedIcon,
  DeleteRoundedIcon,
  PushPinRoundedIcon,
  PaletteRoundedIcon,
  EditRoundedIcon
} from "../../components";
import "./note-card.css";

const NoteCard = ({ note }) => {
  const { title, content } = note;
  return (
    <div className="note-container flex-col p-4 m-4">
      <PushPinRoundedIcon className="pin-icon" />
      <p className="txt-small note-label my-2">Label</p>
      <p className="note-title mb-3">{title}</p>
      <p className="note-content">
        {content}
      </p>
      <div className="flex-row note-footer mt-7">
        <p className="text-sm">4/4/2022</p>
        <div className="flex-row note-icons">
          <EditRoundedIcon />
          <PaletteRoundedIcon />
          <ArchiveRoundedIcon />
          <DeleteRoundedIcon />
        </div>
      </div>
    </div>
  );
};

export { NoteCard };