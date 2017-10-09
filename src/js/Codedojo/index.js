/**
 * Created by Vasul on 27.09.2017.
 */

import React, {Component} from 'react';
// import 'whatwg-fetch';

import axios from 'axios';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, NavLink, browserHistory } from 'react-router-dom';


import Country from './Country';
import Header from './Header';
import Todo from './Todo.jsx';
import CountrySearch from './CountrySearch';
import ChangeButtons from './ChangeButtons';
import todos from './json';
import Form from './Form';

export default class Codedojo extends Component {

    constructor(props) {
        super(props);


        this.loadJson = this.loadJson.bind(this);
        this.search = this.search.bind(this);
        this.changeDelete = this.changeDelete.bind(this);
        this.handlerStatysChange = this.handlerStatysChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.countryDelete = this.countryDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);

        this.state = {
            data : [],
            inpValue: '',
            changeDB:'',
            todos: todos
        };


        console.log('constructor');

    }

    componentWillMount() {
        console.log('componentWillMount');
    }


    componentDidMount() {
        console.log('componentDidMount');
    }


    loadJson() {
        axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
            .then((res) => res.data)
            .then(data => {
                console.log(data);
                this.setState({
                    data: data
                })
            });
    }


    search(e) {
        this.setState({
            inpValue: e.target.value
        });
    }


    changeDelete(e) {
        console.log(e.target.value);
        this.setState({
            changeDB: e.target.value
        });
    }


    handlerStatysChange(id) {
        // console.log('hease', id);

        let todos = this.state.todos.map((e)=> {
            if(e.id === id) {
                e.completed = !e.completed
            }

            return e;
        });

        this.setState({
            todos: todos
        })
    }


    onDelete(id) {
        // console.log(id);

        let todos = this.state.todos.filter((e)=> {
          return e.id !== id
        });

        this.setState({
            todos: todos
        });

    }

    countryDelete(name) {

        let newData = this.state.data.filter((e)=> {
            return e.name.common !== name
        });


        this.setState({
            data: newData
        });


        // console.log(newData);
    }

    handleAdd(submit) {
        // console.log(submit);
        let todo = {
            id: this.nextID(),
            title: submit,
            completed: false

        };


        let todos = [...this.state.todos, todo];

        this.setState({
            todos: todos
        })
    }

    nextID() {
        this._nextId = this._nextId || 8000;
        return this._nextId++;
    }





    render() {


        console.log('render');

        const { data, inpValue, changeDB, todos } = this.state;

        return (
            <div>
                <main>

                    <Header title={'this is title, bro'} t={todos}/>


                    <section className="todo-list">

                        {
                            todos.map((e)=> {
                                return <Todo
                                    key={e.id}
                                    id={e.id}
                                    title={e.title}
                                    completed={e.completed}
                                    onStatysChanged={this.handlerStatysChange}
                                    onDelete={this.onDelete}
                                />
                            })
                        }

                    </section>

                    <Form onAdd={this.handleAdd} />

                </main>

                <CountrySearch
                    funcSearch={this.search}
                    inpValue={inpValue}
                />
                <ChangeButtons
                    changeDeleteButton={this.changeDelete}
                    changeDB={changeDB}
                />

                <nav>
                    <button onClick={this.loadJson}>Load</button>
                </nav>

                <Country
                    onClick={this.countryDelete}
                    coutryJson={data}
                    inpValue={inpValue}
                    changeDB={changeDB}
                />
            </div>
        )
    }
}



