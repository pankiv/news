/**
 * Created by Vasul on 25.09.2017.
 */

import React, {Component} from 'react';

export default class SingUp extends Component {

    constructor(props) {
        super(props);


        this.changeInput = this.changeInput.bind(this);
        this.sindUpSubmit = this.sindUpSubmit.bind(this);
        this.changeEmail = this.changeEmail.bind(this);


        this.state = {
            inputName: '',
            emailName: ''
        }

    }

    changeInput(e) {
        this.setState({
            inputName: e.target.value
        })
    }



    sindUpSubmit(e) {
        e.preventDefault();

    }

    changeEmail(e) {
        this.setState({
            emailName: e.target.value
        })
    }




    render() {
        return (
            <div>
                <h1>SingUp</h1>
                <form action="" onSubmit={this.sindUpSubmit}>
                    <label htmlFor="name">
                        <input
                            value={this.state.inputName}
                            type="text"
                            id="name"
                            onChange={this.changeInput}
                        />
                    </label>

                    <label htmlFor="email">
                        <input
                            value={this.state.emailName}
                            type="text"
                            id="name"
                            onChange={this.changeEmail}
                        />
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}


