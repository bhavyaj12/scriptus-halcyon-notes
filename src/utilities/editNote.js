import axios from "axios";

const editNote = async (noteState, noteDispatch, editedNote) => {
  const authToken = localStorage.getItem("SCRIPTUS_AUTH_TOKEN");
  const Headers = { authorization: authToken };
  try {
    const {
      data: { notes },
      status,
    } = await axios.post(
      `/api/notes/${noteState.noteToEdit._id}`,
      { note: editedNote },
      {
        headers: Headers,
      }
    );
    if (status === 201) {
      noteDispatch({ type: "ADD_NOTE", payload: notes });
      noteDispatch({ type: "SHOW_MODAL", payload: !noteState.showModal });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export { editNote };
