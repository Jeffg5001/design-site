import React from "react";
import Slider from "react-slick";
import slides from './slides';
import { Link } from 'react-router-dom';

export const Slideshow = props =>{
    
    let folder = props.match.params.category;
    if(folder === 'ads') {
        folder = 'flyers';
    }
    const images = slides[folder];
    let slidesArr = Object.keys(slides);
    const categoryIndex = slidesArr.indexOf(folder)
    slidesArr[0] = 'ads';
    const prevCat = categoryIndex - 1 < 0 ? slidesArr.length - 1 : categoryIndex - 1;
    const nextCat = (categoryIndex + 1)%slidesArr.length;
    console.log('next:',nextCat);
    
    let settings = {
        dots: true,
        swipeToSlide: true,
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
            <h2 id='slide-title'><Link to={`/${slidesArr[prevCat]}`}><span className='bracket'>{`< `}</span></Link>{folder === 'flyers' ? 'ads' : folder}<Link to={`/${slidesArr[nextCat]}`}><span className='bracket'>{` >`}</span></Link></h2>
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