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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen (open) {
    this.setState({sidebarOpen: open});
  }

  render() {
    let sidebarcontent = [<br key='break' />,
      <Link className='sidebarcontent' key='home' onClick={()=>this.onSetSidebarOpen(false)} to='/'>Home</Link>,
      <hr key='hr1' />,
              <a className='sidebarcontent' key='portfolio'>Portfolio</a>,
              <Links className='sidebarcontent' closeFn={this.onSetSidebarOpen} key='links' />,
      <hr key='hr2' />,
      <div  onClick={()=>this.onSetSidebarOpen(false)} className='sidebarcontent' key='contactwrapper' ><Contact key='contact'/></div>,
    ]
    return (
      <div className="App">
      <Sidebar rootClassName='sidebar' sidebar={sidebarcontent}
      open={this.state.sidebarOpen}
      onSetOpen={this.onSetSidebarOpen}
      styles={{overlay:{zIndex:4},sidebar: {position:"fixed","zIndex": '5', "backgroundColor":"yellowgreen"}}}
         ><div></div></Sidebar>
      <div className="topBar" >
      <i className="material-icons" onClick={()=>this.onSetSidebarOpen(true)}>menu</i>
      </div>
      <div className='main'>
        <div className="grid-wrapper">
          <div className="links">
              <Link to='/' >Home</Link>
              <Portfolio />
              <Contact />          
          </div>
          <div className="logo">
              <Link to='/' className='logo'><img alt='flower logo' id='flowerlogo' src="images/flower.png" /></Link>
              <Link to='/' className='logo'><img id='printlogo' alt='d•slott•design-logo' src="images/dslottdesign.png" /></Link>
          </div>
        </div>
      </div>
      <Route exact path='/' component={Home}/>
      <Route path='/:category' component={Slideshow}/>      
      
      <div className="bottomBar" >
        <div className="NavLinks">
          <NavLink to='/'> home </NavLink>
              {
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
                ].map( linkInfo => (<div key={linkInfo.name}>| <NavLink to={linkInfo.path}> {linkInfo.name} </NavLink> </div> ))
              }
            | <NavLink to='/digital'> digital </NavLink>
            </div>
            <div className="MobileLinks">
              <MobileLinks />
            </div>
            <span className='phoneNumber'>5 1 6 • 5 2 4 • 2 5 9 2</span>
        </div>
      </div>
    );
  }
}

export default App;
