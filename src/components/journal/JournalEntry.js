import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ( { id, date, title, body, url, note } ) => {

    const dispatch = useDispatch();
    const noteDate = moment(date);

    const handleEntryClick = () => {
        dispatch( activeNote( id, note ) )
    };

    return (
        <div 
            className="journal__entry animate__animated animate__fadeIn animate__faster"
            onClick={ handleEntryClick }    
        >

            {
                (url) &&
                <div 
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url( ${url} )`
                    }}
                ></div>

            }
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { title }
                </p>
                <p className="journal__entry-content">
                    { body }
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span> { moment(noteDate).startOf('hour').fromNow()  } </span>
                <h4> { noteDate.format('dddd') } </h4>
                <h4> { noteDate.format('do') } </h4>
            </div>
        </div>
    )
}
