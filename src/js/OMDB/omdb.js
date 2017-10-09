/**
 * Created by Vasul on 19.09.2017.
 */



import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import $ from 'jquery';



import config from '../.././config';
import Profile from './profile';
import Gallery from './Gallery';


export default class Omdb extends Component {

    constructor(props) {
        super(props);

        this.inputSearch = this.inputSearch.bind(this);
        this.formSubmit = this.formSubmit.bind(this);


        this.state = {
            inputValue: '',
            data: []
        }




    }

    //functions

    inputSearch(e) {
        this.setState({
            inputValue: e.target.value
        });
    }


    formSubmit(e) {
        e.preventDefault();
        const fetch_url = `${config.searchMovieUrl}${config.API_KEY}&query=${this.state.inputValue}`;


        //ajax request
        // const xhr = new XMLHttpRequest();
        // xhr.open('GET', fetch_url, true);
        //
        // xhr.onerror = function () {
        //     throw new Error('error');
        // };
        //
        // xhr.onreadystatechange = function () {
        //
        //     if(this.readyState == 4 && this.status == 200) {
        //         let output =  JSON.parse(this.responseText);
        //         console.log(output);
        //         // this.setState({
        //         //     data: output
        //         // })
        //
        //     }
        //
        // };
        //
        // xhr.send();





        // fetch(fetch_url, {
        //     method : 'GET'
        // })
        //     .then((res) => res.json())
        //     .then( data => {
        //         const movie = data.results[0];
        //         // console.log(movie);
        //         if(movie) {
        //             this.setState({
        //                 data : movie
        //             })
        //         }
        //
        //
        //     })



        fetch(fetch_url, {
            method : 'GET'
        })
            .then((res) => res.json())
            .then( data => {


                const movie = data.results;


                // console.log(movie);

                if(movie) {
                    this.setState({
                        inputValue: '',
                        data : movie
                    })
                }


            })













    }

    render() {

        const { data, inputValue } = this.state;


        return (
            <div className='app'>
                <nav className='navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse'>
                    <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <a className='navbar-brand' href='#'>Fixed navbar</a>
                    <div className='collapse navbar-collapse' id='navbarCollapse'>
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item active'>
                                <a className='nav-link' href='#'>Home <span className='sr-only'>(current)</span></a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Link</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link disabled' href='#'>Disabled</a>
                            </li>
                        </ul>
                        <form action="" className='form-inline mt-2 mt-md-0'>
                            <input
                                   className='form-control mr-sm-2'
                                   type='text'
                                   placeholder='Search'
                            />
                            <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button>
                        </form>
                    </div>
                </nav>
                <div className="container pt50">
                    <div className="row">
                        <div className="col-sm-12">

                            <form className="search_form" onSubmit={this.formSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Text</label>
                                    <input
                                        type="text"
                                        className="form-control search_input"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        value={inputValue}
                                        onChange={this.inputSearch}
                                        // onKeyPress={(e)=> {console.log(e.key)}}
                                         />
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            {/*<Profile*/}
                                {/*dani={data}*/}
                            {/*/>*/}
                            <Gallery
                                dani={data}
                            />
                            <div id="movie"></div>
                        </div>
                    </div>
                    <div className="output"></div>
                </div>
                {/*<button className="load">Load</button>*/}
                <Button bsStyle="success">Success</Button>
                <Button bsStyle="success">Success</Button>
            </div>
        )
    }
}



// window.onload = () => {
//
//     const API_KEY = 'bb2f4a59a47a85b0be1cace0300b6687';
//     let url;
//
//     console.log('ready');
//
//     document.querySelector('.search_form').addEventListener('submit', (e) => {
//         e.preventDefault();
//         let input = document.querySelector('.search_input');
//         console.log(2);
//         // console.log(input.value);
//         url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${input.value}`,
//         console.log(url);
//
//         fetch(url)
//             .then((res) => res.json())
//             .then((data)=> {
//                 console.log(data);
//             });
//
//
//         input.value = '';
//     });
//
//
// };


// console.log(fetch);













