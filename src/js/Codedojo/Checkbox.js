/**
 * Created by Vasul on 28.09.2017.
 */

import React from 'react'



class Checkbox extends React.Component {
    constructor(props) {
        super(props);


        this.chekedHundler = this.chekedHundler.bind(this);

        this.state = {
            checked: this.props.inCheked
        }
    }


    chekedHundler(e) {
        this.setState({
            checked: !this.state.checked
        }, () => {
            console.log(this.state);});
    }




    render() {


        return (

            <span className="btn_span" onClick={this.props.onChange}>
                <span>{this.props.children}</span>
            </span>
        )
    };
}




export default Checkbox;
