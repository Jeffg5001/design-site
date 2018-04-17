import React, {Component} from 'react';

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div>
                <img className="welcome-header" src='images/welcometop.gif' />
                <div className="grid-wrapper">
                    <div className="links">
                        <blockquote>
                            <p align="left" className="style1"><a href="ads_2.html" target="_self" className="style1"> Ads & Flyers</a></p>
                            <p align="left" className="style1"><a href="books_guides.html" className="style1">Books, Guides & Annuals</a></p>
                            <p align="left" className="style1"><a href="branding.html" className="style1">Branding</a></p>
                            <p align="left" className="style1"><a href="brochures.html" className="style1">Brochures</a></p>
                            <p align="left" className="style1"><a href="digital.html" title="digital media by d slott design" target="_self" className="style1">Digital</a></p>
                            <p align="left" className="style1"><a href="directmail.html" className="style1">Direct Marketing</a></p>
                            <p align="left" className="style1"><a href="educational.html" className="style1">Educational</a></p>
                            <p align="left" className="style1"><a href="flash.html" className="style1">Flash & Gif Banners</a></p>
                        </blockquote>
                    </div>
                    <div className="logo">
                        <img src="images/flowerwithslr.jpg" />
                    </div>
                </div>
            </div>
        )
    }
}