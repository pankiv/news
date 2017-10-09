/**
 * Created by Vasul on 02.10.2017.
 */


import React from 'react';


function Stats({todos}) {

    // console.log(todos);
    let todosTotal = todos.length;

    let todosCompleted = todos.filter((e) => {
        return e.completed
    }).length;

    // console.log(todosCompleted);

    let todosNotCompleted = todos.filter((e) => {
        return !e.completed
    }).length;


    // let todosNotCompleted = todosTotal - todosCompleted.length;


    return (
        <table>
            <tbody>
                <tr>
                    <td>All <strong>task</strong></td>
                    <td>{todosTotal}</td>
                </tr>
                <tr>
                    <th><strong>Completed</strong></th>
                    <td><strong>{todosCompleted}</strong></td>
                </tr>
                <tr>
                    <td><strong>Not</strong> completed</td>
                    <td>{todosNotCompleted}</td>
                </tr>
            </tbody>
        </table>
    )
}


export default Stats;
