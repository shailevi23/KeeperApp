import React from 'react';
import Note from './Note'
import notes from "../notes";

function NoteList() {
    return (
        <div>
        {notes.map(noteItem =>
         (<Note           
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}/>))}
        </div>
    );
}

export default NoteList;