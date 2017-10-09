/**
 * Created by Vasul on 28.09.2017.
 */

import React from 'react';

const ChangeButtons = ({changeDeleteButton, changeDB }) => {
    return (
        <form action="" className="change_button">
            <label htmlFor="butt">ChangeButtons
                <input
                    type="text"
                    id="butt"
                    onChange={changeDeleteButton}
                    value={changeDB}
                />
            </label>
        </form>
    )
};

export default ChangeButtons;

