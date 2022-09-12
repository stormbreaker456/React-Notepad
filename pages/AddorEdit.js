import styles from './addoredit.module.css';
import React, { useState, useEffect } from 'react';
import Storage from '../services/storage';
import { useNavigate, useParams } from 'react-router-dom';

///Add/Edit Note page

export function AddorEdit() {
    const { id } = useParams();

    /// Get the note Object from Local Storage Array
    const notesID = Storage.getItem('notes',[]);
    let new_array = Array.from(notesID);
    const noteObj = new_array[id];

    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        
         if(id==null){
            const form = Storage.getSessionItem('form', { title: '', note: '' });
            setTitle(form.title);
            setNote(form.note);
          }
         else{
            setTitle(noteObj.title);
            setNote(noteObj.note);
          }
       
    }, []);

    function onTitleChange(event) {
        const inputTitle = event.target.value;
        setTitle(inputTitle);
        Storage.setSessionItem('form', { title: inputTitle, note });


    }
    function onNoteChange(event) {
        const inputNote = event.target.value;
        setNote(inputNote);
        Storage.setSessionItem('form', { title, note: inputNote });
    }
    useEffect(() => {
        const stored_notes = Storage.getItem('notes', []);
        setNotes(stored_notes);
    }, []);

    function onFormClear() {
        Storage.removeSessionItem('form');
        setTitle('')
        setNote('');
    
      }

      function onCancel(){
        Storage.removeSessionItem('form');
        navigate("/");
      }
  
    function onSubmitForm() {
        if(id==null){
            let valueTitle = title.trim();
            let valueNote = note.trim();
            if(valueTitle && valueNote) {
                const new_note = { title, note };
                const note_copy = Array.from(notes);
                note_copy.push(new_note);
                setTitle('');
                setNote('');
                Storage.setItem('notes', note_copy);
                Storage.removeSessionItem('form');
                setNotes(note_copy);
                navigate('/');
        }
            else{
                alert('Please enter the note information.');
            }
        
        }
        else{
            let valueTitle = title.trim();
            let valueNote = note.trim();
            if(valueTitle && valueNote) {
                const note_copy = Array.from(notesID);
                note_copy.splice(id,1,{ note,title });
                setTitle('');
                setNote('');
                Storage.setItem('notes', note_copy);
                Storage.removeSessionItem('form');
                navigate('/');}
            else{
                alert('Please enter the note information.');
            }
        }
        }
        
  

    return (
        <div className={styles.container}>
            <div>
                <label htmlFor="title" className={styles.label}>TITLE</label>
                <input type="text" id="title" name="title" className={styles.input} value={title} placeholder='Enter title. . .' onChange={onTitleChange} />
            </div>
            <div>
                <label htmlFor="notes" className={styles.label}>NOTES</label>
                <textarea className={styles.inputNotes} id="notes" name="notes" value={note} placeholder='Enter Text . . . '  onChange={onNoteChange} />
            </div>
            <button type="button" class="col-2 btn btn-info btn-lg mx-2 fs-bold" onClick={onSubmitForm}>SAVE</button>
            <button type="button" class=" col-2 btn btn-info btn-lg mx-2" onClick={onFormClear} >CLEAR</button>
            <button type="button" class=" col-2 btn btn-info btn-lg mx-2" onClick={onCancel}>CANCEL</button>
        </div>


    );


}
