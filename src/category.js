import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class SingleCategory extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        let name = this.props.name;
        if(this.props.name === 'book') name = 'book_jackets';
        return (
            <div className='category'>
                <Link to={`/${name}`}>
                <img className='thumbnail' src={this.props.image} />
                <h2>{this.props.name}</h2>
                </Link>
            </div>
        )
    }
}