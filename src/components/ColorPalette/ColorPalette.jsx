import "./color-pal.css";
import { useNote } from "../../contexts";

const ColorPalette = ({ setNoteColor }) => {
  const { noteState, noteDispatch } = useNote();

  const pickNoteColor = (colorSelected) => {
    setNoteColor(colorSelected);
    noteDispatch({ type: "SHOW_COLOR_PALETTE", payload: !noteState.pickColor });
  };

  const editNoteColor = (colorSelected) => {
    setNoteColor(colorSelected);
    noteDispatch({
      type: "SHOW_COLOR_PALETTE_MODAL",
      payload: !noteState.pickColorModal,
    });
  };

  const noteColors = [
    "#fdbeb7",
    "#fdd9b7",
    "#fdf4b7",
    "#d0fdb7",
    "#b7fdfa",
    "#b7c6fd",
    "#dbb7fd",
    "#fdb7d4",
    "#b7d7fd",
    "#ededed",
    "#ffe3e0",
    "#c9c9c9",
  ];

  return (
    <div
      className={
        noteState.pickColorModal
          ? "palette-container-modal flex-row"
          : "palette-container flex-row"
      }
    >
      {noteColors.map((colorSelected) => {
        return (
          <div
            key={colorSelected}
            className="color-item"
            style={{ backgroundColor: `${colorSelected}` }}
            onClick={() =>
              noteState.pickColorModal
                ? editNoteColor(colorSelected)
                : pickNoteColor(colorSelected)
            }
          ></div>
        );
      })}
    </div>
  );
};
export { ColorPalette };
