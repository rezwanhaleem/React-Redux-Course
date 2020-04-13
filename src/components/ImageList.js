import React from 'react';
import './css/ImageList.css';

class ImageList extends React.Component {
    // const images = props.images.map(
    //     ({id, alt_description,urls}) => { 
    //         return <img key={id} src={urls.regular} alt={alt_description}></img>
    //     }
    // );

    renderColumn(images){
        return (
            <div className='column'>
                {images.map(image =>
                    <img key={image.id} src={image.urls.regular} alt={image.alt_description}></img>
                )}
            </div>
        );
    }

    renderContent = () => {
        const columns = [];

        for(let i = 0; i < this.props.images.length/4 ; i++){
            let index = i * 4;
            columns[i] = this.renderColumn(this.props.images.slice(index, index + 4));
        }

        return columns;
    }

    render() {
        return (
            <div className='image-list'>{this.renderContent()}</div>
        );
    }
}

export default ImageList;


/**
 * 
 *  0 1 2
 *  
 *  0 => 0 4
 *  1 => 4 8
 *  2 => 8 12
 *  
 *  0 4 8
 *  1 5 9
 *  2 6 10
 *  3 7 11
 * 
 */