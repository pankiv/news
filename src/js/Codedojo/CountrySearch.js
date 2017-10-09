/**
 * Created by Vasul on 28.09.2017.
 */

import React from 'react';



function serching(value) {
    return function (e) {
        return !value || e.name.common.toLowerCase().includes(value.toLowerCase())
    }
}


const CountrySearch = ({funcSearch, inpValue}) => {
    return (
        <form action="">
            <label htmlFor="search">
                <input
                    type="text"
                    id="search"
                    onChange={funcSearch}
                    value={ inpValue }
                />
            </label>
        </form>
    )
};

export default CountrySearch;
