import { useState, createContext, useContext, useReducer } from "react";
import { NotesReducer } from "../reducers";

const NotesContext = createContext();
const useNote = () => useContext(NotesContext);

const NotesProvider = ({ children }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [noteState, noteDispatch] = useReducer(NotesReducer, {
    notes: [],
  });

  return (
    <NotesContext.Provider value={{ note, setNote, noteState, noteDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export { useNote, NotesProvider };
