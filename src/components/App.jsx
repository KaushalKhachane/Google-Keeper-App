import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";
import CreateArea from "./CreateArea";

function createNotes(noteItem) {
  return <Note title={noteItem.title} content={noteItem.content} />;
}

function App() {

  function addNote(note){
    console.log(note);
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
