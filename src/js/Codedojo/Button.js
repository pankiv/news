/**
 * Created by Vasul on 28.09.2017.
 */

import React from 'react';


const Button = ({className, children, onClick }) => {

    return (
        <button
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    )
};


export default Button;
