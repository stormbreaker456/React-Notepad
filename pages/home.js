import { useNavigate } from "react-router-dom";
import { Row } from '../components';
import { useState, useEffect } from 'react';
import Storage from '../services/storage';


/// Homepage that displays the list of notes

export function Home() {

    const [notes, setNotes] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const stored_notes = Storage.getItem('notes', []);
        setNotes(stored_notes);
    }, []);


    /// Display the current list of notes stored in local storage.

    function renderData() {
        let items = [];
        for (let i = 0; i < notes.length; i++) {
            function onRowDelete() {
                deleteNote(i);
            }
            items.push(
                <Row index={i} list={notes[i]} onRowDelete={onRowDelete} />
            );
        }
        return items;
    }



    function deleteNote(index) {
        let new_array = Array.from(notes);
        new_array.splice(index, 1);
        Storage.setItem('notes', new_array);
        setNotes(new_array);

    }

    return (
        <div >

            {renderData()}
            <div>
            {/* Add Note button below the list to navigate the user to the Add Note page */}
                <button type="button" class="col-6 btn btn-info btn-sm mx-2 fs-3 border-secondary border-1 mb-5" onClick={() => navigate("add")}>+ ADD NOTE</button>
            </div>
        </div>
    );
}
