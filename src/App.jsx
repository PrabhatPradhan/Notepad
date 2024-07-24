import { useState } from "react";
import "./App.css";
import NoteCard from "./components/NoteCard/NoteCard";
import MarkdownEditor from "@uiw/react-markdown-editor";

function App() {
  const [notes, setNotes] = useState([{ title: "#Enter your title", desc: "" }]);
  const [currentEditing, setCurrentEditing] = useState(0);

  const addNote = () => {
    const newNote = {
      title: "#Enter your title",
      desc: "",
    };
    setNotes([...notes, newNote]);
    setCurrentEditing(notes.length); // Set the new note as the current editing note
  };

  const deleteNote = (index) => {
    let newArray = notes.filter((item, ind) => ind !== index);
    if (newArray.length === 0) {
      setCurrentEditing(null);
    } else if (currentEditing === index) {
      setCurrentEditing(0); // Set to the first note if the current one is deleted
    }
    setNotes(newArray);
  };

  return (
    <div className="border border-black">
      <div className="flex gap-2">
        <h1 className="text-3xl">NOTES</h1>
        <button onClick={addNote}>➕</button>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          {notes.map((item, index) => (
            <NoteCard
              key={index}
              title={item.title}
              setCurrentEditing={setCurrentEditing}
              index={index}
              deleteNote={deleteNote}
            />
          ))}
        </div>
        <div>
          {currentEditing !== null ? (
            <MarkdownEditor
              className="w-[80vw] h-screen static"
              onChange={(value, viewUpdate) => {
                let newValue = value;
                let localCopy = [...notes];
                localCopy[currentEditing].desc = newValue;
                localCopy[currentEditing].title = newValue.split("\n")[0];
                setNotes(localCopy);
              }}
              value={notes[currentEditing].desc}
            />
          ) : (
            <p>Please click on a specific note to edit</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
