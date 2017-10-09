/**
 * Created by Vasul on 25.09.2017.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import p from '../../func';



function filter(arr) {
    let result= 0;

    arr.forEach( e => {
        return e < 2;
    });

    return result;
}


export default class Some extends Component {

    constructor(props) {
        super(props);

    }


    componentDidMount() {
        console.log('did');
    }



    componentWillMount() {
        // console.log(p);


        console.log('will');

        let arr = [1, 2, 3, 5, 10, 100];

        console.log('summ', filter(arr));
    }






    render() {
        console.log('render');
        return (
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
        )
    }
}


