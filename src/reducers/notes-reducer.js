const NotesReducer = (noteState, { type, payload }) => {
  switch (type) {
    case "ADD_NOTE":
      return {
        ...noteState,
        notes: [...payload],
      };

    case "FETCH_NOTES":
      return {
        ...noteState,
        notes: payload,
      };

    case "FETCH_ARCHIVED_NOTES":
      return {
        ...noteState,
        notesArchive: payload,
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

    case "SORT_BY_CREATED_ON":
      return {
        ...noteState,
        sortByDateTime:
          payload === "old-to-new"
            ? "OLDEST_FIRST"
            : payload === "new-to-old"
            ? "NEWEST_FIRST"
            : "",
      };

    case "RESET_NOTES":
      return {
        ...noteState,
        notes: [],
        showModal: false,
        noteToEdit: {},
        notesArchive: [],
        pickColor: false,
        pickColorModal: false,
        labels: ["no-label", "study", "books", "movies", "work"],
        sortByDateTime: "",
      };

    default:
      return noteState;
  }
};

export { NotesReducer };
