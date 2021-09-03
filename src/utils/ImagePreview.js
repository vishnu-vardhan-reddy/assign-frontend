/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class ImagePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
    };
}


render() {
    const { photoIndex } = this.state;
    const { images, openPhoto, setOpenPhoto } = this.props;
    console.log(images, openPhoto, setOpenPhoto)
    return (
      <div className='preview'>
        {openPhoto && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setOpenPhoto(false)}
            onMovePrevRequest={() => {
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              });
            }}
            onMoveNextRequest={() => {
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              });
            }}
          />
        )}
      </div>
    );
  }
}

export default ImagePreview;
