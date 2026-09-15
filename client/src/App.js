import React, { Component } from 'react';
import {Home} from './Home'
import {Route, NavLink, Link} from 'react-router-dom';
import { Slideshow } from './slideshow';
import { Portfolio } from './Portfolio';
import  Contact from './ContactForm';
import Sidebar from 'react-sidebar';


const Links = props =>{
  return (<ul>{
    [
      {
        name: 'ads',
        path: '/ads'
      },
      {
        name: 'mailers',
        path: '/mailers'
      },
      {
        name: 'branding',
        path: '/branding'
      },
      {
        name: 'educational',
        path: '/educational'
      },
      {
        name: 'print',
        path: '/print'
      },
      {
        name: 'digital',
        path: '/digital'
      },
    ].map( linkInfo => (<li className='sidebarcontent' onClick={()=>props.closeFn(false)} key={linkInfo.name + 'list'}> <NavLink key={linkInfo.name} to={linkInfo.path}> {linkInfo.name} </NavLink> </li> ))}
  </ul>)
}

const MobileLinks = props =>{
  return (<div>{
    [
      {
        name: 'home',
        path: '/',
        divider: '|'
      },
      {
        name: 'ads',
        path: '/ads',
        divider: '|'
      },
      {
        name: 'mailers',
        path: '/mailers',
        divider: '|'
      },
      {
        name: 'branding',
        path: '/branding',
        divider: '|'
      },
      {
        name: 'educational',
        path: '/educational',
        divider: '|'
      },
      {
        name: 'print',
        path: '/print',
        divider: '|'
      },
      {
        name: 'digital',
        path: '/digital',
        divider: ''
      },
    ].map( linkInfo => (<div key={linkInfo.name + 'div'}> <NavLink key={linkInfo.name + 'mobile'} to={linkInfo.path}> {linkInfo.name} </NavLink> <a key={linkInfo.name + 'divider'} > {linkInfo.divider} </a> </div>))}
  </div>)
}


const App = () => {
  return (
    <div>
      <h1 className="logo" >d slott design</h1>
      <div className="green-circle" />
    </div>
  )
}

export default App;
