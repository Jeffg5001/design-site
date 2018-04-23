import React, {Component} from 'react';

export default class SingleCategory extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div className='category'>
                <img className='thumbnail' src={this.props.image} />
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}