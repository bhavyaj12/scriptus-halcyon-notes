import axios from "axios";

const addNotes = async (noteDispatch, note) => {
  const authToken = localStorage.getItem("SCRIPTUS_AUTH_TOKEN");
  const Headers = { authorization: authToken };
  try {
    const {
      data: { notes },
      status,
    } = await axios.post(
      "/api/notes", note,
      { headers: Headers }
    );
    if (status === 201) {
      noteDispatch({ type: "ADD_NOTE", payload: notes });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export { addNotes };
