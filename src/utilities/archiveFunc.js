import axios from "axios";

const fetchArchivedNotes = async () => {
  const authToken = JSON.parse(localStorage.getItem("AUTH_TOKEN"));
  const Headers = { authorization: authToken };
  try {
    const {
      data: { archives },
      status,
    } = await axios.get("/api/archives", {
      headers: Headers,
    });
    if (status === 200) {
      return archives;
    }
  } catch (error) {
    console.log(error.message);
  }
};

const archiveNote = async (noteDispatch, note) => {
  const authToken = JSON.parse(localStorage.getItem("AUTH_TOKEN"));
  const Headers = { authorization: authToken };
  try {
    const {
      data: { notes, archives },
      status,
    } = await axios.post(
      `/api/notes/archives/${note._id}`,
      { note: note },
      {
        headers: Headers,
      }
    );
    if (status >= 200 && status <= 300) {
      noteDispatch({ type: "ADD_NOTE", payload: notes });
      noteDispatch({ type: "ARCHIVE_NOTE", payload: archives });
    } else {
      throw new Error(status);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const restoreNote = async (noteDispatch, note) => {
  const authToken = JSON.parse(localStorage.getItem("AUTH_TOKEN"));
  const Headers = { authorization: authToken };
  try {
    const {
      data: { notes, archives },
      status,
    } = await axios.post(
      `/api/archives/restore/${note._id}`,
      {},
      {
        headers: Headers,
      }
    );
    if (status >= 200 && status <= 300) {
      noteDispatch({ type: "ADD_NOTE", payload: notes });
      noteDispatch({ type: "ARCHIVE_NOTE", payload: archives });
    } else {
      throw new Error(status);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const trashArchivedNote = async (noteDispatch, note) => {
  const authToken = JSON.parse(localStorage.getItem("AUTH_TOKEN"));
  const Headers = { authorization: authToken };
  try {
    const {
      data: { archives },
      status,
    } = await axios.delete(`/api/archives/delete/${note._id}`, {
      headers: Headers,
    });
    if (status >= 200 && status <= 300) {
      noteDispatch({ type: "ARCHIVE_NOTE", payload: archives });
    } else {
      throw new Error(status);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export { archiveNote, restoreNote, trashArchivedNote, fetchArchivedNotes };
