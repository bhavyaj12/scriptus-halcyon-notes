import axios from "axios";

const fetchNotes = async () => {
  const authToken = localStorage.getItem("SCRIPTUS_AUTH_TOKEN");
  const Headers = { authorization: authToken };
  try {
    const {
      data: { notes }, status
    } = await axios.get(
      "/api/notes", 
      { headers: Headers }
    );
    if(status === 200) {
    return notes;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export { fetchNotes };
