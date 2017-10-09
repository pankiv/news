/**
 * Created by Vasul on 25.09.2017.
 */

import React, {Component} from 'react';


export default class Gallery extends Component {

    constructor(props) {
        super(props);


        this.delete = this.delete.bind(this);
    }





    delete(e) {
        e.preventDefault();
        e.target.classList.toggle('red');
    }


    render() {



        console.log('props', this.props.dani);

        const data = this.props.dani;


        return (
            <div className="gallery">
                {
                    data.map( (elem, index) => {
                        return (
                            <article className="galleryItem" key={elem.id}>
                                <div className="g_name">{elem.title || elem.name || 'lolik'}</div>
                                <img
                                    src={'https://image.tmdb.org/t/p/w300/' + elem.poster_path}
                                    alt={'https://image.tmdb.org/t/p/w300/' + elem.poster_path}
                                />
                                <div className="popularity">{elem.popularity.toFixed(1)}</div>
                                <div className="release_date">{elem.release_date}</div>
                                <ul className="genre_ids">
                                    {
                                        elem.genre_ids
                                        ?   elem.genre_ids.map((e, i)=> {
                                                return (
                                                    <li key={i}  className="genre_ids_li">{e}</li>
                                                )
                                        }) : <li></li>
                                    }
                                </ul>
                                <button onClick={this.delete} className="delete">del</button>
                            </article>
                        )
                    })
                }
            </div>
        )
    }
}

