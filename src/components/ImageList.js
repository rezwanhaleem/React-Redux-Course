import React from 'react';

const ImageList = props => {
    return props.images.map(({id, alt_description,urls})=>{
        return <img key={id} src={urls.regular} alt={alt_description}></img>
    });
};

export default ImageList;