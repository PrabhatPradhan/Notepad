import React from "react";

 function NoteCard({
  title,
  setCurrentEditing,
  index,
  deleteNote,
}) {
  return (
    <div className=" border-3 border-black">
      <div  style={{ display: "flex", gap: "10px" ,width:"200px" }}>
        <h2 className="temp" onClick={() => setCurrentEditing(index)}>
          {title.substr(0, 10)}....
        </h2>
        <button onClick={() => deleteNote(index)}>Delete</button>
      </div>
      <hr />
    </div>
  );
}

export default NoteCard;