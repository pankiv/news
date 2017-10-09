/**
 * Created by Vasul on 27.09.2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Timer from './Timer';




const Header = ({title, t}) => {

    // console.log(t);

    return (
        <header>
            <Timer />
            <h3>{title}</h3>
            <Stats todos={t}/>

        </header>

    )
};


// function Header(props) {
//     return (
//         <header>{props.title}</header>
//     )
// }

Header.propTypes = {
    title: PropTypes.string.isRequired,
    t: PropTypes.array.isRequired
};

export default Header;
