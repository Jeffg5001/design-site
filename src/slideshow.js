import React from "react";
import Slider from "react-slick";
import images from "./ads"

export const Slideshow = props =>{
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
        <div className='container'>
            <Slider {...settings}>
               {images.map(image =>(
            <div key={image}>
                <img src={`images/Flyers/${image}`} />
            </div>) )}
           </Slider>
        </div>
    )
}