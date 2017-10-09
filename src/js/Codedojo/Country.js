/**
 * Created by Vasul on 27.09.2017.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



function serching(value) {
    return function (e) {
        return !value || e.name.common.toLowerCase().includes(value.toLowerCase())
    }
}




export default class Country extends Component {

    constructor(props) {
        super(props);


    }


    render() {
        const data = this.props.coutryJson;
        const inpValue = this.props.inpValue;


        // console.log(data);
        // console.log(inpValue);


        return (
            <ul className="ol">
                {
                    data.filter(serching(inpValue)).map( (elem, index)=> {
                        return (
                            <li key={index}>
                                <div>{elem.area}</div>
                                <div>{elem.name.common}</div>
                                <div>
                                    <button onClick={()=>{this.props.onClick(elem.name.common)}}>{this.props.changeDB}</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}


