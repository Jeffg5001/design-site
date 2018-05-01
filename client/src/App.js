import React, { Component } from 'react';
import {Home} from './Home'
import {Route, NavLink, Link} from 'react-router-dom';
import { Slideshow } from './slideshow';
import { Portfolio } from './Portfolio';
import  Contact from './ContactForm';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="topBar" />
      <div className='main'>
        <div className="grid-wrapper">
          <div className="links">
              <Link to='/'>Home</Link>
              <Portfolio />
              <Contact />          
          </div>
          <div className="logo">
              <Link to='/' className='logo'><img alt='flower logo' id='flowerlogo' src="images/flower.png" /></Link>
              <Link to='/' ><img id='printlogo' alt='d•slott•design-logo' src="images/dslottdesign.png" /></Link>
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
                    name: 'logos',
                    path: '/logos'
                  },
                  {
                    name: 'educational',
                    path: '/educational'
                  },
                  {
                    name: 'book jackets',
                    path: '/book_jackets'
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
