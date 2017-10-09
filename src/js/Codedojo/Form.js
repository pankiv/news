/**
 * Created by Vasul on 02.10.2017.
 */


import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props);


        this.addTodos = this.addTodos.bind(this);


        this.state= {
            value: ''
        }
    }


    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
        // console.log('nextProps', nextProps); xz
    }



    addTodos(e) {
        e.preventDefault();
        let value = this.state.value;

        if( value) {
            this.props.onAdd(value)
        }

        this.setState({
            value: ''
        })
    }




    render() {

        const {value} = this.state;
        // console.log(this.props);


        return (
            <form className="add_todo" onSubmit={this.addTodos}>
                <label htmlFor="f_input">
                    <input
                        onChange={(e)=> this.setState({value: e.target.value})}
                        value={value}
                        id="f_input"
                        placeholder="Add..."
                        type="text"/>
                    <input

                        value='send'
                        type="submit"/>
                </label>
            </form>
        )
    }
}


export default  Form;

