import React, {Component} from 'react';
import SingleCategory from './category';
import categories from './categories';

export const Home = (props) =>{
    
    return (
            <div>
                <div className='home'>
                    {categories.map( ( category ) => {
                    return <SingleCategory key={category.fileName} image={`images/categories/${category.fileName}`} name={category.fileName.split('.')[0]}  />
                })
                }
                </div>
                <div className='textContainer'>
                    <h2 className='homeHeader' >advertising print & digital design solutions</h2>
                    <p className='homeParagraph'>
                    With over 20 years design experience in Direct Mail, Catalog, Logo, Direct Response Advertising, Brochure and Editorial Design, my expertise will give your business the edge you're looking for-from concept through the final product. For successful results and quick turn-around at a reasonable price please contact D . Slott . Design and see the new possibilities for your business. You'll be glad you did!
                    </p>
                </div>
            </div>
        )
    
}