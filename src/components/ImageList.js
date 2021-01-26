import './ImageList.css';
import ImageCard from './ImageCard';
import React from 'react';

const ImageList = props => {
    const imagesM = props.images.map(image => { 
        return <ImageCard key={image.id} image={image}/>; {/* the key attribute is on the most root tag - ex: would be on div if it wrapped the img */}
    });

    return <div className="image-list">{imagesM}</div>;
};

export default ImageList;