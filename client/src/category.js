import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class SingleCategory extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        let name = this.props.name;
        return (
            <div className='category'>
                <Link to={`/${name}`}>
                <img className='thumbnail' alt={this.props.name} src={this.props.image} />
                <h2>{this.props.name}</h2>
                </Link>
            </div>
        )
    }
}