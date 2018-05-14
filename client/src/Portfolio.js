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
        console.log('fired')
        this.setState({isShowing: true}, ()=>{
            document.addEventListener('click', this.closeMenu);
            document.addEventListener('touchend', this.closeMenu);
        });
    }

    closeMenu(){
        this.setState({isShowing: false}, () => {
            document.removeEventListener('click', this.closeMenu);
            document.removeEventListener('touchend', this.closeMenu);
        });

    }

    render(){
        return( <div id='portfolio-container'>
        <a onTouchEnd={this.handleMenuMouseOver} onMouseOver={this.handleMenuMouseOver}>
            Portfolio
        </a>{
                <div onMouseLeave={this.closeMenu} className={this.state.isShowing ? `categories-menu visible`: `categories-menu hidden`}>
                    <NavLink to='/ads'><button> ads </button></NavLink>
                    <NavLink to='/mailers'><button> mailers </button></NavLink>
                    <NavLink to='/branding'><button> branding </button></NavLink>
                    <NavLink to='/educational'><button> educational </button></NavLink>
                    <NavLink to='/print'><button> print </button></NavLink>
                    <NavLink to='/digital'><button> digital </button></NavLink>
                </div>}
            </div>)
        
    }
}