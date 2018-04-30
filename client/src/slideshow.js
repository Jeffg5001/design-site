import React from "react";
import Slider from "react-slick";
import slides from './slides';

export const Slideshow = props =>{
    let folder = props.match.params.category;
    if(folder === 'ads') {
        folder = 'flyers';
    }
    const images = slides[folder];
    let settings = {
        dots: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // //auto:true,
    }
    return (
        //<div ><img src={`/images/ads_Flyers/${images[0]}`} style={ {display: 'block'} } /></div>
        <div >
        <div className='container'>
            <h2 id='slide-title'><span className='bracket'>{`< `}</span>{folder === 'flyers' ? 'ads' : folder === 'book_jackets' ? 'books' : folder}<span className='bracket'>{` >`}</span></h2>
            <Slider {...settings}>
               {images.map(image =>(
            <div key={image}>
                <img alt={`${image}`} src={`images/${folder}/${image}`} />
            </div>) )}
           </Slider>
        </div>
        <div className='textContainer' id='slogan'>
        <h2 className='homeHeader' >advertising print & digital design solutions</h2>   
        </div>     
        </div>
    )
}