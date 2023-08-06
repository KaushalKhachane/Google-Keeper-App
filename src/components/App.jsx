import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";
import CreateArea from "./CreateArea";

function App() {

  const [note, setNotes] = useState([]);

  function addNote(newNote){
    setNotes((prevNotes) => {
      return [...prevNotes, newNote]
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      {note.map((noteItem, index) => {
        return <Note key={index} title={noteItem.title} content={noteItem.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
