import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {

    const note = useSelector( ({notes}) => notes.active );
    const dispatch = useDispatch();


    const [ formValues, handleInputChange, reset, handleImageChange ] = useForm( note );
    
    const { title, body } = formValues;

    const activeId = useRef( note.id );

    
    useEffect(() => {
        
        if ( note.id !== activeId.current ){
            reset();
            activeId.current = note.id;
        }
        
    }, [ note, reset ]);
   
    
    useEffect(() => {
        dispatch( activeNote( formValues.id, { ...formValues } ) );    
    }, [ formValues, dispatch ])

    const handleDelete = () => {
        dispatch( startDeleting( note.id ) );
    };
    
    return (
        <div className="notes__main-content animate__animated animate__fadeIn animate__faster">

            <NotesAppBar  />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    onChange={handleInputChange}
                    value={title}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    onChange={handleInputChange}
                    value={body}
                ></textarea>

                {
                    ( note.url )
                    && (
                        <div className="notes__image">
                            <img 
                                onLoad={handleImageChange}
                                src= { note.url }
                                alt="imagen"
                            />
                        </div>
                    )
                }

            </div>

            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>
            
        </div>
    )
}
