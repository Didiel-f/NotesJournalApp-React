import React from 'react'

export const NothingSelected = () => {
    return (
        <div 
            className="nothing__main-content animate__animated animate__bounceInRight nothing__scroll"      
        >
            <p>
                Select something
                <br />
                or create an entry
            </p>

            <i className="far fa-star fa-4x mt-5"></i>
            
        </div>
    )
}
