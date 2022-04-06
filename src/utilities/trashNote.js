import axios from "axios";

const trashNote = async (noteState, noteDispatch, note) => {
  const authToken = JSON.parse(localStorage.getItem("AUTH_TOKEN"));
  const Headers = { authorization: authToken };
  try {
    const {
      data: { notes },
      status,
    } = await axios.delete(
      `/api/notes/${note._id}`,
      {
        headers: Headers,
      }
    );
    if (status >= 200 && status <= 300) {
      noteDispatch({ type: "ADD_NOTE", payload: notes });
      noteDispatch({ type: "TRASH_NOTE", payload: note });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export { trashNote };
