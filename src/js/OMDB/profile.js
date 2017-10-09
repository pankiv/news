/**
 * Created by Vasul on 22.09.2017.
 */


import React, {Component} from 'react';

export default class Profile extends Component {
    render() {
        console.log(this.props.dani);

        let data = {genre_ids: ''};

        if(this.props.dani !== null) {
            data = this.props.dani
        }


        let src = `https://image.tmdb.org/t/p/w300/${data.poster_path}`;
        let backdrop_path = `https://image.tmdb.org/t/p/w300/${data.backdrop_path}`;

        return (
            <div className="profile">
                <div>{data.name}</div>
                <img src={src} alt={data.name}/>
                <p>{data.overview}</p>
                <img src={backdrop_path} alt={data.name}/>
            </div>
        )
    }
}