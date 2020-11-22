import React from 'react'
import './FormControls.css'


export const Input = ({ input, type, meta: { touched, error, warning } }) => {

    const hasError = touched && error
    return (
        <div className={`input ${hasError ? "error" : ''}`}>
            <input {...input} type={type} />
            {hasError && <small className="text-muted">{error}</small> || (warning && <small className="text-muted">{warning}</small>)}
        </div>
    )

}