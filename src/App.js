import React, { Component } from 'react';
import {Home} from './Home'
import {Route, NavLink, Link} from 'react-router-dom';
import { Slideshow } from './slideshow';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="topBar" />
      <div className='main'>
        <div className="grid-wrapper">
          <div className="links">
              <Link to='/'>Home</Link>
              <Link to='/'>Portfolio</Link>
              <Link to='/'>Contact</Link>          
          </div>
          <div className="logo">
              <img id='flowerlogo' src="images/flower.png" />
              <img id='printlogo' src="images/d•slott•design.png" />
          </div>
        </div>
      </div>
      <Route exact path='/' component={Home}/>
      <Route path='/ads' component={Slideshow}/>      
      
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
                    name: 'logos',
                    path: '/logos'
                  },
                  {
                    name: 'educational',
                    path: '/educational'
                  },
                  {
                    name: 'book jackets',
                    path: '/bookJackets'
                  },
                ].map( linkInfo => (<div key={linkInfo.name}>| <NavLink to={linkInfo.path}> {linkInfo.name} </NavLink> </div> ))
              }
            | <NavLink to='/digital'> digital </NavLink>
            </div>
            <span className='phoneNumber'>5 1 6 • 5 2 4 • 2 5 9 2</span>
        </div>
      </div>
    );
  }
}

export default App;
