import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Portfolio extends Component{
    constructor(props){
        super(props)
        this.state = {
            isShowing:false,
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    handleMenuClick(e){
        e.preventDefault();
        this.setState({isShowing: !this.state.isShowing}, ()=>{
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(){
        this.setState({isShowing: false}, () => {
            document.removeEventListener('click', this.closeMenu);
        });

    }

    render(){
        return( <div id='portfolio-container'>
        <a onClick={this.handleMenuClick}>
            Portfolio
        </a>
        
                { this.state.isShowing ?
                (
                <div className='categories-menu'>
                    <Link to='/ads'><button> <strong>ads</strong> </button></Link>
                    <Link to='/mailers'><button> <strong>mailers</strong> </button></Link>
                    <Link to='/logos'><button> <strong>logos</strong> </button></Link>
                    <Link to='/educational'><button> <strong>educational</strong> </button></Link>
                    <Link to='/book_jackets'><button> <strong>book</strong> </button></Link>
                    <Link to='/digital'><button> <strong>digital</strong> </button></Link>
                </div>
                ) : (null)} 
            </div>)
        
    }
}