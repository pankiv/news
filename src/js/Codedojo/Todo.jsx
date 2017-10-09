/**
 * Created by Vasul on 27.09.2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox'
import Button from './Button';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



// function Todo(props) {
//     return (
//         <div className="todo">
//             <button className="cheked">checked</button>
//             <span className="todo_title">{props.title}</span>
//             <button className="delete">delete</button>
//         </div>
//     )
// }
//
// Todo.propTypes = {
//     title: PropTypes.string.isRequired,
//     completed: PropTypes.bool
// };



const Todo = (props) => {


    // console.log(props.completed);

    return (
        <ReactCSSTransitionGroup
            component="section"
            transitionName="slide"
            transitionEnterTimeout={7000}
            transitionLeaveTimeout={7000}
            className="www">
            {
                    props.completed
                ?
                    <div className="todo checked">
                        <Checkbox
                            inCheked={props.completed}
                            onChange={()=>{props.onStatysChanged(props.id)}}
                        >
                            chech
                        </Checkbox>
                        <span className="todo_title">{props.title}</span>
                    </div>
                :
                    <div className="todo">
                        <Checkbox
                            inCheked={props.completed}
                            onChange={()=>{props.onStatysChanged(props.id)}}
                        >
                            chech
                        </Checkbox>
                        <span className="todo_title">{props.title}</span>

                        <Button
                            className='removing'
                            onClick={()=>{props.onDelete(props.id)}}
                        >
                            deleteeeeee
                        </Button>
                    </div>
            }

        </ReactCSSTransitionGroup>
    )
};



Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
};


export default Todo;
