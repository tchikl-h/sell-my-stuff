import * as React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';
import './Gallery.scss';
 
export default class Gallery extends React.Component {
  render() {
 
    const images = [
      {
        original: 'https://nsa39.casimages.com/img/2019/01/13/190113094729468399.png',
        thumbnail: 'https://nsa39.casimages.com/img/2019/01/13/190113094729468399.png',
      },
      {
        original: 'https://nsa39.casimages.com/img/2019/01/13/190113094730887114.png',
        thumbnail: 'https://nsa39.casimages.com/img/2019/01/13/190113094730887114.png',
      },
      {
        original: 'https://nsa39.casimages.com/img/2019/01/13/190113094728263042.png',
        thumbnail: 'https://nsa39.casimages.com/img/2019/01/13/190113094728263042.png',
      },
      {
        original: 'https://nsa39.casimages.com/img/2019/01/13/190113094726921427.jpg',
        thumbnail: 'https://nsa39.casimages.com/img/2019/01/13/190113094726921427.jpg',
      },
    ]
 
    return (
      <ImageGallery items={images} showPlayButton={false} showThumbnails={false} showBullets={true}/>
    );
  }
}