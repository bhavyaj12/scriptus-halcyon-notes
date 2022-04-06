const NotesReducer = (noteState, { type, payload }) => {
  switch (type) {
    case "ADD_NOTE":
      return {
        ...noteState,
        notes: [...payload],
      };

    case "SHOW_MODAL":
      return {
        ...noteState,
        showModal: payload,
      };

    case "SET_NOTE_TO_EDIT":
      return {
        ...noteState,
        noteToEdit: payload,
      };

    case "TRASH_NOTE":
      if (noteState.notesTrash.includes(payload)) return noteState;
      else {
        return {
          ...noteState,
          notesTrash: [...noteState.notesTrash, payload],
        };
      }

    case "ARCHIVE_NOTE":
      return {
        ...noteState,
        notesArchive: payload,
      };

    case "SHOW_COLOR_PALETTE":
      return { ...noteState, pickColor: payload };

    case "SHOW_COLOR_PALETTE_MODAL":
      return { ...noteState, pickColorModal: payload };

    case "CREATE_LABEL":
      return { ...noteState, labels: [...noteState.labels, payload] };

    default:
      return noteState;
  }
};

export { NotesReducer };
