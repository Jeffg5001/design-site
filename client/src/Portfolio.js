import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Portfolio extends Component{
    constructor(props){
        super(props)
        this.state = {
            isShowing:false,
        }
        this.handleMenuMouseOver = this.handleMenuMouseOver.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    handleMenuMouseOver(e){
        e.preventDefault();
        this.setState({isShowing: true}, ()=>{
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
        <a onMouseOver={this.handleMenuMouseOver}>
            Portfolio
        </a>{
                <div onMouseLeave={this.closeMenu} className={this.state.isShowing ? `categories-menu visible`: `categories-menu hidden`}>
                    <NavLink to='/ads'><button> ads </button></NavLink>
                    <NavLink to='/mailers'><button> mailers </button></NavLink>
                    <NavLink to='/logos'><button> logos </button></NavLink>
                    <NavLink to='/educational'><button> educational </button></NavLink>
                    <NavLink to='/book_jackets'><button> books </button></NavLink>
                    <NavLink to='/digital'><button> digital </button></NavLink>
                </div>}
            </div>)
        
    }
}