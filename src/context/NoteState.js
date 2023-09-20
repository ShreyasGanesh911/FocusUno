import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:9000";
  const notesAll = [];
  const [notes, setNotes] = useState(notesAll);
  const [modalHide,setModalHide] = useState(false)
  // Performing basic CRED operations
  /*
        1) Create Notes
        2) Read Notes
        3) Edit Notes
        4) Delete Notes
      */
  const getNotes = async () => {
          const response = await fetch(`${host}/userNotes`, {
            method: "GET",
            headers:  {
              "Content-Type": "application/json",
              'authToken': localStorage.getItem('token'),
            },
            });
            const json = await response.json();
            
            setNotes(json)
        };

  
  // Adding new note
  const addNote = async (title, description) => {
    const response = await fetch(`${host}/newNotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'authToken': localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description }),
    });
    const note= await response.json();
    setNotes(notes.concat(note));
  };

  // Deleting notes 
  const deleteNote = async (a) => {
    const response = await fetch(`${host}/delete/${a}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authToken": localStorage.getItem('token'),
      },

      
    });
    const json= await response.json();
    console.log(json)
    const newNotes = notes.filter((note) => {
      return note._id !== a;
    });
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote ,getNotes,modalHide,setModalHide}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
